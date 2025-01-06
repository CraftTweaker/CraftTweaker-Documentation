import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const hackyCollection = defineCollection({
    loader: {
        name: "cheaty-hack-to-get-markdown-config",
        load: async context => {
            global.hackyMarkdownConfig = context.config.markdown;
        }
    },
    schema: z.never(),
});

export const collections = { hackyCollection };