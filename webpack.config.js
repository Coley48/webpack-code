const path = require('path');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

// 如果 webpack.config.js 存在，则 webpack 命令将默认选择使用它。
// console.log(__dirname, __filename);
// D:\webpack\test D:\webpack\test\webpack.config.js

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        // 模块 loader 可以链式调用。链中的每个 loader 都将对资源进行转换。链会逆序执行。
        // 第一个 loader 将其结果（被转换后的资源）传递给下一个 loader，依此类推。
        // 最后，webpack 期望链中的最后的 loader 返回 JavaScript。
        rules: [{
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },

            // webpack 4 需要使用file-loader
            // webpack 5 内置了加载图片的模块
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            }, {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
            {
                test: /\.toml$/i,
                type: 'json',
                parser: {
                    parse: toml.parse,
                },
            }, {
                test: /\.yaml$/i,
                type: 'json',
                parser: {
                    parse: yaml.parse,
                },
            }, {
                test: /\.json5$/i,
                type: 'json',
                parser: {
                    parse: json5.parse,
                },
            },
        ],

    },
};

// Webpack 5
// asset/resource 发送一个单独的文件并导出 URL。之前通过使用 file-loader 实现。
// asset/inline 导出一个资源的 data URI。之前通过使用 url-loader 实现。
// asset/source 导出资源的源代码。之前通过使用 raw-loader 实现。
// asset 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 url-loader，并且配置资源体积限制实现。