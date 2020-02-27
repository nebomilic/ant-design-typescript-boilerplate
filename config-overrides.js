// eslint-disable-next-line @typescript-eslint/no-var-requires
const { override, fixBabelImports, addLessLoader } = require('customize-cra')
const path = require('path')
// eslint-disable-next-line no-undef
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      hack: `true; @import "${path.resolve(__dirname, './src/theme.less')}";`,
    },
  })
)
