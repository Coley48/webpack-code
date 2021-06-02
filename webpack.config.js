const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js',
        // test: './src/test.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true,
        // 暴露从入口导出的内容
        // library: "webpackNumbers" // 只能通过 script 标签引入调用
        library: {
            name: 'webpackNumbers',
            type: 'umd',
        },
    },
    // 外部化依赖
    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_',
        },
    },
};

// 发布library
// 添加 package.json 字段，https://docs.npmjs.com/cli/v7/configuring-npm/package-json 或 https://github.com/dherman/defense-of-dot-js/blob/master/proposal.md
// https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry