// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   reactStrictMode: true,
// // }
// //
// // module.exports = nextConfig
// //
// // // const withAntdLess = require("next-plugin-antd-less");
// // // module.exports = withAntdLess({
// // //     // modifyVars: {
// // //     //     "primary-color": "#ed2027",
// // //     //     "font-family": "IRANYekan, Roboto, Helvetica Neue, sans-serif"
// // //     // },
// // //     lessVarsFilePath: "./styles/antd.less",
// // //     webpack(config) {
// // //         return config;
// // //     },
// // // });
// //
// // // const path = require("path");
// // //
// // // const pathToLessFileWithVariables = path.resolve(
// // //     "/styles/antd.less"
// // // );
// // //
// // // const withLess = require("next-with-less");
// // // withLess.patchNext(require("next/dist/build/webpack/config/blocks/css"));
// // //
// // // module.exports = withLess({
// // //   // reactStrictMode: true,
// // //   lessLoaderOptions: {
// // //     // it's possible to use additionalData or modifyVars for antd theming
// // //     // read more @ https://ant.design/docs/react/customize-theme
// // //     // additionalData: (content) =>
// // //     //     `${content}\n\n@import '${pathToLessFileWithVariables}';`,
// // //
// // //     // lessOptions: {
// // //     //   modifyVars: {
// // //     //     "primary-color": "#ed2027",
// // //     //     "font-family": "IRANYekan, Roboto, Helvetica Neue, sans-serif"
// // //     //   },
// // //     //   javascriptEnabled: true,
// // //     // },
// // //   },
// // // });
// const withTypescript = require("@zeit/next-typescript");
// const withCss = require("@zeit/next-css");
// const withSass = require('@zeit/next-sass')
// const withLess = require('@zeit/next-less')
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
//
// module.exports =
//     withTypescript(
//         withCss(
//             withSass({
//               cssModules: true,
//               ...withLess({
//                 dir: "src",
//                 distDir: "../build",
//                 cssLoaderOptions: {
//                   importLoaders: 1,
//                   localIdentName: "[folder]_[local]___[hash:base64:5]",
//                 },
//                 lessLoaderOptions: {
//                   javascriptEnabled: true
//                 },
//                 webpack(config, options) {
//                   if (options.isServer) {
//                     config.plugins.push(new ForkTsCheckerWebpackPlugin({
//                       tsconfig: '../tsconfig.json',
//                     }))
//
//                     const antStyles = /antd\/.*?\/style.*?/
//                     const origExternals = [...config.externals]
//                     config.externals = [
//                       (context, request, callback) => {
//                         if (request.match(antStyles)) return callback()
//                         if (typeof origExternals[0] === 'function') {
//                           origExternals[0](context, request, callback)
//                         } else {
//                           callback()
//                         }
//                       },
//                       ...(typeof origExternals[0] === 'function' ? [] : origExternals),
//                     ]
//
//                     config.module.rules.unshift({
//                       test: antStyles,
//                       use: 'null-loader',
//                     })
//                   }
//
//                   return config;
//                 }
//               })
//             })
//         )
//     );

/* eslint-disable */
const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  modifyVars: { '@primary-color': '#04f' }, // optional
  lessVarsFilePath: './styles/antd.less', // optional
  lessVarsFilePathAppendToEndOfContent: false, // optional
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {
    // ...
    mode: "local",
    localIdentName: "[local]--[hash:base64:4]" , // invalid! for Unify getLocalIdent (Next.js / CRA), Cannot set it, but you can rewritten getLocalIdentFn
    exportLocalsConvention: "camelCase",
    exportOnlyLocals: false,
    // ...
    getLocalIdent: (context, localIdentName, localName, options) => {
      return "whatever_random_class_name";
    },
  },

  // for Next.js ONLY
  nextjs: {
    localIdentNameFollowDev: true, // default false, for easy to debug on PROD mode
  },

  // Other Config Here...

  webpack(config) {
    return config;
  },

  // ONLY for Next.js 10, if you use Next.js 11, delete this block
  future: {
    webpack5: true,
  },
});