#!/usr/bin/env node
const { build } = require('esbuild')
const cssModulesPlugin = require('esbuild-css-modules-plugin')

build({
  logLevel: 'info',
  entryPoints: ['src/Dashboard.tsx'],
  bundle: true,
  minify: true,
  format: 'esm',
  sourcemap: true,
  jsx: 'automatic',
  target: ['esnext'],
  outdir: 'dist',
  plugins: [
    cssModulesPlugin({
      localsConvention: 'camelCaseOnly',
      localIdentName: '[name]-[local]-[hash:8:md5:hex]'
    })
  ]

})
