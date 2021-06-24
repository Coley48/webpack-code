const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// https://github.com/jantimon/html-webpack-plugin

// 如果 webpack.config.js 存在，则 webpack 命令将默认选择使用它。
// console.log(__dirname, __filename);
// D:\webpack\test D:\webpack\test\webpack.config.js

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // 清除 dist 目录
        clean: true,
        publicPath: '/',
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }, ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './src/index.html',
            // favicon: './src/favicon.ico'
        }),
    ],
    // 模块热替换(hot module replacement 或 HMR)允许在运行时更新所有类型的模块，而无需完全刷新。
    // 只用于开发环境；
    devServer: {
        contentBase: './dist', // 资源位置
        hot: true,
        port: 8000,
    },
};