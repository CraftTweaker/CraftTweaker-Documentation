import fs from "node:fs";
import path from "node:path";
import {PageModel} from "./Page";
import type {BuildContext, Docs, Nav, Page, PageMeta, TypeInfo, Types, Versions,} from "./types.d.ts";

export function ifPresent<T, U>(
    obj: T | undefined,
    func: (obj: T) => U,
): U | undefined {
    if (obj) {
        return func(obj);
    }
}

export function parseMap<T, U>(
    map: Record<string, T>,
    mapper: (obj: T) => U,
): { [key: string]: U } {
    const parsed: { [key: string]: U } = {};
    for (const key of Object.keys(map)) {
        parsed[key] = mapper(map[key]);
    }
    return parsed;
}

export const getDocsDir = (): string => {
    return path.join("src", "docs");
};

export const getDocsPath = (subpath: string): string => {
    return path.join(getDocsDir(), subpath);
};

export const getPagePath = (version: string, slug: string): string => {
    return getDocsPath(path.join(version, "content", slug));
};

export const getPageContent = (version: string, slug: string): string => {
    return fs.readFileSync(getPagePath(version, slug), "utf-8");
};

export const getPage = (
    context: BuildContext<PageModel>,
    key: string,
): PageModel | undefined => {
    if (context.types[key] && context.types[key].keys.length === 1) {
        return PageModel.parsePage(
            JSON.parse(
                getPageContent(
                    context.version,
                    `${context.types[key].keys[0]}.json`,
                ),
            ),
        );
    }
    return undefined;
};

export const getAllVersions = (): Versions => {
    return JSON.parse(fs.readFileSync(getDocsPath("versions.json"), "utf-8"));
};

export const getFlatVersions = (versions?: Versions): string[] => {
    const allVersions = versions ?? getAllVersions();
    return Object.keys(allVersions.all).flatMap(
        (value) => allVersions.all[value],
    );
};

export const getDocsJson = (version: string): Docs => {
    const docsPath = getDocsPath(path.join(version, "docs.json"));

    return (
        fs.existsSync(docsPath) &&
        JSON.parse(fs.readFileSync(docsPath, "utf-8"))
    );
};

export const getPageMeta = (version: string, slug: string): PageMeta => {
    return JSON.parse(
        fs.readFileSync(getPagePath(version, `${slug}.json`), "utf-8"),
    );
};

export const getPagesFor = (version: string): Page[] => {
    const docs = getDocsJson(version);
    const pages: Page[] = [];
    if (docs) {
        collectPages(docs.nav, pages);
    }
    return pages;
};

export const collectPages = (doc: Nav, done: Page[] = []): void => {
    const donePages = done || [];

    for (const docKey in doc) {
        const val = doc[docKey];
        if (typeof val === "object") {
            collectPages(val, donePages);
        } else {
            donePages.push({ name: docKey, path: val });
        }
    }
};

export const capitalizeFirst = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getTypesJson = (version: string): Types => {
    const typesPath = getDocsPath(path.join(version, "types.json"));

    return (
        fs.existsSync(typesPath) &&
        JSON.parse(fs.readFileSync(typesPath, "utf-8"))
    );
};

export const getTypeInformation = (version: string, key: string): TypeInfo => {
    const typesJson = getTypesJson(version);

    return typesJson[key];
};
