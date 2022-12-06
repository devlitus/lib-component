import { buildSync } from 'esbuild'

buildSync({
  logLevel: 'info',
  entryPoints: ['src/Header.jsx'],
  outbase: 'src',
  bundle: true,
  minify: true,
  format: 'esm',
  jsx: 'automatic',
  outdir: 'dist',
  sourcemap: true,
  color: true,
  outExtension: { '.css': '.css' },
  target: ['es2020', 'chrome58', 'firefox57', 'safari11']

})
