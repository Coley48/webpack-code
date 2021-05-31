const path = require('path');

// 如果 webpack.config.js 存在，则 webpack 命令将默认选择使用它。
// console.log(__dirname, __filename);
// D:\webpack\test D:\webpack\test\webpack.config.js

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        // 动态模块导入的共享模块配置
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    // 值为all时，import动态导入的模块也会被打包的共享部分代码文件里,值为async时只会共享异步的模块，initial时只共享同步的模块
                    chunks: "all",
                },
            },
        },
    }
};