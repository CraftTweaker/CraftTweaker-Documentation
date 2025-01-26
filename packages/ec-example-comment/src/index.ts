import {type AnnotationRenderOptions, definePlugin, ExpressiveCodeAnnotation, type ExpressiveCodeInlineRange, type ExpressiveCodePlugin,} from "@expressive-code/core";
import {type BuildContext, type CasterMemberModel, type ConstructorMemberModel, type EnumConstantMemberModel, type FieldMemberModel, type GetterMemberModel, type MemberModel, type MemberVisitor, type MethodMemberModel, type OperatorMemberModel, OperatorTypeModel, type PageModel, type SetterMemberModel, type TypeModel} from "docs-model";
import type {Parents} from "hast";

export interface ExampleCommentProps {
    exampleComment: { type?: TypeModel; member?: MemberModel };
    context: BuildContext<PageModel>;
}

declare module "@expressive-code/core" {
    export interface ExpressiveCodeBlockProps extends ExampleCommentProps {
    }
}

class LinkAnnotation extends ExpressiveCodeAnnotation {
    target: string | null;
    renderAs: string;

    constructor(
        inlineRange: ExpressiveCodeInlineRange,
        target: string | null,
        renderAs: string,
    ) {
        super({inlineRange});
        this.target = target;
        this.renderAs = renderAs;
    }

    render({nodesToTransform}: AnnotationRenderOptions) {
        return nodesToTransform.map((node) => {
            if (!this.target || !this.renderAs) {
                return node;
            }
            if (this.target.startsWith("/")) {
                return {
                    type: "element",
                    tagName: "a",
                    properties: {href: this.target, class: "type-link"},
                    children: [{type: "text", value: this.renderAs}],
                };
            }
            return {
                type: "text",
                value: this.renderAs,
            };
        }) as Parents[];
    }
}

export class ExampleVisitor implements MemberVisitor<BuildContext<PageModel>, string> {

    private readonly type: TypeModel;

    public constructor(type: TypeModel) {
        this.type = type;
    }

    visit(member: MemberModel, context: BuildContext<PageModel>): string {
        return member.accept(this, context);
    }

    visitCaster(member: CasterMemberModel, context: BuildContext<PageModel>): string {
        return `// ${this.type.renderMemberOwner(context, false)}${member.to.renderReturnType(context, false)}`;
    }

    visitConstructor(member: ConstructorMemberModel, context: BuildContext<PageModel>): string {
        return `// new ${this.type.renderMemberOwner(context, false)}${member.renderTypeArguments(context, false)}(${member.renderParams(context, false)});`;
    }

    visitEnumConstant(member: EnumConstantMemberModel, context: BuildContext<PageModel>): string {
        return `// ${this.type.renderMemberOwner(context, false)}.${member.key}`;
    }

    visitField(member: FieldMemberModel, context: BuildContext<PageModel>): string {
        return `// ${this.type.renderMemberOwner(context, false)}.${member.key}${member.type.renderReturnType(context, false)}`;
    }

    visitGetter(member: GetterMemberModel, context: BuildContext<PageModel>): string {
        return `// ${this.type.renderMemberOwner(context, false)}.${member.key}${member.type.renderReturnType(context, false)}`;
    }

    visitMethod(member: MethodMemberModel, context: BuildContext<PageModel>): string {
        return `// ${this.type.renderMemberOwner(context, false)}.${member.key}${member.renderTypeArguments(context, false)}(${member.renderParams(context, false)})${member.returnType.renderReturnType(context, false)};`;
    }

    visitOperator(member: OperatorMemberModel, context: BuildContext<PageModel>): string {
        return OperatorTypeModel.render(
            context,
            this.type,
            member,
            false,
        );
    }

    visitSetter(member: SetterMemberModel, context: BuildContext<PageModel>): string {
        return `// ${this.type.renderMemberOwner(context, false)}.${member.key} = ${member.renderParam(context, false, 0)};`;
    }
}

export default (): ExpressiveCodePlugin => {
    return definePlugin({
        name: "example-comment",
        hooks: {
            preprocessCode: ({codeBlock}) => {
                const {props} = codeBlock;
                const exampleComment = props.exampleComment;
                const context = props.context;

                if (!exampleComment || !context) {
                    return;
                }

                const {type, member} = exampleComment;

                if (!type || !member) {
                    return;
                }
                const code = new ExampleVisitor(type).visit(member, {...context, typeLinks: true});
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
