const path = require("path");

module.exports = {
  entry: [path.join(__dirname, "/src/index.ts")],
  devtool: "inline-source-map",
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    library: "ts",
    libraryTarget: "umd",
    filename: "bundle.js",
    path: path.resolve(__dirname, "src")
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  mode: "development"
};
