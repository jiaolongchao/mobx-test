
import * as React from "react";
import { renderRoutes } from 'react-router-config'
import { Switch } from 'react-router-dom'
import routes from './router'
import { observer } from "mobx-react";

//let { match, route } = this.props  {renderRoutes(route.childRoutes)}
//有嵌套子路由的情况下，不能加exact

@observer
export class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        return (
                <Switch>
                    {renderRoutes(routes)}
                </Switch>
        )
        
    }
}