import type {HTMLAttributes} from "astro/types";
import type {Nav, PageMeta, SearchDocument} from "docs-model";
import {Client} from "typesense";
import type {SearchParams, SearchResponse,} from "typesense/lib/Typesense/Documents";
import {SEARCH_TOKEN} from "../util/Constants";
import {debounce, escapeHtml, shouldFolderBeOpen} from "../util/WebSafeUtil";

const h = <T extends HTMLElement>(
    tag: string | T,
    attributes: HTMLAttributes<"base">,
    children?: HTMLElement[] | string,
): T => {
    const element =
        typeof tag === "string" ? (document.createElement(tag) as T) : tag;

    for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(
            key,
            typeof value === "string" ? value : `${value}`,
        );
    }
    if (children) {
        if (typeof children === "string") {
            element.innerText = children;
        } else {
            element.append(...children);
        }
    }
    return element;
};

const navItem = (name: string, path: string, depth: number) => {
    const pagePath = path.replace(/\.(md|json)/, "");
    const selected = slug === pagePath || (slug === "" && pagePath === "index");
    const item = h<HTMLAnchorElement>(
        "a",
        {
            class: `nav-element-item block${selected ? " nav-element-item-selected" : ""}`,
            href: `/${version}/en/${pagePath}`,
            style: `padding-left: ${(depth === 1 ? 0.5 : 1) + depth}ch`,
        },
        name,
    );
    item.innerText = name;
    return item;
};
//TODO try and make it only load the html it needs?
const navFolder = (
    nav: Nav,
    name: string,
    depth: number,
    canForceOpen: boolean,
): HTMLDivElement => {
    const shouldBeOpen = canForceOpen && shouldFolderBeOpen(name, nav, meta);

    const children = [];
    for (const [value, navValue] of Object.entries(nav)) {
        if (typeof navValue === "string") {
            children.push(navItem(value, navValue, depth + 1));
        } else {
            children.push(navFolder(navValue, value, depth + 1, canForceOpen));
        }
    }
    const nodeAttributes: HTMLAttributes<"div"> = {
        is: "nav-folder",
        class: "nav-folder",
    };
    if (shouldBeOpen) {
        nodeAttributes["data-open"] = true;
    }
    const template = document.getElementById(
        "nav-folder-element",
    ) as HTMLTemplateElement | null;
    if (!template || !template.content || !template.content.firstElementChild) {
        throw new Error("No 'nav-folder-element' template found.");
    }
    return h<HTMLDivElement>(
        template.content.firstElementChild.cloneNode(true) as HTMLDivElement,
        nodeAttributes,
        [
            h<HTMLButtonElement>(
                "button",
                {
                    class: "nav-element-folder",
                    style: `padding-left: ${depth}ch`,
                },
                name,
            ),
            h<HTMLDivElement>(
                "div",
                {
                    class: "collapsable-wrapper",
                },
                [
                    h<HTMLDivElement>(
                        "div",
                        {
                            class: "collapsing-content overflow-hidden",
                        },
                        shouldBeOpen ? children : undefined,
                    ),
                ],
            ),
        ],
    );
};

const nav: Nav = window.docsJson.nav;
const version: string = window.pageVersion;
const meta: PageMeta = window.pageMeta;
let slug = window.location.pathname.substring(`/${version}/en/`.length);
if (slug.endsWith("/")) {
    slug = slug.substring(0, slug.length - 1);
}
const sidenav = document.getElementById("sidenav");
const content = sidenav?.querySelector("#sidenav-content");
if (sidenav && content) {

    content.innerHTML = "";
    for (const [value, navValue] of Object.entries(nav)) {
        if (typeof navValue === "string") {
            content.appendChild(navItem(value, navValue, 1));
        } else {
            content.appendChild(navFolder(navValue, value, 1, true));
        }
    }
}

class NavController extends HTMLButtonElement {
    constructor() {
        super();

        const getIcon = (open: boolean) => {
            const template = document.querySelector<HTMLTemplateElement>(
                "#nav-controller-icons",
            );
            if (!template) {
                throw new Error("No 'navController-icons' template found.");
            }
            const icon = template.content.querySelector(
                !open ? "#nav-controller-open" : "#nav-controller-close",
            );
            if (!icon) {
                throw new Error(`No '${open ? "open" : "close"}' icon found.`);
            }
            return icon.cloneNode(true);
        };

        this.addEventListener("click", () => {
            const sidenav = document.getElementById("sidenav");
            if (!sidenav) {
                return;
            }
            const isOpen = !sidenav.getAttribute("data-open");
            const icon = getIcon(isOpen);
            if (this.firstElementChild) {
                this.firstElementChild.replaceWith(icon);
                if (!isOpen) {
                    sidenav.removeAttribute("data-open");
                } else {
                    sidenav.setAttribute("data-open", "true");
                }
            }
        });
        this.appendChild(getIcon(false));
    }
}

class CollapsableGroup extends HTMLElement {
    constructor() {
        super();

        const isOpen = () => {
            return this.getAttribute("data-open") === "true";
        };

        const getControlNode = (): Node => {
            const template =
                document.querySelector<HTMLTemplateElement>("#group-icons");
            if (template?.content) {
                const node = template.content.querySelector(
                    isOpen() ? "#group-close" : "#group-open",
                );
                if (node) {
                    return node.cloneNode(true);
                }
            }
            throw new Error("Unable to find control node!");
        };

        const control = this.querySelector("button[data-control=true]");
        if (control) {
            const defaultNode = getControlNode();
            if (control.firstChild) {
                control.firstChild.replaceWith(defaultNode);
            } else {
                control.appendChild(defaultNode);
            }
            control.addEventListener("click", () => {
                const open = isOpen();
                if (open) {
                    this.removeAttribute("data-open");
                } else {
                    this.setAttribute("data-open", "true");
                }
                control.firstChild?.replaceWith(getControlNode());
            });
        }
    }
}

class NavFolder extends HTMLElement {
    constructor() {
        super();

        const control = this.firstElementChild;

        const collapsedContent = this.lastElementChild;
        if (!control || !collapsedContent) {
            return;
        }

        // @ts-ignore
        collapsedContent.addEventListener(
            "transitionrun",
            (e: TransitionEvent) => {
                const open = this.getAttribute("data-open") === "true";
                if (e.pseudoElement) {
                    return;
                }
                e.stopPropagation();

                if (!open) {
                    return;
                }
                const currentTarget = e.currentTarget as HTMLElement | null;
                if (!currentTarget?.firstElementChild) {
                    return;
                }

                let current = currentTarget as HTMLElement | null;
                const jsonPath: string[] = [];
                while (current && current.id !== "sidenav") {
                    current = current.parentElement;
                    if (
                        current &&
                        current.getAttribute("is") === "nav-folder" &&
                        current.firstElementChild &&
                        current.firstElementChild.textContent
                    ) {
                        jsonPath.push(current.firstElementChild.textContent);
                    }
                }
                jsonPath.reverse();

                let currentNav: Nav | string = nav;
                for (const value of jsonPath) {
                    if (typeof currentNav !== "string") {
                        currentNav = currentNav[value];
                    }
                }
                currentTarget.firstElementChild.innerHTML = "";
                for (const [value, navValue] of Object.entries(currentNav)) {
                    if (typeof navValue === "string") {
                        currentTarget.firstElementChild.appendChild(
                            navItem(value, navValue, jsonPath.length + 1),
                        );
                    } else {
                        currentTarget.firstElementChild.appendChild(
                            navFolder(
                                navValue,
                                value,
                                jsonPath.length + 1,
                                true,
                            ),
                        );
                    }
                }
            },
        );
        // @ts-ignore
        collapsedContent.addEventListener(
            "transitionend",
            (e: TransitionEvent) => {
                if (e.pseudoElement) {
                    return;
                }
                e.stopPropagation();
                const open = this.getAttribute("data-open") === "true";
                if (!open) {
                    const collapsingContent = this.querySelector(
                        "div.collapsing-content",
                    );
                    if (collapsingContent) {
                        collapsingContent.innerHTML = "";
                    }
                }
            },
        );
        control.addEventListener("click", () => {
            const open = this.getAttribute("data-open") === "true";
            if (open) {
                this.removeAttribute("data-open");
            } else {
                this.setAttribute("data-open", "true");
            }
        });
    }
}

class ThemeSelect extends HTMLElement {
    constructor() {
        super();

        const themeToggle = this.firstElementChild
        if (themeToggle) {
            themeToggle.addEventListener("click", () => {
                const isDark = localStorage.getItem("pageTheme") === "dark";
                window.changeTheme(isDark ? "light" : "dark");
            });
        }
    }
}

class VersionSelect extends HTMLElement {
    constructor() {
        super();
        const select = this.querySelector("#version-select");
        if (select) {
            select.addEventListener("change", (e) => {
                if (e.currentTarget instanceof HTMLSelectElement) {
                    window.location.pathname = `${e.currentTarget.value}/en`;
                }
            });
        }
    }
}

class Search extends HTMLElement {
    constructor() {
        super();
        const [btn, dialog] = this.children as unknown as [
            btn: HTMLButtonElement,
            dialog: HTMLDialogElement,
        ];

        const dialogBody = dialog.firstElementChild;
        if (!dialogBody) {
            return;
        }
        /** Close the modal if a user clicks on a link or outside of the modal. */
        const onClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            const isLink = "href" in target;
            if (
                isLink ||
                (document.body.contains(target) && !dialogBody.contains(target))
            ) {
                closeModal();
            }
        };

        const openModal = (event?: MouseEvent) => {
            dialog.showModal();
            document.body.classList.toggle("overflow-hidden");
            this.querySelector("input")?.focus();
            event?.stopPropagation();
            window.addEventListener("click", onClick);
        };
        const closeModal = () => dialog.close();

        btn.addEventListener("click", openModal);

        dialog.addEventListener("close", () => {
            document.body.classList.toggle("overflow-hidden");
            window.removeEventListener("click", onClick);
        });

        window.addEventListener("keydown", (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k" || e.key === "/") {
                dialog.open ? closeModal() : openModal();
                e.preventDefault();
            }
        });

        const searchInput = dialog.querySelector<HTMLInputElement>("#search");

        const showMore = dialog.querySelector<HTMLButtonElement>("#show-more");
        const resultsContainer =
            dialog.querySelector<HTMLDivElement>("#search-results");
        if (!searchInput || !resultsContainer || !showMore) {
            return;
        }
        const client = new Client({
            nodes: [
                {
                    host: "search.blamejared.com",
                    port: 443,
                    protocol: "https",
                },
            ],
            apiKey: SEARCH_TOKEN,
            connectionTimeoutSeconds: 2,
        });

        const performSearch = async (
            value: string,
            limit: number,
        ): Promise<number> => {
            if (value.length < 3) {
                resultsContainer.innerHTML = "";
                return limit;
            }
            let newLimit = limit;
            const searchParameters: SearchParams = {
                q: value,
                query_by: "title,content,comment",
                group_by: "title",
                infix: ["off", "always", "off"],
                limit,
            };

            const searchResults: SearchResponse<SearchDocument> = await client
                .collections<SearchDocument>(
                    `docs.blamejared.com_${version}_en`,
                )
                .documents()
                .search(searchParameters);
            const gHits = searchResults.grouped_hits;
            const hasMore = searchResults.found >= limit;
            if (hasMore) {
                newLimit += 10;
                showMore.classList.remove("hidden");
            } else {
                newLimit = 10;
                showMore.classList.add("hidden");
            }

            if (gHits && gHits.length > 0) {
                resultsContainer.innerHTML = `<p>${hasMore ? `Showing ${limit} of ${searchResults.found} results` : `${searchResults.found} results`}</p><ol>${gHits
                    .map((hit) => {
                        return `<li class="search-result-group"><p class="document-title"><a href="/${window.pageVersion}/en/${hit.hits[0].document.page_url}" class="document-link">${hit.group_key[0]}</a></p>${hit.hits
                            .map((subHit) => {
                                const { document } = subHit;
                                if (subHit.highlights) {
                                    const result = subHit.highlights.reduce<{
                                        content?: string;
                                        comment?: string;
                                    }>(
                                        (acc, highlight) => {
                                            if (highlight.field === "content") {
                                                const prefix = document.prefix
                                                    ? `<span>${escapeHtml(document.prefix)}</span>`
                                                    : "";
                                                const snippet =
                                                    highlight.snippet;
                                                const suffix = document.suffix
                                                    ? `<span>${escapeHtml(document.suffix)}</span>`
                                                    : "";
                                                acc.content = `${prefix}${snippet}${suffix}`;
                                            }
                                            if (highlight.field === "comment") {
                                                acc.comment = highlight.snippet;
                                            }
                                            return acc;
                                        },
                                        {
                                            content: undefined,
                                            comment: undefined,
                                        },
                                    );
                                    if (!result.content && !result.comment) {
                                        return "";
                                    }
                                    if (result.content && result.comment) {
                                        return `<div class="search-result"><p><a class="result-link" href="/${window.pageVersion}/en/${subHit.document.url}">${result.content}</a></p><p>${result.comment}</p></div>`;
                                    }
                                    return `<div class="search-result"><p><a class="result-link" href="/${window.pageVersion}/en/${subHit.document.url}">${result.content ?? ""}${result.comment ?? ""}</a></p></div>`;
                                }
                                return "";
                            })
                            .join("")}</li>`;
                    })
                    .join("")}</ol>`;
            } else {
                resultsContainer.innerHTML = "<p>No results found.</p>";
            }
            return newLimit;
        };
        let limit = 10;

        searchInput.addEventListener(
            "keyup",
            debounce(async (e: KeyboardEvent) => {
                if (!e.target || !("value" in e.target)) {
                    return;
                }
                const value = e.target.value as string;
                showMore.classList.add("hidden");
                limit = 10;
                limit = await performSearch(value, limit);
            }, 250),
        );
        showMore.addEventListener("click", async () => {
            limit = await performSearch(searchInput.value, limit);
        });
        searchInput.dispatchEvent(new KeyboardEvent("keydown", { key: "a" }));
    }
}

customElements.define("collapsable-group", CollapsableGroup);
customElements.define("nav-folder", NavFolder);
customElements.define("nav-controller", NavController, { extends: "button" });
customElements.define("theme-select", ThemeSelect);
customElements.define("version-select", VersionSelect);
customElements.define("site-search", Search);
