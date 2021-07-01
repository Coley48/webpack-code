import {
    cube
} from './math.js';
import "./style.css";
// import _ from "lodash"; // 会将整个依赖引入，即使未引用
// import join from "lodash/join"
// console.log(join([1, 2, 3], '-'));

function component() {
    const element = document.createElement('pre');

    element.innerHTML = [
        'Hello webpack!',
        '5 computed is equal to '
    ].join('\n\n');
    return element;
}

document.body.appendChild(component());