// rollup.config.js
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'

export default {
  input: './src/main.ts',
  output: {
    file: './build/main.js',
    format: 'cjs',
  },
  plugins: [
    resolve({
      exportConditions: ['node'],
    }),
    commonjs(),
    typescript(),
  ],
}
