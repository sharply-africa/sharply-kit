import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src'],
  dts: true,
  treeshake: true,
  clean: true,
  minify: true,
  sourcemap: true,
  splitting: true,
  tsconfig: './tsconfig.json',
});
