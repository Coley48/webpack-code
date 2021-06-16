const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 项目地址： https://github.com/jantimon/html-webpack-plugin

// 如果 webpack.config.js 存在，则 webpack 命令将默认选择使用它。
// console.log(__dirname, __filename);
// D:\webpack\test D:\webpack\test\webpack.config.js

module.exports = {
    entry: {
        index: './src/index.js',
        print: './src/print.js',
    },
    output: {
        // 开发环境中并不需要用到
        // [fullhash] / [chunkhash] / [contenthash]
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // 生产模式可以关闭 source-map，开发模式中在大多数情况下的最佳选择
    devtool: 'eval-cheap-module-source-map',
    module: {
        rules: [{
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'), // 使用 include 字段仅将 loader 应用在实际需要将其转换的模块；
                loader: 'babel-loader', // 应当最小化项目中的 preset/plugin 数量
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true, // 关闭类型检查
                },
                // 或使用插件进行类型检查
                // https://github.com/TypeStrong/ts-loader/tree/main/examples/fork-ts-checker-webpack-plugin
            }
        ],
    },
    // 每个额外的 loader/plugin 都有其启动时间，应尽量少地使用工具。
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        })
    ],
    resolve: {
        // 减少 resolve.modules, resolve.extensions, resolve.mainFiles, resolve.descriptionFiles 中条目数量，因为他们会增加文件系统调用的次数。
        // 如果你不使用 symlinks（例如 npm link 或者 yarn link），可以设置 resolve.symlinks: false。
        symlinks: false,

    },
    optimization: {
        // 为运行时代码创建了一个额外的 chunk，所以它的生成代价较低：
        runtimeChunk: true,
        // 在多页面应用程序中使用 SplitChunksPlugin， 并开启 async 模式，减小 chunk 体积，以提高构建性能。
        // splitChunksPlugin 默认配置
        splitChunks: {
            chunks: 'async', // 对哪些块进行优化，all | async | initial，
            minSize: 20000, // 生成 chunk 的最小体积（以 bytes 为单位）。
            minRemainingSize: 0,
            minChunks: 1, // 拆分前必须共享模块的最小 chunks 数。
            maxAsyncRequests: 30, // 按需加载时的最大并行请求数。
            maxInitialRequests: 30, // 入口点的最大并行请求数。
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    },
};