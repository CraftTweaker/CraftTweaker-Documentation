import type { Nav, PageMeta } from "docs-model";

const searchValues = (nav: Nav, needle: string): boolean => {
    for (const value of Object.values(nav)) {
        if (typeof value === "string") {
            if (value === needle) {
                return true;
            }
        } else {
            if (searchValues(value, needle)) {
                return true;
            }
        }
    }
    return false;
};
export const shouldFolderBeOpen = (
    name: string,
    nav: Nav,
    current: PageMeta,
): boolean => {
    if (!current.path) {
        return false;
    }
    return searchValues(nav, current.path);
};

export const escapeHtml = (unsafe: string | undefined) => {
    if (!unsafe) {
        return "";
    }
    return unsafe
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
};

// biome-ignore lint/suspicious/noExplicitAny: Not sure how to type callback
export const debounce = (callback: any, wait: number) => {
    let timeoutId: number | undefined = undefined;
    return (...args: unknown[]) => {
        window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
            callback.apply(null, args);
        }, wait);
    };
};
