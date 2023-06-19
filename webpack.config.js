const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
var JavaScriptObfuscator = require("webpack-obfuscator");
module.exports = {
  entry: {
    path: "./src/main.js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images-all/[hash][ext]",
        },
      },
    ],
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm-bundler.js",
      "@": path.resolve("src"),
    },
  },
  output: {
    filename: "assets/inAjs/all[hash].js",
    path: path.resolve(__dirname, "./dist"),
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
      favicon: "./src/assets/logo.png",
    }),
    new DefinePlugin({
      __VUE_PROD_DEVTOOLS__: false,
      __VUE_OPTIONS_API__: false,
    }),
    // new JavaScriptObfuscator(
    //   {
    //     compact: true,
    //     controlFlowFlattening: true,
    //     controlFlowFlatteningThreshold: 0.75,
    //     numbersToExpressions: true,
    //     simplify: true,
    //     stringArrayShuffle: true,
    //     splitStrings: true,
    //     splitStringsChunkLength: 10,
    //     rotateUnicodeArray: true,
    //     deadCodeInjection: true,
    //     deadCodeInjectionThreshold: 0.4,
    //     debugProtection: false,
    //     debugProtectionInterval: 2000,
    //     disableConsoleOutput: true,
    //     domainLock: [],
    //     identifierNamesGenerator: "hexadecimal",
    //     identifiersPrefix: "",
    //     inputFileName: "",
    //     log: true,
    //     renameGlobals: true,
    //     reservedNames: [],
    //     reservedStrings: [],
    //     seed: 0,
    //     selfDefending: true,
    //     sourceMap: false,
    //     sourceMapBaseUrl: "",
    //     sourceMapFileName: "",
    //     sourceMapMode: "separate",
    //     stringArray: true,
    //     stringArrayEncoding: ["base64"],
    //     stringArrayThreshold: 0.75,
    //     target: "browser",
    //     transformObjectKeys: true,
    //     unicodeEscapeSequence: true,

    //     domainLockRedirectUrl: "about:blank",
    //     forceTransformStrings: [],
    //     identifierNamesCache: null,
    //     identifiersDictionary: [],
    //     ignoreImports: true,
    //     optionsPreset: "default",
    //     renameProperties: false,
    //     renamePropertiesMode: "safe",
    //     sourceMapSourcesMode: "sources-content",

    //     stringArrayCallsTransform: true,
    //     stringArrayCallsTransformThreshold: 0.5,

    //     stringArrayIndexesType: ["hexadecimal-number"],
    //     stringArrayIndexShift: true,
    //     stringArrayRotate: true,
    //     stringArrayWrappersCount: 1,
    //     stringArrayWrappersChainedCalls: true,
    //     stringArrayWrappersParametersMaxCount: 2,
    //     stringArrayWrappersType: "variable",
    //   },
    //   []
    // ),
  ],
};
