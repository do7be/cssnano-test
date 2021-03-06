module.exports = {
  context: __dirname + '/src',
  entry: {
    'index': './',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query:{
          presets: ['latest']
        }
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
    ]
  },
  node: {
    fs: "empty"
  }
};

