import type { ExpressiveCodePlugin } from "@expressive-code/core";

export default (): ExpressiveCodePlugin => {
    return {
        name: "Language Override",
        hooks: {
            preprocessLanguage: (context) => {
                const codeBlock = context.codeBlock;
                const language = codeBlock.language;
                if (
                    language === "zc" ||
                    language === "zencode" ||
                    language === "zs"
                ) {
                    codeBlock.language = "zenscript";
                }
                if (language === "JSON") {
                    codeBlock.language = "json";
                }
            },
        },
    };
};
