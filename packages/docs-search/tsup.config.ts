import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts", "src/generate.ts"],
    format: ["esm"],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    tsconfig: "tsconfig.json",
});
