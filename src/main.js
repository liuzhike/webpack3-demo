import _ from 'lodash';
import './assets/scss/style.css';
import './assets/scss/style.scss';
import Icon from './assets/images/logo.png';
import sub from './sub.js';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    var elhtml = [];
    var html = '';

    html += '<h1>Hello webpack demo</h1>'+
            '<div>'+'<img src="'+Icon+'">'+'</div>'+
            '<p class="text">'+"我是一个段落！"+'</p>';
    elhtml.push(html);
    element.innerHTML = _.join(elhtml, ' ');
    element.classList.add('hello');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = sub;
    element.appendChild(btn);

    return element
}

document.body.appendChild(component());