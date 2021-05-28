const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// https://github.com/jantimon/html-webpack-plugin

// 如果 webpack.config.js 存在，则 webpack 命令将默认选择使用它。
// console.log(__dirname, __filename);
// D:\webpack\test D:\webpack\test\webpack.config.js

module.exports = {
    entry: {
        index: './src/index.js',
        print: './src/print.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // 清除 dist 目录
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hello',
            template: './src/index.html',
            // favicon: './src/favicon.ico'
        }),
    ],
};