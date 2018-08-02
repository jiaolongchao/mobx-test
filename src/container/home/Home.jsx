import * as React from "react";
import { Route,Link } from "react-router-dom";
import { renderRoutes } from 'react-router-config'


import { observable, action } from 'mobx';
import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { observer, PropTypes as ObservablePropTypes } from 'mobx-react';
// declare var $

class Store {
    @observable cache = { queue: [] }
    @action.bound refresh() {
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

export  class Foo extends Component {
    static propTypes = {
        cache: ObservablePropTypes.observableObject
    }
    render() {
        const cache = this.props.cache;
        return <div><button onClick={() => this.props.refresh()}>refresh</button><Bar queue={cache.queue} /></div>
    }
}

