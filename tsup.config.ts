import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  external: ['react', 'react-dom'],
  format: ['cjs', 'esm'],
  minify: true,
  sourcemap: true,
  splitting: false,
  treeshake: true,
  target: 'es5',
});
