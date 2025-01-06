import type {Literal, Node, Parent, Root, RootContent, Table} from "mdast";
import type {Plugin} from "unified";
import type {Node as UnistNode, Position as UnistPosition} from "unist";
import {visit} from "unist-util-visit";
import type {Page, SearchDocument} from "docs-model";
import GithubSlugger from "github-slugger";
import type {ContainerDirective} from "mdast-util-directive";

// TODO Not sure if I want to do something with these
const ignoredHeaders = [
    "extending-record",
    "static-methods",
    "importing-the-class",
    "implemented-interfaces",
    "methods",
    "static-properties",
    "properties",
    "casters",
    "operators",
    "listening-to-the-event",
];
const ignoredContent = [
    /Return Type: .*/,
    /It might be required for you to import the package if you encounter any issues \(like casting an Array\), so better be safe than sorry and add the import at the very top of the file\./,
    /.* implements the following interfaces. That means all methods defined in these interfaces are also available in .*/,
    /.* extends Record\. That means all methods available in Record are also available in .*/,
    /true|false|double|Double|float|Float|int|Integer|boolean|Boolean|bool|string|String|void/,
];
const remarkSearch: Plugin<
    {
        slug: string;
        page: Page;
        searchableContent: Record<string, SearchDocument[]>;
    }[],
    Root
> = (options) => {
    const { slug, searchableContent, page } = options;
    const slugger = new GithubSlugger();
    return (tree: UnistNode) => {
        slugger.reset();

        const textExtractor = (
            node: Parent,
            options: { inlineCode: boolean } = { inlineCode: false },
        ): string => {
            let text = "";
            visit<Node, Node>(node, (child) => {
                if (
                    child.type === "text" ||
                    child.type === "raw" ||
                    (options.inlineCode && child.type === "inlineCode")
                ) {
                    text += (child as Literal).value.replace(/\{/g, "${");
                }
            });
            return text;
        };

        /**
         * Loops over the table's rows, skipping the first row (usually just headers) and extracts the text from each cell
         * @param node
         */
        const tableExtractor = (node: Table): string[] => {
            const content = [];
            for (let i = 1; i < node.children.length; i++) {
                const row = node.children[i];
                for (const child of row.children) {
                    const text = textExtractor(child, { inlineCode: true });
                    if (text !== "") {
                        content.push(text);
                    }
                }
            }
            return content;
        };

        // Visit all nodes, storing the position of headers
        const headers: Record<string, UnistPosition | undefined> = {};
        visit<Node, Node>(tree, (node) => {
            const contentNode = node as RootContent;
            switch (contentNode.type) {
                case "heading": {
                    const slugBase = textExtractor(contentNode);
                    headers[slugger.slug(slugBase)] = contentNode.position;
                    break;
                }
                case "containerDirective": {
                    const containerNode = contentNode as ContainerDirective;
                    const name = containerNode.name;
                    if (
                        name === "group" &&
                        (containerNode.attributes || { name: undefined }).name
                    ) {
                        const name =
                            (containerNode.attributes || { name: "" }).name ||
                            "";
                        headers[slugger.slug(name)] = containerNode.position;
                    }
                    break;
                }
            }
        });
        const getHeading = (position?: UnistPosition): string | undefined => {
            let lastHeading = undefined;
            for (const key of Object.keys(headers).reverse()) {
                const headerPosition = headers[key];
                if (headerPosition === undefined) {
                    continue;
                }
                if (!position) {
                    break;
                }
                if (position.start.line >= headerPosition.start.line) {
                    lastHeading = key;
                    break;
                }
            }
            return lastHeading;
        };

        const storeNode = (node: Node, content: string) => {
            if (ignoredContent.some((regex) => regex.test(content))) {
                return;
            }
            const lastHeading = getHeading(node.position) ?? "";
            const useHash = lastHeading !== "";
            if (!Object.hasOwn(searchableContent, lastHeading)) {
                searchableContent[lastHeading] = [];
            }
            searchableContent[lastHeading].push({
                page_url: slug,
                url: `${slug}${useHash ? "#" : ""}${lastHeading}`,
                title: page.name,
                content,
            });
        };
        // Visit all the other nodes, matching their position to a header
        visit<Node, Node>(tree, (node) => {
            const contentNode = node as RootContent;

            switch (contentNode.type) {
                case "containerDirective": {
                    const containerNode = contentNode as ContainerDirective;
                    const name = containerNode.name;
                    if (
                        name === "group" &&
                        (containerNode.attributes || { name: undefined }).name
                    ) {
                        const name =
                            (containerNode.attributes || { name: "" }).name ||
                            "";
                        storeNode(containerNode, name);
                    }
                    break;
                }
                case "paragraph": {
                    const content = textExtractor(contentNode);
                    storeNode(contentNode, content);
                    break;
                }
                case "table": {
                    const contents = tableExtractor(contentNode);
                    for (const content of contents) {
                        storeNode(contentNode, content);
                    }
                    break;
                }
                default:
            }
        });
    };
};

export default remarkSearch;
