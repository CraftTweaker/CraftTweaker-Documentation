const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                neutral: {
                    ...colors.neutral,
                    150: "#F0F0F0",
                    250: "#D9D9D9",
                    350: "#BDBDBD",
                    450: "#8C8C8C",
                    550: "#636363",
                    650: "#464646",
                    750: "#343434",
                    850: "#1E1E1E",
                },
                zinc: {
                    ...colors.zinc,
                    150: "#ECECEE",
                    250: "#DCDCE0",
                    350: "#BBBBC1",
                    450: "#898992",
                    550: "#62626B",
                    650: "#494951",
                    750: "#333338",
                    825: "#242427",
                    850: "#202023",
                },
            },
            width: {
                content: "calc(100vw - (100vw - 100%) - 20rem)",
            },
        },
    },
    plugins: [
        plugin(({ addUtilities, theme }) => {
            const newUtilities = {
                "@supports (-moz-appearance:none)": {
                    ".sb-custom": {
                        "scrollbar-width": "thin",
                        "scrollbar-color": "#2A6B8D #404040",
                    },
                },
                ".sb-custom": {
                    "&::-webkit-scrollbar": {
                        width: "0.5rem",
                        height: "0.5rem",
                    },
                    "&::-webkit-scrollbar-track": {
                        "border-radius": "0",
                        "background-color": "#404040",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        "border-radius": "0",
                        "background-color": "#2A6B8D",
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                        "background-color": "#3588B3",
                    },
                    "&::-webkit-scrollbar-thumb:active": {
                        "background-color": "#68ADD2",
                    },
                },
            };

            addUtilities(newUtilities);
        }),
    ],
};
