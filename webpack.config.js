const path = require('path');

// 要使用 env 变量，你必须将 module.exports 转换成一个函数：
module.exports = (env) => {
    // Use env.<YOUR VARIABLE> here:
    console.log('Goal: ', env.goal); // 'local'
    console.log('Output: ', env.output); // dist
    console.log('Production: ', env.production); // true

    return {
        entry: './src/index.js',
        output: {
            filename: `${env.goal}.bundle.js`,
            path: path.resolve(__dirname, env.output),
            clean: true,
        },
    };
};