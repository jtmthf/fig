import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: true },
    { file: pkg.module, format: 'es', sourcemap: true },
    {
      name: 'CommonInterfaces',
      file: pkg.unpkg,
      format: 'umd',
      sourcemap: true,
    },
  ],
  plugins: [typescript({ tsconfig: './tsconfig.build.json' })],
};
