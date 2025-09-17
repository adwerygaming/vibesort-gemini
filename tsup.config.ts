import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/**/*.ts', "!src/**/node_modules/**", "!src/example/**"],
    outDir: 'dist',
    format: ['esm'],
    sourcemap: true,
    dts: true,
    clean: true,
    bundle: false,
    splitting: false
});
