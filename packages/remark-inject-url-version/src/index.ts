import {visit} from "unist-util-visit";
import type {Transformer} from "unified";
import type {Node} from "unist";
import type {RootContent} from "mdast";

export default (version: string): Transformer<Node, Node> => {
    return (tree: Node) => {
        visit<Node, Node>(tree, (node) => {
            const contentNode = node as RootContent;
            if (contentNode.type === 'link') {
                const {url} = contentNode
                if (!url || url.startsWith("http") || url.startsWith("#")) {
                    return;
                }

                if (!url.startsWith("/")) {
                    contentNode.url = `../${url}`
                }

                const newUrl = url.startsWith("/") ? url : `/${url}`;
                contentNode.url = `/${version}/en${newUrl}`;
            }
        })
    };
};
