import { defineEcConfig } from "astro-expressive-code";
import copyInFrame from "ec-copy-in-frame";
import defaultFrameTitle from "ec-default-frame-title";
import pluginExampleComment from "ec-example-comment";
import languageOverrides from "ec-language-override";
import pluginRainbowBrackets from "ec-rainbow-brackets";

export default defineEcConfig({
    themes: ["dark-plus", "light-plus"],
    themeCssSelector: (theme) => {
        return `.${theme.type}`;
    },
    useThemedScrollbars: false,
    frames: {
        extractFileNameFromCode: false,
        showCopyToClipboardButton: false,
    },
    useStyleReset: true,
    styleOverrides: {
        codeFontSize: 13,
        borderRadius: "0",
        codePaddingBlock: "0.5rem",
        codePaddingInline: "1rem",
        scrollbarThumbColor: (context) => {
            return "#2A6B8D";
        },
        scrollbarThumbHoverColor: (context) => {
            return "#3588B3";
        },
        frames: {
            frameBoxShadowCssValue: 0,
        },
    },
    plugins: [
        pluginExampleComment(),
        languageOverrides(),
        defaultFrameTitle(),
        pluginRainbowBrackets(),
        copyInFrame(),
    ],
});
