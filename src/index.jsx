/*function Animal() { }
function Dog() { }

Object.defineProperties(Animal.prototype, {
    name: {
        value() {
            return 'Animal';
        }
    },
    say: {
        value() {
            return `im ${this.name()}`
        }
    }
})

//dog instanceof Animal => true
//dog.__proto__.__proto__=== Animal.prototype
//dog.__proto__ = Dog.prototype
//Dog.prototype.__proto__ = Animal.protptype

Dog.prototype = Object.create(Animal.prototype, {
    consturctor: {
        value: Dog,
        enumerable: false
    },
    name: {
        value() {
            return 'Dog'
        }
    }
});
document.write(new Dog().say())
*/

/*class Animal {
    name() {
        return 'Animal'
    }
    say() {
        return `im ${this.name()}`
    }
}
class Dog extends Animal {
    //food = 'bone';
    name() {
        return 'Dog'
    }
}

console.log(new Dog() instanceof Animal)*/


//decorator修饰器 是在声明阶段实现类与类成员注解的一种语法

/*function log(target) {
    const desc = Object.getOwnPropertyDescriptors(target.proptype); //获取所有的成员签名
    for (const key of Object.keys(desc)) { //获取所有的名称
        if (key === 'constructor') {
            continue;
        }

        const func = desc[key].value;
        if ('function' === typeof func) {
            Object.defineProperty(target.prototy, key, {
                value(...args) {
                    console.log('before' + key);
                    const ret = func.apply(this, args);
                    console.log('after' + key);

                    return ret;
                }
            })
        }

    }
}*/


//@log
/*
class Numberic { 
    //PI = 3.1415926;
    add(...nums) {
        return nums.reduce((p, n) => (p + n), 0)
    }
}
*/

/*
import React from "react";
import { render } from "react-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import DevTools from "mobx-react-devtools";

class AppState {
    @observable timer = 0;

    constructor() {
        setInterval(() => {
            this.timer += 1;
        }, 1000);
    }

    @action.bound
    reset() {
        this.timer = 0;
    }
}

const TimerView = observer(({ appState }) => (
    <button onClick={appState.reset}>Seconds passed: {appState.timer}</button>
));

render(
    <div>
        <TimerView appState={new AppState()} />
    </div>,
    document.getElementById("root")
);

*/

//只展示数据而不修改数据是体现不出来mobx的强大的 建议吧可观察的数据都封装在action中

import { observable, action } from 'mobx';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import {observer,PropTypes as ObservablePropTypes} from 'mobx-react';


class Store {
    @observable cache = { queue: [] }
    @action.bound refresh(){
        this.cache.queue.push(1)
    }
}

const store = new Store();

@observer
class Bar extends Component {
    static propTypes = {
        queue: ObservablePropTypes.observableArray //使用mobx-react中自定义的类型
    };
    render() {
        const queue = this.props.queue;
        return <span>
            {queue.length}
        </span>
    }
}

class Foo extends Component {
    static propTypes = {
        cache: ObservablePropTypes.observableObject
    }
    render() {
        const cache = this.props.cache;
        return <div><button onClick={res=>this.props.refresh()}>refresh</button><Bar queue={cache.queue} /></div>
    }
}

ReactDom.render(<Foo cache={store.cache}  refresh = {store.refresh}/>, document.querySelector('#root'))

