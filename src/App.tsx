import React, {useEffect, useState} from 'react';
import {hot} from 'react-hot-loader/root';
import './main.global.css'
import {Layout} from './shared/Layout';
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {UserContextProvider} from "./shared/context/userContext";
import {PostsContextProvider} from "./shared/context/postsContext";

import {createStore} from "redux";
import {rootReducer, setToken} from "./store";
import {Provider,} from 'react-redux';
import {composeWithDevTools} from "redux-devtools-extension";

export const store = createStore(rootReducer, composeWithDevTools());


function AppComponent() {
    useEffect(() => {
        const token = window.__token__;
        store.dispatch(setToken(token));
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