import type {
    BoldCommentJson,
    CodeCommentJson,
    CommentJson,
    ItalicsCommentJson,
    LinkCommentJson,
    ListCommentJson,
    ListItemCommentJson,
    ParagraphCommentJson,
    PlaintextCommentJson,
    RootCommentJson,
} from "./types";

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

export class CommentModel {
    readonly kind: CommentKindModel;

    constructor(kind: CommentKindModel) {
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

    renderToString(): string {
        throw Error(`Unable to render comment '${JSON.stringify(this)}'`);
    }
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

    renderToString(): string {
        return this.content.map((value) => value.renderToString()).join(" ");
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

    renderToString(): string {
        return this.content.map((value) => value.renderToString()).join(" ");
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

    renderToString(): string {
        return this.content.map((value) => value.renderToString()).join(" ");
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

    renderToString(): string {
        return this.content.map((value) => value.renderToString()).join(" ");
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

    renderToString(): string {
        return this.content.map((value) => value.renderToString()).join("\n");
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

    renderToString(): string {
        return this.content
            .map((value) => `- ${value.renderToString()}`)
            .join("\n");
    }
}

export class NewLineCommentModel extends CommentModel {
    constructor() {
        super(CommentKindModel.NEW_LINE);
    }

    renderToString(): string {
        return "\n";
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

    renderToString(): string {
        return this.content.map((value) => value.renderToString()).join(" ");
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

    renderToString(): string {
        return this.content;
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

    renderToString(): string {
        return this.children.map((value) => value.renderToString()).join(" ");
    }
}
