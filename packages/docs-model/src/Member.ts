import {CommentModel} from "./Comment";
import {Extra} from "./Extra";
import type {PageModel} from "./Page";
import {TypeModel} from "./Type";
import {ifPresent, parseMap} from "./Util";
import type {BuildContext, CasterMemberJson, ConstructorMemberJson, EnumConstantMemberJson, FieldMemberJson, GetterMemberJson, MemberGroupJson, MemberJson, MethodMemberJson, OperatorMemberJson, ParameterJson, SetterMemberJson,} from "./types.d.ts";

export enum MemberKindModel {
    METHOD = "method",
    GETTER = "getter",
    SETTER = "setter",
    FIELD = "field",
    ENUM_CONSTANT = "enum_constant",
    CASTER = "caster",
    OPERATOR = "operator",
    CONSTRUCTOR = "constructor",
}

export enum MemberOriginModel {
    DECLARED = "declared",
    NATIVE = "native",
    INHERITED = "inherited",
}

export namespace MemberOriginModel {
    export function parse(obj: string) {
        switch (obj) {
            case "declared":
                return MemberOriginModel.DECLARED;
            case "native":
                return MemberOriginModel.NATIVE;
            case "inherited":
                return MemberOriginModel.INHERITED;
        }
        throw new Error(`Unable to parse origin '${JSON.stringify(obj)}'`);
    }
}

export enum OperatorTypeModel {
    ADD = "+",
    SUB = "-",
    MUL = "*",
    DIV = "/",
    MOD = "%",
    CAT = "~",
    OR = "|",
    AND = "&",
    XOR = "^",
    NEG = "-",
    INVERT = "~",
    NOT = "!",
    INDEXSET = "[]=",
    INDEXGET = "[]",
    CONTAINS = "in",
    COMPARE = "compare",
    MEMBERGETTER = ".",
    MEMBERSETTER = ".=",
    EQUALS = "==",
    NOTEQUALS = "!=",
    SHL = "<<",
    SHR = ">>",
    USHR = ">>>",
    ADDASSIGN = "+=",
    SUBASSIGN = "-=",
    MULASSIGN = "*=",
    DIVASSIGN = "/=",
    MODASSIGN = "%=",
    CATASSIGN = "~=",
    ORASSIGN = "|=",
    ANDASSIGN = "&=",
    XORASSIGN = "^=",
    SHLASSIGN = "<<=",
    SHRASSIGN = ">>=",
    USHRASSIGN = ">>>=",
}

export namespace OperatorTypeModel {
    export function parse(obj: string) {
        switch (obj) {
            case "add":
                return OperatorTypeModel.ADD;
            case "sub":
                return OperatorTypeModel.SUB;
            case "mul":
                return OperatorTypeModel.MUL;
            case "div":
                return OperatorTypeModel.DIV;
            case "mod":
                return OperatorTypeModel.MOD;
            case "cat":
                return OperatorTypeModel.CAT;
            case "or":
                return OperatorTypeModel.OR;
            case "and":
                return OperatorTypeModel.AND;
            case "xor":
                return OperatorTypeModel.XOR;
            case "neg":
                return OperatorTypeModel.NEG;
            case "invert":
                return OperatorTypeModel.INVERT;
            case "not":
                return OperatorTypeModel.NOT;
            case "indexset":
                return OperatorTypeModel.INDEXSET;
            case "indexget":
                return OperatorTypeModel.INDEXGET;
            case "contains":
                return OperatorTypeModel.CONTAINS;
            case "compare":
                return OperatorTypeModel.COMPARE;
            case "membergetter":
                return OperatorTypeModel.MEMBERGETTER;
            case "membersetter":
                return OperatorTypeModel.MEMBERSETTER;
            case "equals":
                return OperatorTypeModel.EQUALS;
            case "notequals":
                return OperatorTypeModel.NOTEQUALS;
            case "shl":
                return OperatorTypeModel.SHL;
            case "shr":
                return OperatorTypeModel.SHR;
            case "ushr":
                return OperatorTypeModel.USHR;
            case "addassign":
                return OperatorTypeModel.ADDASSIGN;
            case "subassign":
                return OperatorTypeModel.SUBASSIGN;
            case "mulassign":
                return OperatorTypeModel.MULASSIGN;
            case "divassign":
                return OperatorTypeModel.DIVASSIGN;
            case "modassign":
                return OperatorTypeModel.MODASSIGN;
            case "catassign":
                return OperatorTypeModel.CATASSIGN;
            case "orassign":
                return OperatorTypeModel.ORASSIGN;
            case "andassign":
                return OperatorTypeModel.ANDASSIGN;
            case "xorassign":
                return OperatorTypeModel.XORASSIGN;
            case "shlassign":
                return OperatorTypeModel.SHLASSIGN;
            case "shrassign":
                return OperatorTypeModel.SHRASSIGN;
            case "ushrassign":
                return OperatorTypeModel.USHRASSIGN;
        }
        throw new Error(`Unable to parse operator '${JSON.stringify(obj)}'`);
    }

    export function render(
        context: BuildContext<PageModel>,
        type: TypeModel,
        member: OperatorMemberModel,
        plain: boolean,
    ) {
        const _this = member.operator;
        const owner = type.renderMemberOwner(context, plain);

        switch (_this) {
            case OperatorTypeModel.ADD:
            case OperatorTypeModel.MUL:
            case OperatorTypeModel.DIV:
            case OperatorTypeModel.MOD:
            case OperatorTypeModel.AND:
            case OperatorTypeModel.OR:
            case OperatorTypeModel.XOR:
            case OperatorTypeModel.SHL:
            case OperatorTypeModel.SHR:
            case OperatorTypeModel.USHR:
            case OperatorTypeModel.EQUALS:
            case OperatorTypeModel.NOTEQUALS:
            case OperatorTypeModel.ADDASSIGN:
            case OperatorTypeModel.SUBASSIGN:
            case OperatorTypeModel.MULASSIGN:
            case OperatorTypeModel.DIVASSIGN:
            case OperatorTypeModel.MODASSIGN:
            case OperatorTypeModel.CATASSIGN:
            case OperatorTypeModel.ORASSIGN:
            case OperatorTypeModel.ANDASSIGN:
            case OperatorTypeModel.XORASSIGN:
            case OperatorTypeModel.SHLASSIGN:
            case OperatorTypeModel.SHRASSIGN:
            case OperatorTypeModel.USHRASSIGN:
            case OperatorTypeModel.COMPARE:
                return `// (${owner} ${_this} ${member.renderParam(context, plain, 0)})${member.returnType.renderReturnType(context, plain)}`;
            case OperatorTypeModel.NOT:
                return `// (!${owner})${member.returnType.renderReturnType(context, plain)}`;
            // Disabled because SUB is the same as NEG, so it covers both cases
            // case OperatorTypeModel.SUB:
            case OperatorTypeModel.NEG:
                // SUB and NEG use the same symbol, but behave differently, thankfully one uses params and the other does not
                if (member.parameters.length === 0) {
                    return `// (-${owner})${member.returnType.renderReturnType(context, plain)}`;
                }
                return `// (${owner} ${_this} ${member.renderParam(context, plain, 0)})${member.returnType.renderReturnType(context, plain)}`;
            case OperatorTypeModel.CAT:
                if (member.parameters.length === 0) {
                    return `// (~${owner})${member.returnType.renderReturnType(context, plain)}`;
                }
                return `// (${owner} ${_this} ${member.renderParam(context, plain, 0)})${member.returnType.renderReturnType(context, plain)}`;
            case OperatorTypeModel.CONTAINS:
                return `// (${member.renderParam(context, plain, 0)} ${_this} ${owner})${member.returnType.renderReturnType(context, plain)}`;
            case OperatorTypeModel.INDEXSET:
                return `// ${owner}[${member.renderParams(context, plain, 0, -1)}] = ${member.renderParam(context, plain, member.parameters.length - 1)}`;
            case OperatorTypeModel.INDEXGET:
                return `// ${owner}[${member.renderParams(context, plain)}]${member.returnType.renderReturnType(context, plain)}`;
            case OperatorTypeModel.MEMBERGETTER:
                return `// ${owner}.${member.renderParam(context, plain, 0)}${member.returnType.renderReturnType(context, plain)}`;
            case OperatorTypeModel.MEMBERSETTER:
                return `// ${owner}.${member.renderParam(context, plain, 0)} = ${member.renderParam(context, plain, 1)}`;
            default:
                throw new Error(
                    `Unknown operator type '${JSON.stringify(member.operator)}'`,
                );
        }
    }
}

export class ParameterModel {
    readonly key: string;
    readonly displayName: string;
    readonly type: TypeModel;
    readonly defaultValue: string | undefined;

    constructor(
        key: string,
        displayName: string,
        type: TypeModel,
        defaultValue: string | undefined,
    ) {
        this.key = key;
        this.displayName = displayName;
        this.type = type;
        this.defaultValue = defaultValue;
    }

    static parse(obj: ParameterJson) {
        return new ParameterModel(
            obj.key,
            obj.display_name,
            TypeModel.parseType(obj.type),
            obj.default_value,
        );
    }

    render(context: BuildContext<PageModel>, plain: boolean): string {
        if (this.type.isVoid()) {
            return this.key;
        }
        let rendered = `${this.key} as ${this.type.render(context, "parameter", plain)}`;
        if (this.defaultValue) {
            rendered += ` = ${this.defaultValue}`;
        }
        return rendered;
    }
}

export interface HasParameters {
    readonly parameters: ParameterModel[];
}

export interface HasTypeParameters {
    readonly typeParameters: { [key: string]: TypeModel };
}

export class MemberGroupModel {
    readonly key: string;
    readonly members: MemberModel[];

    constructor(key: string, members: MemberModel[]) {
        this.key = key;
        this.members = members;
    }

    static parse(obj: MemberGroupJson): MemberGroupModel {
        return new MemberGroupModel(
            obj.key,
            obj.members.map(MemberModel.parseMember),
        );
    }

}

export interface MemberVisitor<C, R> {

    visit(member: MemberModel, context: C): R;

    visitCaster(member: CasterMemberModel, context: C): R;

    visitConstructor(member: ConstructorMemberModel, context: C): R;

    visitEnumConstant(member: EnumConstantMemberModel, context: C): R;

    visitField(member: FieldMemberModel, context: C): R;

    visitGetter(member: GetterMemberModel, context: C): R;

    visitMethod(member: MethodMemberModel, context: C): R;

    visitOperator(member: OperatorMemberModel, context: C): R;

    visitSetter(member: SetterMemberModel, context: C): R;
}

export class MemberSearchableVisitor implements MemberVisitor<BuildContext<PageModel>, { prefix?: string, content?: string, suffix?: string }> {

    public static INSTANCE = new MemberSearchableVisitor();

    private constructor() {
    }

    visit(member: MemberModel, context: BuildContext<PageModel>): { prefix?: string; content?: string; suffix?: string; } {
        return member.accept(this, context);
    }

    visitDefault(member: MemberModel, context: BuildContext<PageModel>): { prefix?: string; content?: string; suffix?: string; } {
        const ret: { prefix?: string; content?: string; suffix?: string; } = {};
        ret.prefix = member.isStatic ? "static " : undefined
        ret.content = member.key;
        return ret;
    }

    visitCaster(member: CasterMemberModel, context: BuildContext<PageModel>): { prefix?: string; content?: string; suffix?: string; } {
        const ret = this.visitDefault(member, context);
        ret.prefix = member.implicit ? "implicit " : undefined
        ret.content = member.to.renderReturnType(context, true);
        return ret;
    }

    visitConstructor(member: ConstructorMemberModel, context: BuildContext<PageModel>): { prefix?: string; content?: string; suffix?: string; } {
        const ret = this.visitDefault(member, context);
        ret.prefix = undefined;
        ret.content = `new ${context.page.renderDisplayName()}`;
        let suffix = "";
        if (context.page.isBaseTypePage()) {
            suffix += context.page.type.renderTypeParameters(context);
        }

        suffix += `(${member.renderParams(context, true)})`;
        ret.suffix = suffix;
        return ret;
    }

    visitEnumConstant(member: EnumConstantMemberModel, context: BuildContext<PageModel>): { prefix?: string; content?: string; suffix?: string; } {
        const ret = this.visitDefault(member, context);
        ret.prefix = undefined;
        return ret;
    }

    visitField(member: FieldMemberModel, context: BuildContext<PageModel>): { prefix?: string; content?: string; suffix?: string; } {
        return this.visitDefault(member, context);
    }

    visitGetter(member: GetterMemberModel, context: BuildContext<PageModel>): { prefix?: string; content?: string; suffix?: string; } {
        return this.visitDefault(member, context);
    }

    visitMethod(member: MethodMemberModel, context: BuildContext<PageModel>): { prefix?: string; content?: string; suffix?: string; } {
        const ret = this.visitDefault(member, context);
        let suffix = "";
        if (member.isStatic && context.page.isBaseTypePage()) {
            suffix += context.page.type.renderTypeParameters(context);
        }

        suffix += `(${member.renderParams(context, true)})`;
        suffix += member.returnType.renderReturnType(context, true);
        ret.suffix = suffix;
        return ret;
    }

    visitOperator(member: OperatorMemberModel, context: BuildContext<PageModel>): { prefix?: string; content?: string; suffix?: string; } {
        const ret = this.visitDefault(member, context);

        let suffix = "";
        suffix += member.hasParams()
            ? `(${member.renderParams(context, true)})`
            : "";
        suffix += member.returnType.renderReturnType(context, true);
        ret.suffix = suffix;

        return ret;
    }

    visitSetter(member: SetterMemberModel, context: BuildContext<PageModel>): { prefix?: string; content?: string; suffix?: string; } {
        return this.visitDefault(member, context);
    }

}

export class MemberTitleVisitor implements MemberVisitor<BuildContext<PageModel>, string> {

    public static readonly INSTANCE = new MemberTitleVisitor()

    private constructor() {
    }

    visit(member: MemberModel, context: BuildContext<PageModel>): string {
        return member.accept(this, context);
    }

    visitCaster(member: CasterMemberModel, context: BuildContext<PageModel>): string {
        return `${member.implicit ? "implicit " : ""}${member.to.renderReturnType(context, true)}`;
    }

    visitConstructor(member: ConstructorMemberModel, context: BuildContext<PageModel>): string {
        let title = "new";
        if (context.page.isBaseTypePage()) {
            title += context.page.type.renderTypeParameters(context);
        }

        title += `(${member.renderParams(context, true)})`;
        return title;
    }

    visitEnumConstant(member: EnumConstantMemberModel, context: BuildContext<PageModel>): string {
        return member.key;
    }

    visitField(member: FieldMemberModel, context: BuildContext<PageModel>): string {
        return member.key;
    }

    visitGetter(member: GetterMemberModel, context: BuildContext<PageModel>): string {
        return member.key;
    }

    visitMethod(member: MethodMemberModel, context: BuildContext<PageModel>): string {
        let title = "";
        if (member.isStatic) {
            title += "static ";
        }
        title += member.key;
        if (member.isStatic && context.page.isBaseTypePage()) {
            title += context.page.type.renderTypeParameters(context);
        }

        title += `(${member.renderParams(context, true)})`;
        title += member.returnType.renderReturnType(context, true);
        return title;
    }

    visitOperator(member: OperatorMemberModel, context: BuildContext<PageModel>): string {
        let title = member.operator as string;
        title += member.hasParams()
            ? `(${member.renderParams(context, true)})`
            : "";
        title += member.returnType.renderReturnType(context, true);

        return title;
    }

    visitSetter(member: SetterMemberModel, context: BuildContext<PageModel>): string {
        return member.key;
    }

}

export abstract class MemberModel {
    readonly key: string;
    readonly displayName: string;
    readonly kind: MemberKindModel;
    readonly origin: MemberOriginModel;
    readonly isStatic: boolean;
    readonly comment: CommentModel | undefined;
    readonly extra: Extra;

    protected constructor(
        key: string,
        displayName: string,
        kind: MemberKindModel,
        origin: MemberOriginModel,
        isStatic: boolean,
        comment: CommentModel | undefined,
        extra: Extra,
    ) {
        this.key = key;
        this.displayName = displayName;
        this.kind = kind;
        this.origin = origin;
        this.isStatic = isStatic;
        this.comment = comment;
        this.extra = extra;
    }

    static parseMember(obj: MemberJson): MemberModel {
        if (!obj || !obj.kind) {
            throw Error(`Unable to parse member '${JSON.stringify(obj)}'`);
        }
        switch (obj.kind) {
            case "method":
                return MethodMemberModel.parse(obj);
            case "getter":
                return GetterMemberModel.parse(obj);
            case "setter":
                return SetterMemberModel.parse(obj);
            case "field":
                return FieldMemberModel.parse(obj);
            case "enum_constant":
                return EnumConstantMemberModel.parse(obj);
            case "caster":
                return CasterMemberModel.parse(obj);
            case "operator":
                return OperatorMemberModel.parse(obj);
            case "constructor":
                return ConstructorMemberModel.parse(obj);
        }
        throw Error(`Unknown member '${JSON.stringify(obj)}'`);
    }

    getType(): string {
        return "Member";
    }

    isSearchable(): boolean {
        return this.origin === MemberOriginModel.DECLARED;
    }

    isMethod(): this is MethodMemberModel {
        return this.kind === MemberKindModel.METHOD;
    }

    isGetter(): this is GetterMemberModel {
        return this.kind === MemberKindModel.GETTER;
    }

    isSetter(): this is SetterMemberModel {
        return this.kind === MemberKindModel.SETTER;
    }

    isField(): this is FieldMemberModel {
        return this.kind === MemberKindModel.FIELD;
    }

    isEnumConstant(): this is EnumConstantMemberModel {
        return this.kind === MemberKindModel.ENUM_CONSTANT;
    }

    isCaster(): this is CasterMemberModel {
        return this.kind === MemberKindModel.CASTER;
    }

    isOperator(): this is OperatorMemberModel {
        return this.kind === MemberKindModel.OPERATOR;
    }

    isConstructor(): this is ConstructorMemberModel {
        return this.kind === MemberKindModel.CONSTRUCTOR;
    }

    hasTypeParams(): this is MemberModel & HasTypeParameters {
        return (
            (this.isMethod() || this.isConstructor() || this.isOperator()) &&
            Object.keys(this.typeParameters).length > 0
        );
    }

    hasParams(): this is MemberModel & HasParameters {
        return (
            (this.isConstructor() ||
                this.isMethod() ||
                this.isOperator() ||
                this.isSetter()) &&
            Object.keys(this.parameters).length > 0
        );
    }

    renderTypeArguments(
        context: BuildContext<PageModel>,
        plain: boolean,
    ): string {
        if (this.hasTypeParams()) {
            return `<${Object.values(this.typeParameters)
                .map((param) => param.render(context, "member", plain))
                .join(", ")}>`;
        }
        return "";
    }

    renderParams(
        context: BuildContext<PageModel>,
        plain: boolean,
        start?: number,
        end?: number,
    ): string {
        if (this.hasParams()) {
            return this.parameters
                .slice(start, end)
                .map((value) => value.render(context, plain))
                .join(", ");
        }
        return "";
    }

    renderParam(
        context: BuildContext<PageModel>,
        plain: boolean,
        index: number,
    ) {
        if (this.hasParams()) {
            if (index < this.parameters.length) {
                return `(${this.parameters[index].render(context, plain)})`;
            }
            throw new Error(
                `'${index}' is bigger than the number of params '${this.parameters.length}' of ${JSON.stringify(context)}`,
            );
        }
        throw new Error(
            `Member ('${JSON.stringify(this)}') does not have any parameters! Cannot render param: '${index}'`,
        );
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

    abstract accept<C, R>(visitor: MemberVisitor<C, R>, context?: C): R;
}

export class CasterMemberModel extends MemberModel {
    readonly to: TypeModel;
    readonly implicit: boolean;

    constructor(
        key: string,
        displayName: string,
        origin: MemberOriginModel,
        isStatic: boolean,
        comment: CommentModel | undefined,
        extra: Extra,
        to: TypeModel,
        implicit: boolean,
    ) {
        super(
            key,
            displayName,
            MemberKindModel.CASTER,
            origin,
            isStatic,
            comment,
            extra,
        );
        this.to = to;
        this.implicit = implicit;
    }

    static parse(obj: CasterMemberJson) {
        return new CasterMemberModel(
            obj.key,
            obj.display_name,
            MemberOriginModel.parse(obj.origin),
            obj.static,
            ifPresent(obj.comment, CommentModel.parseComment),
            Extra.parse(obj.extra),
            TypeModel.parseType(obj.to),
            obj.implicit as boolean,
        );
    }

    getType(): string {
        return "Caster";
    }

    accept<C, R>(visitor: MemberVisitor<C, R>, context: C): R {
        return visitor.visitCaster(this, context);
    }
}

export class ConstructorMemberModel
    extends MemberModel
    implements HasTypeParameters, HasParameters {
    readonly parameters: ParameterModel[];
    readonly typeParameters: { [key: string]: TypeModel };

    constructor(
        origin: MemberOriginModel,
        isStatic: boolean,
        comment: CommentModel | undefined,
        extra: Extra,
        parameters: ParameterModel[],
        typeParameters: {
            [p: string]: TypeModel;
        },
    ) {
        super(
            "new",
            "new",
            MemberKindModel.CONSTRUCTOR,
            origin,
            isStatic,
            comment,
            extra,
        );
        this.parameters = parameters;
        this.typeParameters = typeParameters;
    }

    static parse(obj: ConstructorMemberJson) {
        return new ConstructorMemberModel(
            MemberOriginModel.parse(obj.origin),
            obj.static,
            ifPresent(obj.comment, CommentModel.parseComment),
            Extra.parse(obj.extra),
            obj.parameters.map(ParameterModel.parse),
            parseMap(obj.type_parameters, TypeModel.parseType),
        );
    }

    getType(): string {
        return "Constructor";
    }

    accept<C, R>(visitor: MemberVisitor<C, R>, context: C): R {
        return visitor.visitConstructor(this, context);
    }
}

export class EnumConstantMemberModel extends MemberModel {
    readonly type: TypeModel;

    constructor(
        key: string,
        displayName: string,
        origin: MemberOriginModel,
        isStatic: boolean,
        comment: CommentModel | undefined,
        extra: Extra,
        type: TypeModel,
    ) {
        super(
            key,
            displayName,
            MemberKindModel.ENUM_CONSTANT,
            origin,
            isStatic,
            comment,
            extra,
        );
        this.type = type;
    }

    static parse(obj: EnumConstantMemberJson) {
        return new EnumConstantMemberModel(
            obj.key,
            obj.display_name,
            MemberOriginModel.parse(obj.origin),
            obj.static,
            ifPresent(obj.comment, CommentModel.parseComment),
            Extra.parse(obj.extra),
            TypeModel.parseType(obj.type),
        );
    }

    getType(): string {
        return "Enum Constant";
    }

    accept<C, R>(visitor: MemberVisitor<C, R>, context: C): R {
        return visitor.visitEnumConstant(this, context);
    }
}

export class FieldMemberModel extends MemberModel {
    readonly type: TypeModel;

    constructor(
        key: string,
        displayName: string,
        origin: MemberOriginModel,
        isStatic: boolean,
        comment: CommentModel | undefined,
        extra: Extra,
        type: TypeModel,
    ) {
        super(
            key,
            displayName,
            MemberKindModel.FIELD,
            origin,
            isStatic,
            comment,
            extra,
        );
        this.type = type;
    }

    static parse(obj: FieldMemberJson) {
        return new FieldMemberModel(
            obj.key,
            obj.display_name,
            MemberOriginModel.parse(obj.origin),
            obj.static,
            ifPresent(obj.comment, CommentModel.parseComment),
            Extra.parse(obj.extra),
            TypeModel.parseType(obj.type),
        );
    }

    getType(): string {
        return "Field";
    }

    accept<C, R>(visitor: MemberVisitor<C, R>, context: C): R {
        return visitor.visitField(this, context);
    }
}

export class GetterMemberModel extends MemberModel {
    readonly type: TypeModel;

    constructor(
        key: string,
        displayName: string,
        origin: MemberOriginModel,
        isStatic: boolean,
        comment: CommentModel | undefined,
        extra: Extra,
        type: TypeModel,
    ) {
        super(
            key,
            displayName,
            MemberKindModel.GETTER,
            origin,
            isStatic,
            comment,
            extra,
        );
        this.type = type;
    }

    static parse(obj: GetterMemberJson) {
        return new GetterMemberModel(
            obj.key,
            obj.display_name,
            MemberOriginModel.parse(obj.origin),
            obj.static,
            ifPresent(obj.comment, CommentModel.parseComment),
            Extra.parse(obj.extra),
            TypeModel.parseType(obj.type),
        );
    }

    getType(): string {
        return "Getter";
    }

    accept<C, R>(visitor: MemberVisitor<C, R>, context: C): R {
        return visitor.visitGetter(this, context);
    }
}

export class MethodMemberModel
    extends MemberModel
    implements HasTypeParameters, HasParameters {
    readonly parameters: ParameterModel[];
    readonly returnType: TypeModel;
    readonly typeParameters: { [key: string]: TypeModel };

    constructor(
        key: string,
        displayName: string,
        origin: MemberOriginModel,
        isStatic: boolean,
        comment: CommentModel | undefined,
        extra: Extra,
        parameters: ParameterModel[],
        returnType: TypeModel,
        typeParameters: {
            [key: string]: TypeModel;
        },
    ) {
        super(
            key,
            displayName,
            MemberKindModel.METHOD,
            origin,
            isStatic,
            comment,
            extra,
        );
        this.parameters = parameters;
        this.returnType = returnType;
        this.typeParameters = typeParameters;
    }

    static parse(obj: MethodMemberJson) {
        return new MethodMemberModel(
            obj.key,
            obj.display_name,
            MemberOriginModel.parse(obj.origin),
            obj.static,
            ifPresent(obj.comment, CommentModel.parseComment),
            Extra.parse(obj.extra),
            obj.parameters.map(ParameterModel.parse),
            TypeModel.parseType(obj.return_type),
            parseMap(obj.type_parameters, TypeModel.parseType),
        );
    }

    getType(): string {
        return "Method";
    }

    accept<C, R>(visitor: MemberVisitor<C, R>, context: C): R {
        return visitor.visitMethod(this, context);
    }
}

export class OperatorMemberModel
    extends MemberModel
    implements HasTypeParameters, HasParameters {
    readonly parameters: ParameterModel[];
    readonly returnType: TypeModel;
    readonly typeParameters: { [key: string]: TypeModel };
    readonly operator: OperatorTypeModel;

    constructor(
        key: string,
        displayName: string,
        origin: MemberOriginModel,
        isStatic: boolean,
        comment: CommentModel | undefined,
        extra: Extra,
        parameters: ParameterModel[],
        returnType: TypeModel,
        typeParameters: {
            [key: string]: TypeModel;
        },
        operator: OperatorTypeModel,
    ) {
        super(
            key,
            displayName,
            MemberKindModel.OPERATOR,
            origin,
            isStatic,
            comment,
            extra,
        );
        this.parameters = parameters;
        this.returnType = returnType;
        this.typeParameters = typeParameters;
        this.operator = operator;
    }

    static parse(obj: OperatorMemberJson) {
        return new OperatorMemberModel(
            obj.key,
            obj.display_name,
            MemberOriginModel.parse(obj.origin),
            obj.static,
            ifPresent(obj.comment, CommentModel.parseComment),
            Extra.parse(obj.extra),
            obj.parameters.map(ParameterModel.parse),
            TypeModel.parseType(obj.return_type),
            parseMap(obj.type_parameters, TypeModel.parseType),
            OperatorTypeModel.parse(obj.operator),
        );
    }

    getType(): string {
        return "Operator";
    }

    accept<C, R>(visitor: MemberVisitor<C, R>, context: C): R {
        return visitor.visitOperator(this, context);
    }
}

export class SetterMemberModel extends MemberModel implements HasParameters {
    readonly parameters: ParameterModel[];

    constructor(
        key: string,
        displayName: string,
        origin: MemberOriginModel,
        isStatic: boolean,
        comment: CommentModel | undefined,
        extra: Extra,
        parameters: ParameterModel[],
    ) {
        super(
            key,
            displayName,
            MemberKindModel.SETTER,
            origin,
            isStatic,
            comment,
            extra,
        );
        this.parameters = parameters;
    }

    static parse(obj: SetterMemberJson) {
        return new SetterMemberModel(
            obj.key,
            obj.display_name,
            MemberOriginModel.parse(obj.origin),
            obj.static,
            ifPresent(obj.comment, CommentModel.parseComment),
            Extra.parse(obj.extra),
            obj.parameters.map(ParameterModel.parse),
        );
    }

    getType(): string {
        return "Setter";
    }

    accept<C, R>(visitor: MemberVisitor<C, R>, context: C): R {
        return visitor.visitSetter(this, context);
    }
}
