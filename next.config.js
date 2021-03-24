/* eslint-disable */
const fs = require("fs");
const path = require("path");
const lessToJS = require("less-vars-to-js");
const withLessExcludeAntd = require("./next-less.config.js");

// choose your own modifyVars
const modifyVars = lessToJS(
  fs.readFileSync(path.resolve(__dirname, "./styles/antd.less"), "utf8")
);

// Antd less files
if (typeof require !== "undefined") {
  require.extensions[".less"] = (file) => {};
}

module.exports = withLessExcludeAntd({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars,
  },
});
