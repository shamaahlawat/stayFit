import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';
import Home from "./modules/Home";
import MainPage from './modules/main_page';
import AppContainer from "./modules/app_container";

import 'antd/dist/antd.css';

ReactGA.initialize("ga-0008-your-id");

function logPageView() {
    ReactGA.pageview(window.location.pathname + window.location.search);
}

export default class Root extends Component {
    render() {
        const { store, history } = this.props;
        return (
            <Provider store={store}>
                <ConnectedRouter history={history} onChange={logPageView}>
                    <Switch>
                        <AppContainer path="/" history={history}>
                            <Switch>
                                <Route path="/">
                                    <Switch>
                                        <Route exact path="/" component={Home} />
                                        <Route exact path="/main_page" component={MainPage} />
                                    </Switch>
                                </Route>
                            </Switch>
                        </AppContainer>
                    </Switch>
                </ConnectedRouter>
            </Provider>
        );
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};
