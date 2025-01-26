import type {CommentKindModel} from "./Comment";
import type {MemberKindModel} from "./Member";
import type {PageKindModel, PageModel, PageVersionModel} from "./Page";
import type {TypeKindModel, TypeModel} from "./Type";

export type Types = {
    [key: string]: TypeInfo;
};

export type TypeInfo = {
    keys: string[];
    zen_code_name?: string;
};

export type Docs = {
    nav: Nav;
};

export type Nav = {
    [key: string]: Nav | string;
};

export type Versions = {
    latest: string;
    all: VersionHolder;
};

export type VersionHolder = {
    [key: string]: string[];
};

export type DocsReverseLookup = {
    [key: string]: string[];
};

export interface PageMeta {
    path?: string;
    previous?: Page;
    current: Page;
    next?: Page;
    folders: string[];
    shortDescription?: string;
}

export type Page = {
    name: string;
    path: string;
};

export type BuildContext<T extends PageModel> = {
    version: string;
    slug: string;
    types: Types;
    typeLinks?: boolean;
    page: T;
    type?: TypeModel;
};

export interface CommonCommentFields {
    kind: CommentKindModel;
}

export type CommentJson =
    | BoldCommentJson
    | CodeCommentJson
    | ItalicsCommentJson
    | LinkCommentJson
    | ListCommentJson
    | ListItemCommentJson
    | NewLineCommentJson
    | ParagraphCommentJson
    | PlaintextCommentJson
    | RootCommentJson;

export interface BoldCommentJson extends CommonCommentFields {
    kind: CommentKindModel.BOLD;
    content: CommentJson[];
}

export interface CodeCommentJson extends CommonCommentFields {
    kind: CommentKindModel.CODE;
    content: CommentJson[];
}

export interface ItalicsCommentJson extends CommonCommentFields {
    kind: CommentKindModel.ITALICS;
    content: CommentJson[];
}

export interface LinkCommentJson extends CommonCommentFields {
    kind: CommentKindModel.LINK;
    content: CommentJson[];
    plain: boolean;
    to: string;
}

export interface ListCommentJson extends CommonCommentFields {
    kind: CommentKindModel.LIST;
    content: CommentJson[];
}

export interface ListItemCommentJson extends CommonCommentFields {
    kind: CommentKindModel.LIST_ITEM;
    content: CommentJson[];
}

export interface NewLineCommentJson extends CommonCommentFields {
    kind: CommentKindModel.NEW_LINE;
}

export interface ParagraphCommentJson extends CommonCommentFields {
    kind: CommentKindModel.PARAGRAPH;
    content: CommentJson[];
}

export interface PlaintextCommentJson extends CommonCommentFields {
    kind: CommentKindModel.PLAINTEXT;
    content: string;
}

export interface RootCommentJson extends CommonCommentFields {
    kind: CommentKindModel.ROOT;
    children: CommentJson[];
}

export interface ExtraJson {
    bracket_enum: string;
    deprecated: DeprecatedJson;
    event_parent: Record<PropertyKey, never>;
    examples: ExamplesJson;
    loaders: string[];
    obtention: ObtentionJson;
    parameter_comment: ParameterCommentsJson;
    required_mods: ModJson[];
    returns: CommentJson;
    see: CommentJson;
    since: CommentJson;
}

export interface DeprecatedJson {
    reason: CommentJson;
    since: CommentJson;
    for_removal: boolean;
}

export type ExamplesJson = { [key: string]: string[] };

export interface ObtentionJson {
    method: CommentJson;
}

export type ParameterCommentsJson = { [key: string]: CommentJson };

export interface ModJson {
    mod_id: string;
    display_name: string;
    url: string;
}

export interface CommonTypeFields {
    kind: TypeKindModel;
    key: string;
    display_name: string;
    nullable: boolean;
}

export type TypeJson =
    | ArrayTypeJson
    | BasicTypeJson
    | GenericTypeJson
    | JavaTypeJson;

export interface BasicTypeJson extends CommonTypeFields {
    kind: TypeKindModel.BASIC;
}

export interface ArrayTypeJson extends CommonTypeFields {
    kind: TypeKindModel.ARRAY;
    component_type: TypeJson;
}

export interface GenericTypeJson extends CommonTypeFields {
    kind: TypeKindModel.GENERIC;
    type: TypeJson;
    bound: string;
}

export interface JavaTypeJson extends CommonTypeFields {
    kind: TypeKindModel.JAVA;
    package_name: string;
    class_name: string;
    type_parameters: Record<string, TypeJson>;
    super_type?: TypeJson;
    interfaces: TypeJson[];
}

export interface ParameterJson {
    key: string;
    display_name: string;
    type: TypeJson;
    default_value?: string;
}

export type MemberGroupJson = {
    key: string;
    members: MemberJson[];
};

export interface CommonMemberFields {
    kind: MemberKindModel;
    key: string;
    display_name: string;
    origin: string;
    static: boolean;
    comment?: CommentJson;
    extra: ExtraJson;
}

export type MemberJson =
    | MethodMemberJson
    | GetterMemberJson
    | SetterMemberJson
    | FieldMemberJson
    | EnumConstantMemberJson
    | CasterMemberJson
    | OperatorMemberJson
    | ConstructorMemberJson;

export interface CasterMemberJson extends CommonMemberFields {
    kind: MemberKindModel.CASTER;
    to: TypeJson;
    implicit: boolean;
}

export interface ConstructorMemberJson extends CommonMemberFields {
    kind: MemberKindModel.CONSTRUCTOR;
    parameters: ParameterJson[];
    type_parameters: Record<string, TypeJson>;
}

export interface EnumConstantMemberJson extends CommonMemberFields {
    kind: MemberKindModel.ENUM_CONSTANT;
    type: TypeJson;
}

export interface FieldMemberJson extends CommonMemberFields {
    kind: MemberKindModel.FIELD;
    type: TypeJson;
}

export interface GetterMemberJson extends CommonMemberFields {
    kind: MemberKindModel.GETTER;
    type: TypeJson;
}

export interface MethodMemberJson extends CommonMemberFields {
    kind: MemberKindModel.METHOD;
    parameters: ParameterJson[];
    return_type: TypeJson;
    type_parameters: Record<string, TypeJson>;
}

export interface OperatorMemberJson extends CommonMemberFields {
    kind: MemberKindModel.OPERATOR;
    parameters: ParameterJson[];
    return_type: TypeJson;
    type_parameters: Record<string, TypeJson>;
    operator: string;
}

export interface SetterMemberJson extends CommonMemberFields {
    kind: MemberKindModel.SETTER;
    parameters: ParameterJson[];
}

export interface CommonPageFields {
    version: PageVersionModel;
    kind: PageKindModel;
    key: string;
    display_name: string;
    comment?: CommentJson;
    extra: ExtraJson;
    meta: PageMeta;
}

export type PageJson =
    | TypePageJson
    | EnumPageJson
    | EventPageJson
    | MarkdownPageJson
    | RenderedPageJson
    | ExpansionPageJson;

export interface MarkdownPageJson extends Omit<CommonPageFields, 'extra'> {
    kind: PageKindModel.MARKDOWN;
    content: string;
}

export interface RenderedPageJson extends CommonPageFields {
    kind: PageKindModel.RENDERED;
    content: string;
    raw_content: string;
}

export interface TypePageJson extends CommonPageFields {
    kind: PageKindModel.TYPE;
    type: TypeJson;
    zen_code_name: string;
    members: Record<string, MemberGroupJson>;
}

export interface EnumPageJson extends CommonPageFields {
    kind: PageKindModel.ENUM;
    type: TypeJson;
    zen_code_name: string;
    members: Record<string, MemberGroupJson>;
}

export interface EventPageJson extends CommonPageFields {
    kind: PageKindModel.EVENT;
    type: TypeJson;
    zen_code_name: string;
    members: Record<string, MemberGroupJson>;
    canceled_info?: CommentJson;
    not_canceled_info?: CommentJson;
    allow_info?: CommentJson;
    default_info?: CommentJson;
    deny_info?: CommentJson;
    has_result: boolean;
    cancelable: boolean;
}

export interface ExpansionPageJson extends CommonPageFields {
    kind: PageKindModel.EXPANSION;
    zen_code_name?: string;
    members: Record<string, MemberGroupJson>;
}

export interface SearchDocument {
    page_url: string;
    url: string;
    title: string;
    type?: string;
    prefix?: string;
    content?: string;
    suffix?: string;
    comment?: string;
}
