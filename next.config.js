/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }
//
// module.exports = nextConfig

// const withAntdLess = require("next-plugin-antd-less");
//
// module.exports = withAntdLess({
//   lessVarsFilePath: "./styles/antd.less",
//   webpack(config) {
//     return config;
//   },
// });

const path = require("path");

const pathToLessFileWithVariables = path.resolve(
    "/styles/antd.less"
);

const withLess = require("next-with-less");
withLess.patchNext(require("next/dist/build/webpack/config/blocks/css"));

module.exports = withLess({
  reactStrictMode: true,
  lessLoaderOptions: {
    // it's possible to use additionalData or modifyVars for antd theming
    // read more @ https://ant.design/docs/react/customize-theme
    additionalData: (content) =>
        `${content}\n\n@import '${pathToLessFileWithVariables}';`,

    // lessOptions: {
    //   modifyVars: {
    //     "primary-color": "#9900FF"
    //   },
    // },
  },
});
