import React, {useEffect, useState} from 'react';
import {hot} from 'react-hot-loader/root';
import './main.global.css'
import {Layout} from './shared/Layout';
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {UserContextProvider} from "./shared/context/userContext";
import {PostsContextProvider} from "./shared/context/postsContext";

import {Action, applyMiddleware, createStore} from "redux";
import {rootReducer, RootState, SET_TOKEN} from "./store";
import {Provider,} from 'react-redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk, {ThunkAction} from 'redux-thunk';


export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
))

const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    const token = window.__token__;
    dispatch({type: SET_TOKEN, token: token})
}

function AppComponent() {
    useEffect(() => {
        store.dispatch<any>(saveToken());
    }, [])

    return (
        <Provider store={store}>
            <UserContextProvider>
                <PostsContextProvider>
                    <Layout>
                        <Header/>
                        <Content>
                            <CardsList/>
                        </Content>
                    </Layout>
                </PostsContextProvider>
            </UserContextProvider>
        </Provider>
    );
}

export const App = hot(() => <AppComponent/>);