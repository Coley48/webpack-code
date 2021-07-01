const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

// 如果 webpack.config.js 存在，则 webpack 命令将默认选择使用它。
// console.log(__dirname, __filename);
// D:\webpack\test D:\webpack\test\webpack.config.js

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        })
    ],
    mode: 'none',
    // mode: 'production', // tree-shaking 在生产模式下启用
    optimization: {
        usedExports: true, // 未使用的导出内容不会被生成，用于清除模块中未引用的代码
        // minimize: true, // production 模式下默认开启；
        sideEffects: true, // 表示打包时跳过那些没有被使用的且被package.json标记为无副作用的模块，默认为 false
    },
};

// 如果所有代码都不包含副作用，我们就可以简单地将该属性标记为 false，来告知 webpack 它可以安全地删除未用到的 export。
// 如果被标记为无副作用的模块没有被直接导出使用，打包工具会跳过进行模块的副作用分析评估。

// 条件：1.生产模式；2.使用 ES6 module 导入导出模块；
// 注意：babel 编译会对 tree-shaking 产生副作用；https://zhuanlan.zhihu.com/p/32831172

// optmization.sideEffects : true
// webpack打包结果不会保留这些没有意义的「导入模块行为」的代码。
// webpack打包结果不会保留没有使用（导入）的模块。
// 开启后，webpack会去package.json中寻找sideEffects字段。
// package.json中的sideEffects字段表示，当前项目中的模块是否有副作用，默认为true。


// package.json的sideEffects：标识当前package.json所影响的项目，当中所有的代码是否有副作用
// 默认true，表示当前项目中的代码有副作用
// webpack配置文件中的sideEffects：开启功能，是否移除无副作用的代码
// 默认false，表示不移除无副作用的模块
// 在production模式下自动开启。

// https://juejin.cn/post/6978648939012554765