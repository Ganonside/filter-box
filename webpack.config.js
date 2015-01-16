var webpack = require('webpack');

module.exports = {
  entry: {
    Filterbox: "./src/main.js"
  },
  output: {
    libraryTarget: "var",
    library: "FilterBox",
    path: './build',
    filename: "[name].js"
  },
  externals: {
    "jquery": "jQuery",
    "react": "React"
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.(?:css|less)$/, loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.(?:js|jsx)$/, loader: "6to5-loader"
    }]
  }
};
