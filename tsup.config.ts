import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src'],
  splitting: true,
  sourcemap: true,
  clean: true,
  minify: true,
  dts: true,
  treeshake: true,
});
