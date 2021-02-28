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
import {CommentContextProvider} from "./shared/context/commentContext";


function AppComponent() {
    const [token] = useToken();

    return (
        <tokenContext.Provider value={token}>
            <UserContextProvider>
                <PostsContextProvider>
                    <CommentContextProvider>
                        <Layout>
                            <Header/>
                            <Content>
                                <CardsList/>
                            </Content>
                        </Layout>
                    </CommentContextProvider>
                </PostsContextProvider>
            </UserContextProvider>
        </tokenContext.Provider>
    );
}

export const App = hot(() => <AppComponent/>);