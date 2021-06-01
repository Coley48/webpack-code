const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// https://github.com/jantimon/html-webpack-plugin

// 如果 webpack.config.js 存在，则 webpack 命令将默认选择使用它。
// console.log(__dirname, __filename);
// D:\webpack\test D:\webpack\test\webpack.config.js

module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        // 可替换模板字符串，占位符
        // [contenthash] substitution 将根据资源内容创建出唯一 hash。当资源内容发生变化时，[contenthash] 也会发生变化。
        filename: '[name].[contenthash:8].js',
        path: path.resolve(__dirname, 'dist'),
        // 清除 dist 目录
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Caching',
            template: './src/index.html',
            // favicon: './src/favicon.ico'
        }),
    ],
    optimization: {
        // 固定模块id
        moduleIds: 'deterministic',
        // 将 runtime 代码拆分为一个单独的 runtime chunk
        runtimeChunk: "single",
        // 将第三方库提取到 vendors chunk
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    }
};