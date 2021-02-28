import React, {useEffect, useState} from 'react';
import {hot} from 'react-hot-loader/root';
import './main.global.css'
import {Layout} from './shared/Layout';
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {useToken} from "./shared/hooks/useToken";
import {tokenContext} from "./shared/context/tokenContext";
import {UserContextProvider} from "./shared/context/userContext";
import {PostsContextProvider} from "./shared/context/postsContext";

import {createStore} from "redux";
import {rootReducer} from "./store";
import {Provider} from 'react-redux';
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());


function AppComponent() {
    const [token] = useToken();

    return (
        <Provider store={store}>
            <tokenContext.Provider value={token}>
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
            </tokenContext.Provider>
        </Provider>
    );
}

export const App = hot(() => <AppComponent/>);