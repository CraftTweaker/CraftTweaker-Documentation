import {
    type AnnotationRenderOptions,
    ExpressiveCodeAnnotation,
    type ExpressiveCodeInlineRange,
    type ExpressiveCodePlugin,
    definePlugin,
} from "@expressive-code/core";
import {
    type BaseTypePage,
    type BuildContext,
    type MemberModel,
    OperatorTypeModel,
    type PageModel,
    type TypeModel,
} from "docs-model";
import type {Parents} from "hast";

export interface ExampleCommentProps {
    exampleComment: { type: TypeModel; member: MemberModel };
    context: BuildContext<BaseTypePage>;
}

declare module "@expressive-code/core" {
    export interface ExpressiveCodeBlockProps extends ExampleCommentProps {}
}

class LinkAnnotation extends ExpressiveCodeAnnotation {
    target: string | null;
    renderAs: string;

    constructor(
        inlineRange: ExpressiveCodeInlineRange,
        target: string | null,
        renderAs: string,
    ) {
        super({ inlineRange });
        this.target = target;
        this.renderAs = renderAs;
    }

    render({ nodesToTransform }: AnnotationRenderOptions) {
        return nodesToTransform.map((node) => {
            if (!this.target || !this.renderAs) {
                return node;
            }
            if (this.target.startsWith("/")) {
                return {
                    type: "element",
                    tagName: "a",
                    properties: { href: this.target, class: "type-link" },
                    children: [{ type: "text", value: this.renderAs }],
                };
            }
            return {
                type: "text",
                value: this.renderAs,
            };
        }) as Parents[];
    }
}

export default (): ExpressiveCodePlugin => {
    return definePlugin({
        name: "example-comment",
        hooks: {
            preprocessCode: ({ codeBlock }) => {
                const { props } = codeBlock;
                const exampleComment = props.exampleComment;
                const context = props.context;

                if (!exampleComment || !context) {
                    return;
                }

                const { type, member } = exampleComment;

                function renderExample(context: BuildContext<PageModel>) {
                    if (member.isMethod()) {
                        return `// ${type.renderMemberOwner(context, false)}.${member.key}${member.renderTypeArguments(context, false)}(${member.renderParams(context, false)})${member.returnType.renderReturnType(context, false)};`;
                    }
                    if (member.isGetter()) {
                        return `// ${type.renderMemberOwner(context, false)}.${member.key}${member.type.renderReturnType(context, false)}`;
                    }
                    if (member.isSetter()) {
                        return `// ${type.renderMemberOwner(context, false)}.${member.key} = ${member.renderParam(context, false, 0)};`;
                    }
                    if (member.isField()) {
                        return `// ${type.renderMemberOwner(context, false)}.${member.key}${member.type.renderReturnType(context, false)}`;
                    }
                    if (member.isEnumConstant()) {
                        return `// ${type.renderMemberOwner(context, false)}.${member.key}`;
                    }
                    if (member.isCaster()) {
                        return `// ${type.renderMemberOwner(context, false)}${member.to.renderReturnType(context, false)}`;
                    }
                    if (member.isOperator()) {
                        return OperatorTypeModel.render(
                            context,
                            type,
                            member,
                            false,
                        );
                    }
                    if (member.isConstructor()) {
                        return `// new ${type.renderMemberOwner(context, false)}${member.renderTypeArguments(context, false)}(${member.renderParams(context, false)});`;
                    }
                    throw new Error("Unknown member kind!");
                }

                const code = renderExample(context);
                codeBlock.insertLine(0, code);

                for (const line of codeBlock.getLines()) {
                    const matches = [
                        ...line.text.matchAll(/§([^§]+)§([^§]+)§/g),
                    ].reverse();
                    for (const match of matches) {
                        const from = match.index || 0;
                        const to = from + match[0].length;

                        const renderAs = match[1];
                        const target = context.types[match[2]];
                        const basic = !target || target.keys.length > 1; // We can't link to things that have multiple keys, so we just ignore them
                        const url = basic
                            ? null
                            : `/${context.version}/en/${target.keys[0]}`;

                        line.addAnnotation(
                            new LinkAnnotation(
                                {
                                    columnStart: from,
                                    columnEnd: to,
                                },
                                url,
                                renderAs,
                            ),
                        );

                        // Remove the squiggle markup from the code plaintext
                        line.editText(from, to, match[1]);
                    }
                }
            },
        },
    });
};
