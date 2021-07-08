const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const {
    merge
} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css",
            attributes: {
                id: "target",
                "data-target": "example",
            },
        }),
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        }, ],
    },
    optimization: {
        splitChunks: {
            // 默认根据入口文件分别提取到不同的文件，可以将 css 提取到一个文件
            // cacheGroups: {
            //     styles: {
            //         name: "styles",
            //         type: "css/mini-extract",
            //         // For webpack@4
            //         // test: /\.css$/,
            //         chunks: "all",
            //         enforce: true,
            //     },
            // },
        },
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            `...`,
            // new CssMinimizerPlugin(),
        ],
    },
});