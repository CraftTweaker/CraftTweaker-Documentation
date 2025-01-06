import { CommentModel } from "./Comment";
import { ifPresent } from "./Util";
import type {
    CommentJson,
    DeprecatedJson,
    ExamplesJson,
    ExtraJson,
    ModJson,
    ObtentionJson,
    ParameterCommentsJson,
} from "./types";

export class BracketEnum {
    readonly value: string;

    constructor(value: string) {
        this.value = value;
    }

    static parse(obj: string) {
        if (obj) {
            return new BracketEnum(obj);
        }
        throw new Error(`Unable to parse '${JSON.stringify(obj)}'`);
    }
}

export class Deprecated {
    readonly reason: CommentModel | undefined;
    readonly since: CommentModel | undefined;
    readonly forRemoval: boolean;

    constructor(
        reason: CommentModel | undefined,
        since: CommentModel | undefined,
        forRemoval: boolean,
    ) {
        this.reason = reason;
        this.since = since;
        this.forRemoval = forRemoval;
    }

    static parse(obj: DeprecatedJson) {
        if (obj) {
            return new Deprecated(
                CommentModel.parseComment(obj.reason),
                CommentModel.parseComment(obj.since),
                obj.for_removal,
            );
        }
        throw new Error(`Unable to parse '${JSON.stringify(obj)}'`);
    }
}

export class EventParent {}

export class Examples {
    readonly examples: ExamplesJson;

    constructor(examples: ExamplesJson) {
        this.examples = examples;
    }

    static parse(obj: ExamplesJson) {
        if (obj) {
            return new Examples(obj);
        }
        throw new Error(`Unable to parse '${JSON.stringify(obj)}'`);
    }
}

export class Loaders {
    readonly value: string[];

    constructor(value: string[]) {
        this.value = value;
    }

    static parse(obj: string[]) {
        if (obj) {
            return new Loaders(obj);
        }
        throw new Error(`Unable to parse '${JSON.stringify(obj)}'`);
    }
}

export class Obtention {
    readonly method: CommentModel;

    constructor(method: CommentModel) {
        this.method = method;
    }

    static parse(obj: ObtentionJson) {
        if (obj) {
            return new Obtention(CommentModel.parseComment(obj.method));
        }
        throw new Error(`Unable to parse '${JSON.stringify(obj)}'`);
    }
}

export class ParameterComments {
    readonly comments: { [key: string]: CommentModel };

    constructor(comments: { [key: string]: CommentModel }) {
        this.comments = comments;
    }

    static parse(obj: ParameterCommentsJson) {
        if (obj) {
            const comments: { [key: string]: CommentModel } = {};
            for (const key of Object.keys(obj)) {
                comments[key] = CommentModel.parseComment(obj[key]);
            }
            return new ParameterComments(comments);
        }
        throw new Error(`Unable to parse '${JSON.stringify(obj)}'`);
    }

    getCommentFor(key: string): CommentModel | undefined {
        return this.comments[key];
    }
}

export class Mod {
    readonly modId: string;
    readonly displayName: string;
    readonly url: string;

    constructor(modId: string, displayName: string, url: string) {
        this.modId = modId;
        this.displayName = displayName;
        this.url = url;
    }

    static parse(obj: ModJson) {
        if (obj) {
            return new Mod(obj.mod_id, obj.display_name, obj.url);
        }
        throw new Error(`Unable to parse '${JSON.stringify(obj)}'`);
    }
}

export class RequiredMods {
    readonly value: Mod[];

    constructor(value: Mod[]) {
        this.value = value;
    }

    static parse(obj: ModJson[]) {
        if (obj) {
            return new RequiredMods(obj.map(Mod.parse));
        }
        throw new Error(`Unable to parse '${JSON.stringify(obj)}'`);
    }
}

export class Returns {
    readonly description: CommentModel;

    constructor(description: CommentModel) {
        this.description = description;
    }

    static parse(obj: CommentJson) {
        if (obj) {
            return new Returns(CommentModel.parseComment(obj));
        }
        throw new Error(`Unable to parse '${JSON.stringify(obj)}'`);
    }
}

export class See {
    readonly what: CommentModel;

    constructor(what: CommentModel) {
        this.what = what;
    }

    static parse(obj: CommentJson) {
        if (obj) {
            return new See(CommentModel.parseComment(obj));
        }
        throw new Error(`Unable to parse '${JSON.stringify(obj)}'`);
    }
}

export class Since {
    readonly when: CommentModel;

    constructor(when: CommentModel) {
        this.when = when;
    }

    static parse(obj: CommentJson) {
        if (obj) {
            return new Since(CommentModel.parseComment(obj));
        }
        throw new Error(`Unable to parse '${JSON.stringify(obj)}'`);
    }
}

export class Extra {

    public static EMPTY = new Extra(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    readonly bracketEnum: BracketEnum | undefined;
    readonly deprecated: Deprecated | undefined;
    readonly eventParent: EventParent | undefined;
    readonly examples: Examples | undefined;
    readonly loaders: Loaders | undefined;
    readonly obtention: Obtention | undefined;
    readonly parameterComment: ParameterComments | undefined;
    readonly requiredMods: RequiredMods | undefined;
    readonly returns: Returns | undefined;
    readonly see: See | undefined;
    readonly since: Since | undefined;

    constructor(
        bracketEnum: BracketEnum | undefined,
        deprecated: Deprecated | undefined,
        eventParent: EventParent | undefined,
        examples: Examples | undefined,
        loaders: Loaders | undefined,
        obtention: Obtention | undefined,
        parameterComment: ParameterComments | undefined,
        requiredMods: RequiredMods | undefined,
        returns: Returns | undefined,
        see: See | undefined,
        since: Since | undefined,
    ) {
        this.bracketEnum = bracketEnum;
        this.deprecated = deprecated;
        this.eventParent = eventParent;
        this.examples = examples;
        this.loaders = loaders;
        this.obtention = obtention;
        this.parameterComment = parameterComment;
        this.requiredMods = requiredMods;
        this.returns = returns;
        this.see = see;
        this.since = since;
    }

    static parse(obj: ExtraJson) {
        const bracketEnum = ifPresent(obj.bracket_enum, BracketEnum.parse);
        const deprecated = ifPresent(obj.deprecated, Deprecated.parse);
        const eventParent = ifPresent(
            obj.event_parent,
            () => new EventParent(),
        );
        const examples = ifPresent(obj.examples, Examples.parse);
        const loaders = ifPresent(obj.loaders, Loaders.parse);
        const obtention = ifPresent(obj.obtention, Obtention.parse);
        const parameterComment = ifPresent(
            obj.parameter_comment,
            ParameterComments.parse,
        );
        const requiredMods = ifPresent(obj.required_mods, RequiredMods.parse);
        const returns = ifPresent(obj.returns, Returns.parse);
        const see = ifPresent(obj.see, See.parse);
        const since = ifPresent(obj.since, Since.parse);

        return new Extra(
            bracketEnum,
            deprecated,
            eventParent,
            examples,
            loaders,
            obtention,
            parameterComment,
            requiredMods,
            returns,
            see,
            since,
        );
    }
}
