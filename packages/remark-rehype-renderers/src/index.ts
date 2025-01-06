import type GithubSlugger from "github-slugger";
import type {ElementContent, Properties} from "hast";
import type {Heading, InlineCode, Link, Literal, Node, Parents} from "mdast";
import type {ContainerDirective, LeafDirective} from "mdast-util-directive";
import type {Handler, State} from "mdast-util-to-hast";
import {visit} from "unist-util-visit";

function e(
    tagName: string,
    properties: Properties,
    children?: Array<ElementContent>,
): ElementContent {
    return {
        type: "element",
        properties,
        tagName,
        children: children ?? [],
    };
}

type HandlerReturn = Array<ElementContent> | ElementContent | undefined;

export const LinkHandler: Handler = (
    state: State,
    node: Link,
    parent: Parents | undefined,
): HandlerReturn => {
    const href = node.url as string;
    const children = state.all(node);

    const external = href.startsWith("http");
    return {
        type: "element",
        tagName: "a",
        children: children,
        properties: {
            class: "link",
            href,
            target: external ? "_blank" : undefined,
            rel: external ? "noopener noreferrer" : undefined,
        },
    };
};

export const InlineCodeHandler: Handler = (
    state: State,
    node: InlineCode,
    parent: Parents | undefined,
): HandlerReturn => {
    return {
        type: "element",
        tagName: "code",
        children: [
            {
                type: "text",
                value: node.value,
            },
        ],
        properties: {
            class: "inline-code",
        },
    };
};

export const LeafHandler = (
    state: State,
    node: LeafDirective,
    parent: Parents | undefined,
): HandlerReturn => {
    switch (node.name) {
        case "requiredMod":
            return RequiredMods(state, node, parent);
        case "deprecated":
            return DeprecatedHandler(state, node, parent);
        case "since":
            //TODO in the Markdown processor ::Since is placed in a really weird place, it isn't really possible to style it nicely
            return undefined;

        default:
            throw new Error(`Unknown leaf directive: ${node.name}`);
    }
};

function modLinkElement(
    href: string,
    children: ElementContent[],
): ElementContent {
    return {
        type: "element",
        tagName: "a",
        properties: {
            href,
            class: "font-semibold underline",
            target: "_blank",
            rel: "noopener noreferrer",
        },
        children,
    };
}

const RequiredMods = (
    state: State,
    node: LeafDirective,
    parent: Parents | undefined,
): HandlerReturn => {
    const attributes = node.attributes ?? {};
    const builtIn = attributes.builtIn === "true";
    const modLink = attributes.modLink ?? "";
    const requiredMod = attributes.requiredMod ?? "";
    const requiredModLink = attributes.requiredModLink ?? "";

    const children = state.all(node);

    const contextualClasses = builtIn
        ? "border-cyan-500 bg-cyan-500"
        : "border-rose-500 bg-rose-500";

    const svgChildren: Array<ElementContent> = [
        {
            type: "element",
            tagName: "path",
            properties: {
                d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            },
            children: [],
        },
    ];
    if (builtIn) {
        svgChildren.push({
            type: "element",
            tagName: "path",
            properties: {
                d: "m9 12 2 2 4-4",
            },
            children: [],
        });
    } else {
        svgChildren.push(
            {
                type: "element",
                tagName: "path",
                properties: {
                    d: "M12 8v4",
                },
                children: [],
            },
            {
                type: "element",
                tagName: "path",
                properties: {
                    d: "M12 16h.01",
                },
                children: [],
            },
        );
    }

    const content: Array<ElementContent> = [];

    if (builtIn) {
        content.push(
            {
                type: "text",
                value: "This page relates to ",
            },
            modLinkElement(modLink, children),
            {
                type: "text",
                value: ", which has built-in support!",
            },
        );
    } else {
        content.push(
            {
                type: "text",
                value: "This page relates to ",
            },
            modLinkElement(modLink, children),
            {
                type: "text",
                value: ", which does not have built-in support, you will need to install ",
            },
            modLinkElement(requiredModLink, [
                {
                    type: "text",
                    value: requiredMod,
                },
            ]),
            {
                type: "text",
                value: " as well",
            },
        );
    }

    return {
        type: "element",
        tagName: "div",
        properties: {
            class: `my-4 flex gap-x-2 border-2 bg-opacity-25 p-4 ${contextualClasses}`,
        },
        children: [
            {
                type: "element",
                tagName: "svg",
                properties: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    class: "my-auto h-6 w-6",
                },
                children: svgChildren,
            },
            {
                type: "element",
                tagName: "span",
                properties: {
                    class: "my-auto",
                },
                children: content,
            },
        ],
    };
};

const DeprecatedHandler = (
    state: State,
    node: LeafDirective,
    parent: Parents | undefined,
): HandlerReturn => {
    const children = state.all(node);
    const nodeChildren: Array<ElementContent> = [
        {
            type: "element",
            tagName: "div", // TODO turn this into a span?
            properties: {
                class: `px-4 py-2 text-center${children ? "border-b-2 border-red-400" : ""}`,
            },
            children: [
                {
                    type: "text",
                    value: "Deprecated",
                },
            ],
        },
    ];
    if (children) {
        nodeChildren.push({
            type: "element",
            tagName: "div",
            properties: {
                class: "bg-red-100 bg-opacity-25 px-4 py-4 dark:bg-gray-800 dark:bg-opacity-25",
            },
            children: children,
        });
    }
    return {
        type: "element",
        tagName: "div",
        properties: {
            class: "mb-4 border-2 border-red-500 bg-red-500 bg-opacity-25",
        },
        children: nodeChildren,
    };
};

export const HeaderHandler = (
    sluggerFactory: (path: string) => GithubSlugger,
    state: State,
    node: Heading,
    parent: Parents | undefined,
): HandlerReturn => {
    if (!state.options.file) {
        throw new Error("No file found!");
    }
    const slugger = sluggerFactory(state.options.file.path);
    let slugBase = "";
    visit<Node, undefined>(node, (child) => {
        if (child.type === "text" || child.type === "raw") {
            slugBase += (child as Literal).value.replace(/\{/g, "${");
        }
    });
    const children = state.all(node);
    const slug = slugger.slug(slugBase);
    return {
        type: "element",
        tagName: `h${node.depth}`,
        properties: {
            class: `group flex${node.depth === 1 ? " justify-center" : ""}`,
            id: "",
        },
        children: [
            {
                type: "element",
                tagName: "a",
                properties: {
                    href: `#${slug}`,
                    class: "header",
                    "aria-label": `Link to ${slug}`,
                },
                children: [
                    {
                        type: "element",
                        tagName: "span",
                        properties: {
                            class: "scroll-mt-20",
                            id: slug,
                        },
                        children: children,
                    },
                    {
                        type: "element",
                        tagName: "div",
                        properties: {
                            class: "header-link",
                            "aria-hidden": "true",
                        },
                        children: [
                            {
                                type: "element",
                                tagName: "svg",
                                properties: {
                                    width: "1em",
                                    height: "1em",
                                    viewBox: "0 0 24 24",
                                    class: "my-auto h-5 w-5",
                                    "data-icon": "link",
                                },
                                children: [
                                    {
                                        type: "element",
                                        tagName: "use",
                                        properties: {
                                            "xlink:href": "#ai:local:link",
                                        },
                                        children: [],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    };
};

export const ContainerHandler = (
    sluggerFactory: (path: string) => GithubSlugger,
    state: State,
    node: ContainerDirective,
    parent: Parents | undefined,
): HandlerReturn => {
    if (!state.options.file) {
        throw new Error("No file found!");
    }
    const slugger = sluggerFactory(state.options.file.path);
    switch (node.name) {
        case "group":
            return GroupHandler(state, node, slugger);
        case "searchable":
            //TODO implement searchable
            return state.all(node);
        default:
            return undefined;
        // throw new Error(`Unknown container directive: ${node.name}`);
    }
};

const GroupHandler = (
    state: State,
    node: ContainerDirective,
    slugger: GithubSlugger,
): HandlerReturn => {
    if (!node.attributes || !node.attributes.name) {
        throw new Error("Group directive is missing name attribute!");
    }
    const name = node.attributes.name;
    const id = slugger.slug(name);

    return e(
        "collapsable-group",
        {
            id: id,
            "data-open": "true",
            class: "doc-group my-2",
        },
        [
            e(
                "div",
                {
                    class: "header",
                },
                [
                    e(
                        "a",
                        {
                            href: `#${id}`,
                            class: "title group",
                            "aria-label": `Link to ${name}`,
                        },
                        [
                            e("span", { class: "my-auto" }, [
                                { type: "text", value: name },
                            ]),
                            e(
                                "svg",
                                {
                                    "aria-hidden": "true",
                                    width: "1em",
                                    height: "1em",
                                    viewBox: "0 0 24 24",
                                    class: "link-icon group-hover:block",
                                    "data-icon": "link",
                                },
                                [e("use", { "xlink:href": "#ai:local:link" })],
                            ),
                        ],
                    ),
                    e("button", {
                        class: "toggle",
                        "data-control": "true",
                        "aria-label": "Toggle group",
                    }),
                ],
            ),
            e("div", { class: "collapsable-wrapper px-2 py-2" }, [
                e(
                    "div",
                    { class: "collapsing-content overflow-hidden" },
                    state.all(node),
                ),
            ]),
        ],
    );
};
