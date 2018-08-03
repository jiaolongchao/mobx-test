// import * as React from "react";
// import { Route,Link } from "react-router-dom";
// import { renderRoutes } from 'react-router-config'


// import { Component } from 'react';
// import ReactDom from 'react-dom';
// import PropTypes from 'prop-types';
// // declare var $

// class Store {
//     @observable cache = { queue: [] }
//     @action.bound refresh() {
//         this.cache.queue.push(1)
//     }
// }

// const store = new Store();


// class Bar extends Component {
//     static propTypes = {
//         queue: ObservablePropTypes.observableArray //使用mobx-react中自定义的类型
//     };
//     render() {
//         const queue = this.props.queue;
//         return <span>
//             {queue.length}
//         </span>
//     }
// }

// export  class Foo extends Component {
//     static propTypes = {
//         cache: ObservablePropTypes.observableObject
//     }
//     render() {
//         const cache = this.props.cache;
//         return <div><button onClick={() => this.props.refresh()}>refresh</button><Bar queue={cache.queue} /></div>
//     }
// }

import * as React from "react";

export default class Home extends React.Component<any, any> {
    public constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    public render() {       
        return (
            <div>
                aaaaaaaa
            </div >
        )
    }
}
