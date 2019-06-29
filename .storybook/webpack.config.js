const path = require('path')

module.exports = async ({ config, mode }) => {
  const additionalRules = [
    {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    },
    {
      test: /\.(png|jpe?g|gif|svg|webp)$/,
      loader: 'url-loader',
      query: {
        limit: 1000,
        name: 'img/[name].[hash:7].[ext]'
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 1000,
        name: 'fonts/[name].[hash:7].[ext]'
      }
    }
  ]

  config.module.rules = config.module.rules.concat(additionalRules)

  config.resolve.alias.assets = path.resolve('../assets')
  config.resolve.alias['~'] = path.resolve(__dirname, '../')

  return config
}
