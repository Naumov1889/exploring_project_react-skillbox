import React, {useEffect} from 'react';
import {hot} from 'react-hot-loader/root';
import './main.global.css'
import {Layout} from './shared/Layout';
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {PostsContextProvider} from "./shared/context/postsContext";

import {Action, applyMiddleware, createStore} from "redux";
import {Provider,} from 'react-redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk, {ThunkAction} from 'redux-thunk';
import {rootReducer, RootState} from "./store/reducer";
import {SET_TOKEN} from "./store/actions";


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
            <PostsContextProvider>
                <Layout>
                    <Header/>
                    <Content>
                        <CardsList/>
                    </Content>
                </Layout>
            </PostsContextProvider>
        </Provider>
    );
}

export const App = hot(() => <AppComponent/>);