import { defineConfig } from 'vite';
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
    // plugins: [dts({ rollupTypes: true })],
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: 'dAgentSDK',
            formats: ["es", "cjs", "umd", "iife"],
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: [], // List any external dependencies to exclude from the bundle
            output: {
                globals: {
                    // Add global variable mappings for external dependencies here
                }
            }
        },
        sourcemap: true, // Generate sourcemaps for debugging
    }
});