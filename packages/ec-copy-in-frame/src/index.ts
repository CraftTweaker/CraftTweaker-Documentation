import type { ExpressiveCodePlugin } from "@expressive-code/core";
import type { FramesStyleSettings } from "@expressive-code/plugin-frames";

// Copy from @expressive-code/plugin-frames to fix the build
declare module "@expressive-code/core" {
    interface StyleSettings {
        frames: FramesStyleSettings;
    }
}

export default (): ExpressiveCodePlugin => {
    const copyModule = `document.querySelectorAll(".expressive-code button.copy").forEach(value => {
    value.addEventListener("click", async (event) => {
        const button = event.currentTarget;
        const {code} = button.dataset;
        try {
            await navigator.clipboard.writeText(code.replace(/\u007f/g, '\\n'))
            button.classList.add('copied')
            setTimeout(() => {
                button.classList.remove('copied')
            }, 1000)
        } catch (err) {
            button.classList.add('errored')
            setTimeout(() => {
                button.classList.remove('errored')
            }, 1000)
        }
    })
})`;
    return {
        name: "Copy In Frame",
        jsModules: [copyModule],
        baseStyles: ({ cssVar }) => {
            return `.copy-header {
    position:           relative;
    color:              ${cssVar("frames.editorActiveTabForeground")};
    background:         ${cssVar("frames.editorActiveTabBackground")};
    background-clip:    padding-box;
    margin-block-start: ${cssVar("frames.editorTabsMarginBlockStart")};
    padding:            calc(${cssVar("uiPaddingBlock")} + ${cssVar("frames.editorActiveTabIndicatorHeight")}) ${cssVar("uiPaddingInline")};
    border:             ${cssVar("borderWidth")} solid ${cssVar("frames.editorActiveTabBorderColor")};
    border-radius:      var(--tab-border-radius) var(--tab-border-radius) 0 0;
    border-bottom:      none;
    overflow:           hidden;
    cursor:             pointer;
    display:            flex;
    column-gap:         0.5rem;
    margin-left:        auto;
}
.copy-header:hover {
    color:             rgb(96 165 250 / 1);
}
.copy-header.copied {
    color: rgb(34 197 94 / 1);
}
.copy-header.errored {
    color: rgb(239 68 68 / 1);
}
.copy-header > svg > .check {
    display: none;
}
.copy-header.copied > svg > .check {
    display: block;
}
.copy-header > svg > .x {
    display: none;
}
.copy-header.errored > svg > .x {
    display: block;
}
`;
        },
        hooks: {
            postprocessRenderedBlock: ({ codeBlock, renderData }) => {
                const { blockAst } = renderData;
                const figCaption = blockAst.children[0];
                const codeToCopy = codeBlock.code.replace(/\n/g, "\u007f");
                const copyProps = {
                    "data-code": codeToCopy,
                };
                if (!("children" in figCaption)) {
                    return;
                }
                figCaption.children.push({
                    type: "element",
                    tagName: "button",
                    properties: {
                        className: ["copy-header copy"],
                        "aria-label": "Copy code block",
                        ...copyProps,
                    },
                    children: [
                        {
                            type: "element",
                            tagName: "svg",
                            properties: {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                style: "width:1.25rem;height:1.25rem;margin-top:auto;margin-bottom:auto;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;",
                            },
                            children: [
                                {
                                    type: "element",
                                    tagName: "rect",
                                    properties: {
                                        style: "width:8px;height:4px;x:8px;y:2px;rx:1px;ry:1px;",
                                    },
                                    children: [],
                                },
                                {
                                    type: "element",
                                    tagName: "path",
                                    properties: {
                                        d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
                                    },
                                    children: [],
                                },
                                {
                                    type: "element",
                                    tagName: "path",
                                    properties: {
                                        d: "m9 14 2 2 4-4",
                                        class: "check",
                                    },
                                    children: [],
                                },
                                {
                                    type: "element",
                                    tagName: "path",
                                    properties: { class: "x", d: "m15 11-6 6" },
                                    children: [],
                                },
                                {
                                    type: "element",
                                    tagName: "path",
                                    properties: { class: "x", d: "m9 11 6 6" },
                                    children: [],
                                },
                            ],
                        },
                    ],
                });
            },
        },
    };
};
