import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import astroExpressiveCode from "astro-expressive-code";
import icon from "astro-icon";
import {defineConfig} from "astro/config";
import GithubSlugger from "github-slugger";
import remarkDirective from "remark-directive";
import {ContainerHandler, HeaderHandler, InlineCodeHandler, LeafHandler, LinkHandler,} from "remark-rehype-renderers";
import remarkTable from "remark-table";
import path from "node:path";

const sluggers: Record<string, GithubSlugger> = {};
const sluggerFactory = (path: string) => {
    if (!sluggers[path]) {
        sluggers[path] = new GithubSlugger();
    }
    return sluggers[path];
};

export default defineConfig({
    integrations: [
        tailwind(),
        sitemap(),
        icon(),
        astroExpressiveCode(),
    ],
    site: "https://docs.blamejared.com",
    markdown: {
        remarkPlugins: [remarkTable, remarkDirective],
        remarkRehype: {
            handlers: {
                heading: (state, node, parent) =>
                    HeaderHandler(sluggerFactory, state, node, parent),
                link: LinkHandler,
                inlineCode: InlineCodeHandler,
                containerDirective: (state, node, parent) =>
                    ContainerHandler(sluggerFactory, state, node, parent),
                leafDirective: LeafHandler,
            },
        },
    },
    outDir: path.join("..", "..", "dist"),
    prefetch: {
        defaultStrategy: "hover",
        prefetchAll: false,
    },
});
