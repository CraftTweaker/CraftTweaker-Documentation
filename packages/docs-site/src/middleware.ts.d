import { defineMiddleware } from "astro:middleware";
import { getDocsJson } from "docs-model";

export const onRequest = defineMiddleware((context, next) => {
    if (context.params.version) {
        const { version } = context.params;
        Object.assign(context.locals, {
            docsJson: getDocsJson(version),
        });
    }
    return next();
});
