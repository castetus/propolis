// vue config
const path = require('path')
module.exports = {
  chainWebpack: config => {
    config.module.rule('pdf')
    .test(/\.pdf$/)
    .use('file-loader').loader('file-loader')
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  },
}

function addStyleResource (rule) {
rule.use('style-resource')
  .loader('style-resources-loader')
  .options({
    patterns: [
      path.resolve(__dirname, './src/scss/*.scss'),
    ],
  })
}
// module.exports = {
//   pluginOptions: {
//     'style-resources-loader': {
//       'preProcessor': 'scss',
//       'patterns': [
//         path.resolve(__dirname, './src/**/*.scss'),
//       ]
//     }
//   }
// }
// module.exports = {
//   pluginOptions: {
//     'style-resources-loader': {
//       preProcessor: 'scss',
//       patterns: []
//     }
//   }
// }
