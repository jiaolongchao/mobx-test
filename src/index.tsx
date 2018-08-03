import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'mobx-react';
import { AppContainer } from 'react-hot-loader';
import { Main } from "./container/Main";

export class App {
    constructor() {
        this.init();
    }
    init() {
        ReactDOM.render(
            <Provider>
                <AppContainer>
                    <Main />
                </AppContainer>
            </Provider>,
            document.getElementById('root')
        );
    }
}
new App();