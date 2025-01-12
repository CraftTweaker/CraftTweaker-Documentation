/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type { Docs, Nav, PageMeta } from "docs-model";
import type {AstroMarkdownOptions} from "@astrojs/markdown-remark";

declare namespace App {
    interface Locals {
        docsJson: Docs;
    }
}

declare global {
    var hackyMarkdownConfig: AstroMarkdownOptions;
    interface Window {
        docsJson: Docs;
        pageVersion: string;
        pageMeta: PageMeta;
        changeTheme(theme: "light" | "dark"): void;
        themeInit: boolean;
    }
}
