const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack-numbers.js',
        clean: true,
        // 暴露从入口导出的内容
        library: "webpackNumbers"
    },
};