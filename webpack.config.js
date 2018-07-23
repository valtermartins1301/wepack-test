module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/bundle.js'
  },
  mode: 'production',
  watch: true,
  module: {
    rules: [
    {
      test: /\.css$/,
      use: [
        { loader: "style-loader" },
        { loader: "css-loader" }
      ]
    },{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }]
  }
};
