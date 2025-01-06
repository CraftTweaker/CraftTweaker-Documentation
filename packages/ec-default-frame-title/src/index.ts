import type { ExpressiveCodePlugin } from "@expressive-code/core";
import fs from "node:fs";
import type {PluginFramesProps} from "@expressive-code/plugin-frames";

// I feel like I shouldn't have to do this, yet I do...
declare module "@expressive-code/core" {
    export interface ExpressiveCodeBlockProps extends PluginFramesProps {}
}

export default (): ExpressiveCodePlugin => {
    return {
        name: "Default Frame Title",
        hooks: {
            preprocessMetadata: ({ codeBlock }) => {
                const { props } = codeBlock;
                if (!props.title) {
                    if (codeBlock.language === "zenscript" || !codeBlock.language) {
                        props.title = "script.zs";
                    } else {
                        props.title = codeBlock.language;
                    }
                }
            },
        },
    };
};
