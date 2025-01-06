import type * as mdast from "mdast";
import type {Plugin} from "unified";
import type {Node, Parent} from "unist";
import {visit} from "unist-util-visit";

const remarkTable: Plugin<unknown[], mdast.Root> = () => {
    return (tree: Node, file) => {
        visit(tree, "table", visitor);

        function children(node: Parent): Parent[] {
            return node.children as Parent[];
        }

        function visitor(node: Parent) {
            const [thead, ...tbody] = node.children as [
                thead: Parent,
                tbody: Parent,
            ];
            for (const tr of tbody) {
                children(tr).forEach((td, index) => {
                    let tdChildren = children(td);
                    if (tdChildren.length === 0) {
                        tdChildren = [
                            {
                                type: "text",
                                // Zero width space for the height
                                // @ts-ignore
                                value: "�",
                            },
                        ];
                    }
                    if (!children(thead)[index]) {
                        console.log(file.path);
                        console.error("Invalid table in file!");
                        return;
                    }
                    tdChildren = [
                        {
                            type: "div",
                            children: children(thead)[index].children,
                        },
                        {
                            type: "paragraph",
                            children: td.children,
                            data: {
                                hName: "span",
                            },
                        },
                    ];
                    td.children = tdChildren;
                });
            }
        }
    };
};

export default remarkTable;
