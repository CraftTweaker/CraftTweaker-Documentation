import {
    type AnnotationRenderOptions,
    ExpressiveCodeAnnotation,
    type ExpressiveCodeInlineRange,
    type ExpressiveCodeLine,
    type ExpressiveCodePlugin,
    definePlugin,
} from "@expressive-code/core";

class RainbowAnnotation extends ExpressiveCodeAnnotation {
    static DARK_MODE_COLORS = [
        "E8BA36",
        "54A857",
        "359FF4",
        "6E7ED9",
        "179387",
        "A5BE00",
        "005FA3",
        "DB7100",
        "FFC666",
        "38FF91",
    ];

    static LIGHT_MODE_COLORS = [
        //TODO get better colors!
        "3F9101",
        "0E4A8E",
        "B4960A",
        "BC0BA2",
        "61AA0D",
        "3D017A",
        "D6A60A",
        "7710A3",
        "A502CE",
        "eb5a00",
    ];

    depth: number;

    constructor(inlineRange: ExpressiveCodeInlineRange, depth: number) {
        super({ inlineRange });
        this.depth = depth;
    }

    render({ nodesToTransform }: AnnotationRenderOptions) {
        return nodesToTransform.map((node) => {
            if (!("properties" in node)) {
                return node;
            }
            return {
                ...node,
                properties: {
                    ...node.properties,
                    style: `--0:#${RainbowAnnotation.DARK_MODE_COLORS[this.depth % RainbowAnnotation.DARK_MODE_COLORS.length]};--1:#${RainbowAnnotation.LIGHT_MODE_COLORS[this.depth % RainbowAnnotation.LIGHT_MODE_COLORS.length]}`,
                },
            };
        });
    }
}

type BracketType = "round" | "square" | "angle" | "squiggle";

export default (): ExpressiveCodePlugin => {
    return definePlugin({
        name: "Rainbow-Brackets",
        hooks: {
            preprocessCode: ({ codeBlock }) => {
                const depths: Record<BracketType, number> = {
                    round: 0,
                    square: 0,
                    angle: 0,
                    squiggle: 0,
                };

                function push(
                    line: ExpressiveCodeLine,
                    index: number,
                    type: BracketType,
                ) {
                    line.addAnnotation(
                        new RainbowAnnotation(
                            {
                                columnStart: index,
                                columnEnd: index + 1,
                            },
                            depths[type]++,
                        ),
                    );
                }

                function pop(
                    line: ExpressiveCodeLine,
                    index: number,
                    type: BracketType,
                ) {
                    line.addAnnotation(
                        new RainbowAnnotation(
                            {
                                columnStart: index,
                                columnEnd: index + 1,
                            },
                            --depths[type],
                        ),
                    );
                }

                for (const line of codeBlock.getLines()) {
                    for (let i = 0; i < line.text.length; i++) {
                        const char = line.text.charAt(i);
                        switch (char) {
                            case "/":
                                if (line.text.charAt(i + 1) === "/") {
                                    return;
                                }
                                break;
                            case "{":
                                push(line, i, "squiggle");
                                break;
                            case "}":
                                pop(line, i, "squiggle");
                                break;
                            case "(":
                                push(line, i, "round");
                                break;
                            case ")":
                                pop(line, i, "round");
                                break;
                            case "<":
                                push(line, i, "angle");
                                break;
                            case ">":
                                pop(line, i, "angle");
                                break;
                            case "[":
                                push(line, i, "square");
                                break;
                            case "]":
                                pop(line, i, "square");
                                break;
                        }
                    }
                }
            },
        },
    });
};
