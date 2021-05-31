/**
 * 同步加载 lodash.js
 * 输出 index.bundle.js(lodash)
 */
// import _ from 'lodash'
// console.log(_.join(['Hello', 'webpack'], ' '));

/**
 * 异步加载 lodash.js， 并命名为 myLodash
 * 输出 index.bundle.js myLodash.bundle.js
 */

// function getComponent() {
//     return import( /* webpackChunkName: "myLodash" */ 'lodash')
//         .then(({
//             default: _
//         }) => {
//             const element = document.createElement('div');

//             element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//             return element;
//         })
//         .catch((error) => 'An error occurred while loading the component');
// }

// 使用 async 方式异步加载 lodash.js
async function getComponent() {
    const element = document.createElement('div');

    const {
        default: _
    } = await import( /* webpackChunkName: "myLodash" */ 'lodash');
    element.innerHTML = _.join(['Hello', 'webpack', '-2'], ' ');

    return element;
}

getComponent().then((component) => {
    document.body.appendChild(component);
});

/**
 * 同步加载 jquery.js
 * 输出 index.bundle.js(jquery)
 */
// import $ from 'jquery'
// $('body').append(`<div>Hey, I'm Coley48</div>`);


/**
 * 异步加载 jquery
 * 输出 index.bundle.js vendors-node_modules_jquery_dist_jquery_js.bundle.js
 */
import("jquery").then(({
    default: $
}) => {
    $('body').append(`<div>Hey, I'm Coley48 async</div>`);
})


// lodash+jquery 两个模块
// ----------------------------------------------------->
/**
 * 同步lodash + 异步jquery
 * 输出 index.bundle.js(lodash) vendors-node_modules_jquery_dist_jquery_js.bundle.js
 */

/**
 * 同步lodash + 同步jquery
 * 输出 index.bundle.js(lodash+jquery)
 */

/**
 * 异步lodash + 异步jquery
 * 输出 index.bundle.js myLodash.bundle.js vendors-node_modules_jquery_dist_jquery_js.bundle.js
 */

// 添加 webpack 配置 optimization.splitChunks.cacheGroups
// ------------------------------------------------------>
/**
 * 异步lodash + 异步jquery
 * chunks: 'all' -> index.bundle.js vendors.bundle.js(lodash+jquery)
 * chunks: 'async' -> index.bundle.js vendors.bundle.js(lodash+jquery)
 * chunks: 'initial' -> index.bundle.js myLodash.bundle.js vendors-node_modules_jquery_dist_jquery_js.bundle.js
 */

/**
 * 同步lodash + 异步jquery
 * chunks: 'all' -> index.bundle.js vendors.bundle.js(lodash+jquery)
 * chunks: 'async' -> index.bundle.js(lodash) vendors.bundle.js(jquery)
 * chunks: 'initial' -> index.bundle.js vendors.bundle.js(lodash) vendors-node_modules_jquery_dist_jquery_js.bundle.js
 */

/**
 * 同步lodash + 同步jquery
 * chunks: 'all' -> index.bundle.js vendors.bundle.js(lodash+jquery)
 * chunks: 'async' -> index.bundle.js(lodash+jquery)
 * chunks: 'initial' -> index.bundle.js vendors.bundle.js(lodash+jquery)
 */

// 同步的块默认会被打包到 index.bundle.js
// 异步的块默认会被分别打包到不同的包中
// chunks: "all" 将同步异步模块都抽离打包到一起
// chunks: "async" 只将异步模块抽离打包到一起
// chunks: "initial" 只将同步模块抽离打包到一起

// 参考资料
// https://blog.csdn.net/weixin_35958891/article/details/108884822
// https://blog.csdn.net/kaimo313/article/details/107168460?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_title-5&spm=1001.2101.3001.4242