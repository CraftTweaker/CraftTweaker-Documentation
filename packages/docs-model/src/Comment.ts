import type {BoldCommentJson, CodeCommentJson, CommentJson, ItalicsCommentJson, LinkCommentJson, ListCommentJson, ListItemCommentJson, ParagraphCommentJson, PlaintextCommentJson, RootCommentJson,} from "./types";

export enum CommentKindModel {
    ROOT = "root",
    BOLD = "bold",
    CODE = "code",
    ITALICS = "italics",
    LINK = "link",
    NEW_LINE = "new_line",
    PARAGRAPH = "paragraph",
    PLAINTEXT = "plaintext",
    LIST = "list",
    LIST_ITEM = "list_item",
}

export interface CommentVisitor<C, R> {

    visit(comment: CommentModel, context: C): R;

    visitBold(comment: BoldCommentModel, context: C): R;

    visitCode(comment: CodeCommentModel, context: C): R;

    visitItalics(comment: ItalicsCommentModel, context: C): R;

    visitLink(comment: LinkCommentModel, context: C): R;

    visitList(comment: ListCommentModel, context: C): R;

    visitListItem(comment: ListItemCommentModel, context: C): R;

    visitNewLine(comment: NewLineCommentModel, context: C): R;

    visitParagraph(comment: ParagraphCommentModel, context: C): R;

    visitPlaintext(comment: PlaintextCommentModel, context: C): R;

    visitRootComment(comment: RootCommentModel, context: C): R;
}

export class CommentToStringVisitor implements CommentVisitor<never, string> {

    public static readonly INSTANCE = new CommentToStringVisitor();

    private constructor() {
    }

    visit(comment: CommentModel, context: never): string {
        return comment.accept(this, context);
    }

    visitBold(comment: BoldCommentModel, context: never): string {
        return this.visitContent(comment.content, context);
    }

    visitCode(comment: CodeCommentModel, context: never): string {
        return this.visitContent(comment.content, context);
    }

    visitItalics(comment: ItalicsCommentModel, context: never): string {
        return this.visitContent(comment.content, context);
    }

    visitLink(comment: LinkCommentModel, context: never): string {
        return this.visitContent(comment.content, context);
    }

    visitList(comment: ListCommentModel, context: never): string {
        return this.visitContent(comment.content, context, "\n");
    }

    visitListItem(comment: ListItemCommentModel, context: never): string {
        return comment.content
            .map((value) => `- ${value.accept(this, context)}`)
            .join("\n");
    }

    visitNewLine(comment: NewLineCommentModel, context: never): string {
        return "\n";
    }

    visitParagraph(comment: ParagraphCommentModel, context: never): string {
        return this.visitContent(comment.content, context);
    }

    visitPlaintext(comment: PlaintextCommentModel, context: never): string {
        return comment.content;
    }

    visitRootComment(comment: RootCommentModel, context: never): string {
        return this.visitContent(comment.children, context);
    }

    private visitContent(content: CommentModel[], context: never, joiner = " "): string {
        return content.map((value) => value.accept(this, context)).join(joiner);
    }

}

export abstract class CommentModel {
    readonly kind: CommentKindModel;

    protected constructor(kind: CommentKindModel) {
        this.kind = kind;
    }

    public static parseComment(obj: CommentJson): CommentModel {
        if (!obj || !obj.kind) {
            throw Error(`Unable to parse comment '${JSON.stringify(obj)}'`);
        }
        switch (obj.kind) {
            case CommentKindModel.ROOT:
                return RootCommentModel.parse(obj);
            case CommentKindModel.BOLD:
                return BoldCommentModel.parse(obj);
            case CommentKindModel.CODE:
                return CodeCommentModel.parse(obj);
            case CommentKindModel.ITALICS:
                return ItalicsCommentModel.parse(obj);
            case CommentKindModel.LINK:
                return LinkCommentModel.parse(obj);
            case CommentKindModel.NEW_LINE:
                return new NewLineCommentModel();
            case CommentKindModel.PARAGRAPH:
                return ParagraphCommentModel.parse(obj);
            case CommentKindModel.PLAINTEXT:
                return PlaintextCommentModel.parse(obj);
            case CommentKindModel.LIST:
                return ListCommentModel.parse(obj);
            case CommentKindModel.LIST_ITEM:
                return ListItemCommentModel.parse(obj);
            default:
                throw Error(`Unknown comment '${JSON.stringify(obj)}'`);
        }
    }

    static parseComments(obj: CommentJson[]): CommentModel[] {
        return obj.map((commentObj) => CommentModel.parseComment(commentObj));
    }

    abstract accept<C, R>(visitor: CommentVisitor<C, R>, context?: C): R;

}

export class BoldCommentModel extends CommentModel {
    readonly content: CommentModel[];

    constructor(content: CommentModel[]) {
        super(CommentKindModel.BOLD);
        this.content = content;
    }

    static parse(obj: BoldCommentJson) {
        return new BoldCommentModel(CommentModel.parseComments(obj.content));
    }

    accept<C, R>(visitor: CommentVisitor<C, R>, context: C): R {
        return visitor.visitBold(this, context);
    }

}

export class CodeCommentModel extends CommentModel {
    readonly content: CommentModel[];

    constructor(content: CommentModel[]) {
        super(CommentKindModel.CODE);
        this.content = content;
    }

    static parse(obj: CodeCommentJson) {
        return new CodeCommentModel(CommentModel.parseComments(obj.content));
    }

    accept<C, R>(visitor: CommentVisitor<C, R>, context: C): R {
        return visitor.visitCode(this, context);
    }

}

export class ItalicsCommentModel extends CommentModel {
    readonly content: CommentModel[];

    constructor(content: CommentModel[]) {
        super(CommentKindModel.ITALICS);
        this.content = content;
    }

    static parse(obj: ItalicsCommentJson) {
        return new ItalicsCommentModel(CommentModel.parseComments(obj.content));
    }

    accept<C, R>(visitor: CommentVisitor<C, R>, context: C): R {
        return visitor.visitItalics(this, context);
    }

}

export class LinkCommentModel extends CommentModel {
    readonly to: string;
    readonly plain: boolean;
    readonly content: CommentModel[];

    constructor(to: string, plain: boolean, content: CommentModel[]) {
        super(CommentKindModel.LINK);
        this.to = to;
        this.plain = plain;
        this.content = content;
    }

    static parse(obj: LinkCommentJson) {
        return new LinkCommentModel(
            obj.to,
            obj.plain,
            CommentModel.parseComments(obj.content),
        );
    }

    accept<C, R>(visitor: CommentVisitor<C, R>, context: C): R {
        return visitor.visitLink(this, context);
    }
}

export class ListCommentModel extends CommentModel {
    readonly content: CommentModel[];

    constructor(content: CommentModel[]) {
        super(CommentKindModel.LIST);
        this.content = content;
    }

    static parse(obj: ListCommentJson) {
        return new ListCommentModel(CommentModel.parseComments(obj.content));
    }

    accept<C, R>(visitor: CommentVisitor<C, R>, context: C): R {
        return visitor.visitList(this, context);
    }

}

export class ListItemCommentModel extends CommentModel {
    readonly content: CommentModel[];

    constructor(content: CommentModel[]) {
        super(CommentKindModel.LIST_ITEM);
        this.content = content;
    }

    static parse(obj: ListItemCommentJson) {
        return new ListItemCommentModel(
            CommentModel.parseComments(obj.content),
        );
    }

    accept<C, R>(visitor: CommentVisitor<C, R>, context: C): R {
        return visitor.visitListItem(this, context);
    }

}

export class NewLineCommentModel extends CommentModel {
    constructor() {
        super(CommentKindModel.NEW_LINE);
    }

    accept<C, R>(visitor: CommentVisitor<C, R>, context: C): R {
        return visitor.visitNewLine(this, context);
    }

}

export class ParagraphCommentModel extends CommentModel {
    readonly content: CommentModel[];

    constructor(content: CommentModel[]) {
        super(CommentKindModel.PARAGRAPH);
        this.content = content;
    }

    static parse(obj: ParagraphCommentJson) {
        return new ParagraphCommentModel(
            CommentModel.parseComments(obj.content),
        );
    }

    accept<C, R>(visitor: CommentVisitor<C, R>, context: C): R {
        return visitor.visitParagraph(this, context);
    }
}

export class PlaintextCommentModel extends CommentModel {
    readonly content: string;

    constructor(content: string) {
        super(CommentKindModel.PLAINTEXT);
        this.content = content;
    }

    static parse(obj: PlaintextCommentJson) {
        return new PlaintextCommentModel(obj.content);
    }

    accept<C, R>(visitor: CommentVisitor<C, R>, context: C): R {
        return visitor.visitPlaintext(this, context);
    }
}

export class RootCommentModel extends CommentModel {
    readonly children: CommentModel[];

    constructor(children: CommentModel[]) {
        super(CommentKindModel.ROOT);
        this.children = children;
    }

    static parse(obj: RootCommentJson) {
        return new RootCommentModel(CommentModel.parseComments(obj.children));
    }

    accept<C, R>(visitor: CommentVisitor<C, R>, context: C): R {
        return visitor.visitRootComment(this, context);
    }
}
