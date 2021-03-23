import React, {useEffect, useState} from 'react';
import {hot} from 'react-hot-loader/root';
import './main.global.css'
import {Layout} from './shared/Layout';
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";

import {Action, applyMiddleware, createStore} from "redux";
import {Provider,} from 'react-redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk, {ThunkAction} from 'redux-thunk';
import {rootReducer, RootState} from "./store/reducer";
import {SET_TOKEN} from "./store/actions";
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import {Post} from "./shared/Post";
import {NoMatch} from "./shared/NoMatch";


export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
))

const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    const token = window.__token__ || localStorage.getItem('token');
    dispatch({type: SET_TOKEN, token: token});
    if (token) {
        localStorage.setItem('token', token);
    }
}

function AppComponent() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        store.dispatch<any>(saveToken());
    }, [])

    return (
        <Provider store={store}>
            {mounted && (
                <BrowserRouter>
                    <Layout>
                        <Header/>
                        <Content>
                            <Switch>
                                <Route exact path="/">
                                    <Redirect to="/posts/"/>
                                </Route>
                                <Route exact path="/auth/">
                                    <Redirect to="/posts/"/>
                                </Route>

                                <Route path="/posts/">
                                    <CardsList/>
                                    <Route path="/posts/:postId">
                                        <Post/>
                                    </Route>
                                </Route>
                                <Route>
                                    <NoMatch/>
                                </Route>
                            </Switch>
                        </Content>
                    </Layout>
                </BrowserRouter>
            )}
        </Provider>
    );
}

export const App = hot(() => <AppComponent/>);