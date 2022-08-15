import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  clean: true,
  declaration: true,
  externals: [
    'magic-string',
    'unocss',
  ],
  rollup: {
    emitCJS: true,
  },
})
