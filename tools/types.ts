export interface Docs {
    nav: Nav;
}

export type Nav = { [key: string]: Nav };


/**
 * The "raw" docs meta
 */
export interface DocsMeta {
    ownerModId: string;
    path?: string;
    searchTerms: string[];
    shortDescription?: string;
    since?: string;
    deprecation?: string;
    zenCodeName: string;
}

/**
 * The "built" docs meta, with generated properties
 */
export interface GeneratedDocsMeta extends DocsMeta {
    folders: string[],
    previous?: Page,
    next?: Page
}

export interface Page {
    name: string
    path: string
}

export interface ReversePaths {
    [key: string]: string[];
}