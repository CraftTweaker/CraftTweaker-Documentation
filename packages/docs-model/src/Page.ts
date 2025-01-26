import {CommentModel} from "./Comment";
import {Extra} from "./Extra";
import {MemberGroupModel, MemberKindModel} from "./Member";
import {TypeModel} from "./Type";
import {getPage, ifPresent, parseMap} from "./Util";
import type {EnumPageJson, EventPageJson, ExpansionPageJson, MarkdownPageJson, PageJson, PageMeta, RenderedPageJson, TypePageJson, Types,} from "./types.d.ts";

export enum PageKindModel {
    TYPE = "type",
    EVENT = "event",
    ENUM = "enum",
    MARKDOWN = "markdown",
    RENDERED = "rendered",
    EXPANSION = "expansion"
}

export enum PageVersionModel {
    ONE = "1",
}

export type MemberGroupsModel = { [key: string]: MemberGroupModel };

export interface MemberHoldingPage {
    memberGroup(): MemberGroupsModel;
}

export type MemberPage = PageModel & MemberHoldingPage;

export interface BaseTypePage extends MemberPage {
    readonly type: TypeModel;
    readonly zenCodeName: string;
    readonly members: MemberGroupsModel;
}

export interface PageVisitor<C, R> {
    visit(page: PageModel, context: C): R;

    visitType(page: TypePageModel, context: C): R;

    visitEnum(page: EnumPageModel, context: C): R;

    visitEvent(page: EventPageModel, context: C): R;

    visitMarkdown(page: MarkdownPageModel, context: C): R;

    visitRendered(page: RenderedPageModel, context: C): R;

    visitExpansion(page: ExpansionPageModel, context: C): R;

}

export abstract class PageModel {
    readonly version: PageVersionModel;
    readonly key: string;
    readonly displayName: string;
    readonly kind: PageKindModel;
    readonly comment: CommentModel | undefined;
    readonly extra: Extra;
    readonly meta: PageMeta;

    protected constructor(
        version: PageVersionModel,
        key: string,
        displayName: string,
        kind: PageKindModel,
        comment: CommentModel | undefined,
        extra: Extra,
        meta: PageMeta,
    ) {
        this.version = version;
        this.key = key;
        this.displayName = displayName;
        this.kind = kind;
        this.comment = comment;
        this.extra = extra;
        this.meta = meta;
    }

    static parsePage(obj: PageJson): PageModel {
        if (!obj || !obj.kind) {
            throw Error(`Unable to parse page '${JSON.stringify(obj)}'`);
        }
        switch (obj.kind) {
            case PageKindModel.TYPE:
                return TypePageModel.parse(obj);
            case PageKindModel.EVENT:
                return EventPageModel.parse(obj);
            case PageKindModel.ENUM:
                return EnumPageModel.parse(obj);
            case PageKindModel.MARKDOWN:
                return MarkdownPageModel.parse(obj);
            case PageKindModel.RENDERED:
                return RenderedPageModel.parse(obj);
            case PageKindModel.EXPANSION:
                return ExpansionPageModel.parse(obj);
            default:
                throw Error(`Unknown type '${JSON.stringify(obj)}'`);
        }
    }

    isBaseTypePage(): this is BaseTypePage {
        return this.isTypePage() || this.isEventPage() || this.isEnumPage();
    }

    isTypePage(): this is TypePageModel {
        return this.kind === PageKindModel.TYPE;
    }

    isEventPage(): this is EventPageModel {
        return this.kind === PageKindModel.EVENT;
    }

    isEnumPage(): this is EnumPageModel {
        return this.kind === PageKindModel.ENUM;
    }

    isMarkdownPage(): this is MarkdownPageModel {
        return this.kind === PageKindModel.MARKDOWN;
    }

    isRenderedPage(): this is RenderedPageModel {
        return this.kind === PageKindModel.RENDERED;
    }

    isExpansionPage(): this is ExpansionPageModel {
        return this.kind === PageKindModel.EXPANSION;
    }

    renderDisplayName(): string {
        if (this.isBaseTypePage()) {
            return this.zenCodeName.substring(
                this.zenCodeName.lastIndexOf(".") + 1,
            );
        }
        return this.displayName;
    }

    getThisExamples(isStatic = false): string[] {
        if (isStatic) {
            return [this.displayName];
        }
        const example = this.getExampleFor("this");
        if (example.length > 0) {
            return example;
        }
        if (this.isEventPage()) {
            return ["event"];
        }
        //TODO check the super types to see if they have one
        if (this.isBaseTypePage()) {
            if (this.type.isJava()) {
                return [`my${this.type.getDefaultExample()}`];
            }
        }

        return ["myInstance"];
    }

    getExampleFor(name: string, defaultExample?: string): string[] {
        if (this.extra.examples) {
            const example = this.extra.examples.examples[name];
            if (example) {
                return example;
            }
        }
        if (defaultExample) {
            return [defaultExample];
        }
        return [];
    }

    abstract accept<C, R>(visitor: PageVisitor<C, R>, context?: C): R;
}

export class TypePageModel extends PageModel implements BaseTypePage {
    readonly type: TypeModel;
    readonly zenCodeName: string;
    readonly members: MemberGroupsModel;

    constructor(
        version: PageVersionModel,
        key: string,
        displayName: string,
        comment: CommentModel | undefined,
        extra: Extra,
        meta: PageMeta,
        type: TypeModel,
        zenCodeName: string,
        members: {
            [key: string]: MemberGroupModel;
        },
    ) {
        super(
            version,
            key,
            displayName,
            PageKindModel.TYPE,
            comment,
            extra,
            meta,
        );
        this.type = type;
        this.zenCodeName = zenCodeName;
        this.members = members;
    }

    static parse(obj: TypePageJson) {
        return new TypePageModel(
            obj.version,
            obj.key,
            obj.display_name,
            ifPresent(obj.comment, CommentModel.parseComment),
            Extra.parse(obj.extra),
            obj.meta,
            TypeModel.parseType(obj.type),
            obj.zen_code_name,
            parseMap(obj.members, MemberGroupModel.parse),
        );
    }

    accept<C, R>(visitor: PageVisitor<C, R>, context: C): R {
        return visitor.visitType(this, context);
    }

    memberGroup(): MemberGroupsModel {
        return this.members;
    }

}

export class EnumPageModel extends PageModel implements BaseTypePage {
    readonly type: TypeModel;
    readonly zenCodeName: string;
    readonly members: MemberGroupsModel;

    constructor(
        version: PageVersionModel,
        key: string,
        displayName: string,
        comment: CommentModel | undefined,
        extra: Extra,
        meta: PageMeta,
        type: TypeModel,
        zenCodeName: string,
        members: {
            [key: string]: MemberGroupModel;
        },
    ) {
        super(
            version,
            key,
            displayName,
            PageKindModel.ENUM,
            comment,
            extra,
            meta,
        );
        this.type = type;
        this.zenCodeName = zenCodeName;
        this.members = members;
    }

    static parse(obj: EnumPageJson) {
        return new EnumPageModel(
            obj.version,
            obj.key,
            obj.display_name,
            ifPresent(obj.comment, CommentModel.parseComment),
            Extra.parse(obj.extra),
            obj.meta,
            TypeModel.parseType(obj.type),
            obj.zen_code_name as string,
            parseMap(obj.members, MemberGroupModel.parse),
        );
    }

    memberGroup(): MemberGroupsModel {
        return this.members;
    }

    getThisExamples(isStatic = false): string[] {
        if (isStatic) {
            return [this.displayName];
        }
        const example = this.getExampleFor("this");
        if (example.length > 0) {
            return example;
        }
        const bracketEnum = this.extra.bracketEnum;
        for (const memberGroup of Object.values(this.members)) {
            for (const member of memberGroup.members) {
                if (member.kind === MemberKindModel.ENUM_CONSTANT) {
                    if (bracketEnum) {
                        return [
                            `<constant:${bracketEnum.value}:${member.key.toLowerCase()}>`,
                        ];
                    }
                    return [`${this.displayName}.${member.key}`];
                }
            }
        }
        //TODO check the super types to see if they have one
        if (this.isBaseTypePage()) {
            if (this.type.isJava()) {
                return [`my${this.type.getDefaultExample()}`];
            }
        }

        return [];
    }

    accept<C, R>(visitor: PageVisitor<C, R>, context: C): R {
        return visitor.visitEnum(this, context);
    }
}

export class EventPageModel extends PageModel implements BaseTypePage {
    readonly type: TypeModel;
    readonly zenCodeName: string;
    readonly members: { [key: string]: MemberGroupModel };
    readonly canceledInfo: CommentModel | undefined;
    readonly notCanceledInfo: CommentModel | undefined;
    readonly allowInfo: CommentModel | undefined;
    readonly defaultInfo: CommentModel | undefined;
    readonly denyInfo: CommentModel | undefined;

    readonly hasResult: boolean;
    readonly cancelable: boolean;

    constructor(
        version: PageVersionModel,
        key: string,
        displayName: string,
        comments: CommentModel | undefined,
        extra: Extra,
        meta: PageMeta,
        type: TypeModel,
        zenCodeName: string,
        members: MemberGroupsModel,
        canceledInfo: CommentModel | undefined,
        notCanceledInfo: CommentModel | undefined,
        allowInfo: CommentModel | undefined,
        defaultInfo: CommentModel | undefined,
        denyInfo: CommentModel | undefined,
        hasResult: boolean,
        cancelable: boolean,
    ) {
        super(
            version,
            key,
            displayName,
            PageKindModel.EVENT,
            comments,
            extra,
            meta,
        );
        this.type = type;
        this.zenCodeName = zenCodeName;
        this.members = members;
        this.canceledInfo = canceledInfo;
        this.notCanceledInfo = notCanceledInfo;
        this.allowInfo = allowInfo;
        this.defaultInfo = defaultInfo;
        this.denyInfo = denyInfo;
        this.hasResult = hasResult;
        this.cancelable = cancelable;
    }

    static parse(obj: EventPageJson) {
        return new EventPageModel(
            obj.version,
            obj.key,
            obj.display_name,
            ifPresent(obj.comment, CommentModel.parseComment),
            Extra.parse(obj.extra),
            obj.meta,
            TypeModel.parseType(obj.type),
            obj.zen_code_name as string,
            parseMap(obj.members, MemberGroupModel.parse),
            ifPresent(obj.canceled_info, CommentModel.parseComment),
            ifPresent(obj.not_canceled_info, CommentModel.parseComment),
            ifPresent(obj.allow_info, CommentModel.parseComment),
            ifPresent(obj.default_info, CommentModel.parseComment),
            ifPresent(obj.deny_info, CommentModel.parseComment),
            obj.has_result,
            obj.cancelable,
        );
    }

    memberGroup(): MemberGroupsModel {
        return this.members;
    }

    accept<C, R>(visitor: PageVisitor<C, R>, context: C): R {
        return visitor.visitEvent(this, context);
    }

}

export class MarkdownPageModel extends PageModel {
    readonly content: string;

    constructor(
        version: PageVersionModel,
        key: string,
        displayName: string,
        comment: CommentModel | undefined,
        extra: Extra,
        meta: PageMeta,
        content: string,
    ) {
        super(
            version,
            key,
            displayName,
            PageKindModel.MARKDOWN,
            comment,
            extra,
            meta,
        );
        this.content = content;
    }

    static parse(obj: MarkdownPageJson) {
        return new MarkdownPageModel(
            obj.version,
            obj.key,
            obj.display_name,
            ifPresent(obj.comment, CommentModel.parseComment),
            Extra.EMPTY,
            obj.meta,
            obj.content,
        );
    }

    accept<C, R>(visitor: PageVisitor<C, R>, context: C): R {
        return visitor.visitMarkdown(this, context);
    }
}

export class RenderedPageModel extends PageModel {
    readonly content: string;
    readonly raw_content: string;

    constructor(
        version: PageVersionModel,
        key: string,
        displayName: string,
        comment: CommentModel | undefined,
        extra: Extra,
        meta: PageMeta,
        content: string,
        raw_content: string,
    ) {
        super(
            version,
            key,
            displayName,
            PageKindModel.RENDERED,
            comment,
            extra,
            meta,
        );
        this.content = content;
        this.raw_content = raw_content;
    }

    static parse(obj: RenderedPageJson) {
        return new RenderedPageModel(
            obj.version,
            obj.key,
            obj.display_name,
            ifPresent(obj.comment, CommentModel.parseComment),
            Extra.parse(obj.extra),
            obj.meta,
            obj.content,
            obj.raw_content,
        );
    }

    accept<C, R>(visitor: PageVisitor<C, R>, context: C): R {
        return visitor.visitRendered(this, context);
    }
}


export class ExpansionPageModel extends PageModel implements MemberHoldingPage {
    readonly zenCodeName?: string;
    readonly members: MemberGroupsModel;

    type: TypeModel | undefined;

    constructor(
        version: PageVersionModel,
        key: string,
        displayName: string,
        comment: CommentModel | undefined,
        extra: Extra,
        meta: PageMeta,
        members: {
            [key: string]: MemberGroupModel;
        },
        zenCodeName?: string,
    ) {
        super(
            version,
            key,
            displayName,
            PageKindModel.EXPANSION,
            comment,
            extra,
            meta,
        );
        this.members = members;
        this.zenCodeName = zenCodeName;
        this.type = undefined;
    }

    static parse(obj: ExpansionPageJson) {
        return new ExpansionPageModel(
            obj.version,
            obj.key,
            obj.display_name,
            ifPresent(obj.comment, CommentModel.parseComment),
            Extra.parse(obj.extra),
            obj.meta,
            parseMap(obj.members, MemberGroupModel.parse),
            obj.zen_code_name,
        );
    }

    memberGroup(): MemberGroupsModel {
        return this.members;
    }

    getThisExamples(isStatic: boolean): string[] {
        if (!this.type) {
            return super.getThisExamples(isStatic);
        }

        if (isStatic) {
            return [this.type.displayName];
        }
        const example = this.getExampleFor("this");
        if (example.length > 0) {
            return example;
        }
        if (this.isEventPage()) {
            return ["event"];
        }
        if (this.type.isJava()) {
            return [`my${this.type.getDefaultExample()}`];
        }

        return ["myInstance"];
    }

    public getType(types: Types, version: string): TypeModel | undefined {
        if (!this.type && this.zenCodeName) {
            for (const key of Object.keys(types)) {
                const value = types[key];
                if (value.zen_code_name && value.zen_code_name === this.zenCodeName && value.keys.length === 1) {
                    const page = getPage({types, version}, key)
                    if (page?.isBaseTypePage()) {
                        this.type = page.type;
                    }
                }
            }
        }
        return this.type;
    }

    accept<C, R>(visitor: PageVisitor<C, R>, context: C): R {
        return visitor.visitExpansion(this, context);
    }
}
