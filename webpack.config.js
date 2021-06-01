const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js',
        test: './src/test.js'
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
};