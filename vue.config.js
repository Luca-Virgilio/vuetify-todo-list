// module.exports = {
//   "transpileDependencies": [
//     "vuetify"
//   ]
// }
module.exports = {
  configureWebpack: {
      devServer: {
          clientLogLevel: 'info',
          watchOptions: {
              poll: true
          }
      }
  }
}