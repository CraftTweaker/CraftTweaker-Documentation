import type { PageModel } from "./Page";
import { getPage, ifPresent, parseMap } from "./Util";
import type {
    ArrayTypeJson,
    BasicTypeJson,
    BuildContext,
    GenericTypeJson,
    JavaTypeJson,
    TypeJson,
} from "./types.d.ts";

export enum TypeKindModel {
    ARRAY = "array",
    BASIC = "basic",
    GENERIC = "generic",
    JAVA = "java",
}

export enum BoundModel {
    SPECIFIC = "specific",
    UPPER = "upper",
    LOWER = "lower",
}

export namespace BoundModel {
    export function parseBound(obj: string) {
        switch (obj) {
            case "specific":
                return BoundModel.SPECIFIC;
            case "upper":
                return BoundModel.UPPER;
            case "lower":
                return BoundModel.LOWER;
        }
        throw new Error(`Unable to parse bound '${JSON.stringify(obj)}'`);
    }
}

function renderLinkable(display: string, key: string, plain: boolean) {
    if (plain) {
        return display;
    }
    return `§${display}§${key}§`;
}

export class TypeModel {
    readonly key: string;
    readonly displayName: string;
    readonly kind: TypeKindModel;
    readonly nullable: boolean;

    protected constructor(
        key: string,
        displayName: string,
        kind: TypeKindModel,
        nullable: boolean,
    ) {
        this.key = key;
        this.displayName = displayName;
        this.kind = kind;
        this.nullable = nullable;
    }

    static parseType(obj: TypeJson): TypeModel {
        if (!obj || !obj.kind) {
            throw Error(`Unable to parse type '${JSON.stringify(obj)}'`);
        }
        switch (obj.kind) {
            case "array":
                return ArrayTypeModel.parse(obj);
            case "basic":
                return BasicTypeModel.parse(obj);
            case "generic":
                return GenericTypeModel.parse(obj);
            case "java":
                return JavaTypeModel.parse(obj);
        }
        throw Error(`Unknown type '${JSON.stringify(obj)}'`);
    }

    static isObject(key: string) {
        return key === "java.lang.Object";
    }

    static isRecord(key: string) {
        return key === "java.lang.Record";
    }

    isVoid() {
        return this.key === "void";
    }

    isArray(): this is ArrayTypeModel {
        return this.kind === TypeKindModel.ARRAY;
    }

    isBasic(): this is BasicTypeModel {
        return this.kind === TypeKindModel.BASIC;
    }

    isJava(): this is JavaTypeModel {
        return this.kind === TypeKindModel.JAVA;
    }

    isGeneric(): this is GenericTypeModel {
        return this.kind === TypeKindModel.GENERIC;
    }

    isObject() {
        return TypeModel.isObject(this.key);
    }

    isRecord() {
        return TypeModel.isRecord(this.key);
    }

    lookupPage<T extends PageModel>(context: BuildContext<PageModel>): T {
        return getPage(context, this.key) as T;
    }

    getExampleFor(
        context: BuildContext<PageModel>,
        name: string,
        defaultExample?: string,
    ): string[] {
        const page = this.lookupPage(context);
        if (!page) {
            return defaultExample ? [defaultExample] : [];
        }
        return page.getExampleFor(name, defaultExample);
    }

    getDefaultExample() {
        return this.displayName;
    }

    renderNullable(display: string = this.displayName) {
        if (this.nullable) {
            return `${display}?`;
        }
        return display;
    }

    render(
        context: BuildContext<PageModel>,
        location: string,
        plain: boolean,
    ): string {
        return this.renderNullable();
    }

    renderReturnType(context: BuildContext<PageModel>, plain: boolean) {
        if (this.isVoid()) {
            return "";
        }
        return ` as ${this.render(context, "return_type", plain)}`;
    }

    renderMemberOwner(
        context: BuildContext<PageModel>,
        plain: boolean,
    ): string {
        throw new Error("Unable to render a non java owner!");
    }

    renderTypeParameters(context: BuildContext<PageModel>): string {
        return "";
    }
}

export class ArrayTypeModel extends TypeModel {
    readonly componentType: TypeModel;

    constructor(
        key: string,
        displayName: string,
        nullable: boolean,
        componentType: TypeModel,
    ) {
        super(key, displayName, TypeKindModel.ARRAY, nullable);
        this.componentType = componentType;
    }

    static parse(obj: ArrayTypeJson) {
        return new ArrayTypeModel(
            obj.key,
            obj.display_name,
            obj.nullable,
            TypeModel.parseType(obj.component_type),
        );
    }

    lookupPage<T extends PageModel>(context: BuildContext<PageModel>): T {
        return this.componentType.lookupPage(context);
    }

    render(context: BuildContext<PageModel>, location: string, plain: boolean) {
        return this.renderNullable(
            `${this.componentType.render(context, location, plain)}[]`,
        );
    }
}

export class BasicTypeModel extends TypeModel {
    constructor(key: string, displayName: string, nullable: boolean) {
        super(key, displayName, TypeKindModel.BASIC, nullable);
    }

    static parse(obj: BasicTypeJson) {
        return new BasicTypeModel(obj.key, obj.display_name, obj.nullable);
    }

    render(
        context: BuildContext<PageModel>,
        location: string,
        plain: boolean,
    ): string {
        const typePage = this.lookupPage(context);
        if (typePage) {
            return this.renderNullable(
                renderLinkable(typePage.renderDisplayName(), this.key, plain),
            );
        }
        return this.renderNullable();
    }
}

export class GenericTypeModel extends TypeModel {
    readonly type: TypeModel;
    readonly bound: BoundModel;

    constructor(
        key: string,
        displayName: string,
        nullable: boolean,
        type: TypeModel,
        bound: BoundModel,
    ) {
        super(key, displayName, TypeKindModel.GENERIC, nullable);
        this.type = type;
        this.bound = bound;
    }

    static parse(obj: GenericTypeJson) {
        return new GenericTypeModel(
            obj.key,
            obj.display_name,
            obj.nullable,
            TypeModel.parseType(obj.type),
            BoundModel.parseBound(obj.bound),
        );
    }

    render(
        context: BuildContext<PageModel>,
        location: string,
        plain: boolean,
    ): string {
        // Make sure this is the right place
        if (this.type.isObject()) {
            return this.renderNullable(this.key);
        }

        if (location === "member") {
            return this.renderNullable(
                `${this.key} : ${this.type.render(context, location, plain)}`,
            );
        }
        if (location === "return_type") {
            //TODO do I need this?
            // return type.key;
        }

        return this.renderNullable(
            `${this.type.render(context, location, plain)}`,
        );
    }
}

export class JavaTypeModel extends TypeModel {
    readonly packageName: string;
    readonly className: string;
    readonly typeParameters: { [key: string]: TypeModel };
    readonly superType: TypeModel | undefined;
    readonly interfaces: TypeModel[];

    constructor(
        key: string,
        displayName: string,
        nullable: boolean,
        packageName: string,
        className: string,
        typeParameters: { [key: string]: TypeModel },
        superType: TypeModel | undefined,
        interfaces: TypeModel[],
    ) {
        super(key, displayName, TypeKindModel.JAVA, nullable);
        this.packageName = packageName;
        this.className = className;
        this.typeParameters = typeParameters;
        this.superType = superType;
        this.interfaces = interfaces;
    }

    static parse(obj: JavaTypeJson) {
        return new JavaTypeModel(
            obj.key,
            obj.display_name,
            obj.nullable,
            obj.package_name,
            obj.class_name,
            parseMap(obj.type_parameters, TypeModel.parseType),
            ifPresent(obj.super_type, TypeModel.parseType),
            obj.interfaces.map(TypeModel.parseType),
        );
    }

    hasTypeParameters() {
        return (
            this.typeParameters && Object.keys(this.typeParameters).length > 0
        );
    }

    render(
        context: BuildContext<PageModel>,
        location: string,
        plain: boolean,
    ): string {
        if (this.key === "java.util.function.Consumer") {
            const tParam = Object.keys(this.typeParameters)[0];
            const param = this.typeParameters[tParam];
            const pType = param.isObject()
                ? tParam
                : param.render(context, "parameter", plain);
            return `function(${tParam.toLowerCase()} as ${pType}) as void`;
        }
        if (this.key === "java.util.Map") {
            return `${this.typeParameters.V.render(context, "map", plain)}[${this.typeParameters.K.render(context, "map", plain)}]`;
        }
        if (this.key === "java.util.function.Predicate") {
            const tParam = Object.keys(this.typeParameters)[0];
            const param = this.typeParameters[tParam];
            return `function(${tParam.toLowerCase()} as ${param.render(context, "parameter", plain)}) as bool`;
        }
        if (this.key === "java.util.function.Function") {
            const paramKey = Object.keys(this.typeParameters)[0];
            const param = this.typeParameters[paramKey];
            const paramType = param.isObject()
                ? paramKey
                : param.render(context, "parameter", plain);

            const retKey = Object.keys(this.typeParameters)[1];
            const ret = this.typeParameters[retKey];
            const retType = ret.isObject()
                ? retKey
                : ret.render(context, "return_type", plain);
            return `function(${paramKey.toLowerCase()} as ${paramType}) as ${retType}`;
        }

        let typeParams = "";
        if (this.hasTypeParameters()) {
            typeParams = `<${Object.values(this.typeParameters)
                .map((param) => param.render(context, location, plain))
                .join(", ")}>`;
        }
        if (context.typeLinks) {
            const typePage = this.lookupPage(context);
            if (typePage) {
                return this.renderNullable(
                    `${renderLinkable(typePage.renderDisplayName(), this.key, plain)}${typeParams}`,
                );
            }
        }
        return this.renderNullable(this.className + typeParams);
    }

    renderMemberOwner(
        context: BuildContext<PageModel>,
        plain: boolean,
    ): string {
        let base = this.className;
        if (this.hasTypeParameters()) {
            base += `<${Object.values(this.typeParameters).map((type) => type.render(context, "member", plain))}>`;
        }
        return base;
    }

    renderTypeParameters(context: BuildContext<PageModel>): string {
        if (this.hasTypeParameters()) {
            return `<${Object.values(this.typeParameters)
                .map((value) =>
                    value.getExampleFor(context, value.key, value.key),
                )
                .join(", ")}>`;
        }

        return super.renderTypeParameters(context);
    }

    getDefaultExample() {
        return this.className;
    }
}
