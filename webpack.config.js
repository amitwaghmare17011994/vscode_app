const path = require("path");

module.exports = {
  mode: "development",
  watch: true,
  
  entry: {
    app: "./src/index.js",
  },
node: {
   fs: "empty"
}
,
  output: {
    filename: "bundle.js",
    filename: "[name].bundle.js",
    path: path.resolve(__dirname),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
