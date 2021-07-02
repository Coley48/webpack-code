import _ from "lodash"
import "./style.css"
import background from './bg.jpg';
import Note from './note.xml';
import Data from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
    const element = document.createElement('div');

    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // 添加图片
    console.log(background); // http://127.0.0.1:5500/test/dist/8a90cc79488f27cee02f.jpg
    var myImage = new Image();
    myImage.src = background;
    element.appendChild(myImage);

    console.log(Data);
    console.log(Note);

    return element;
}

document.body.appendChild(component());