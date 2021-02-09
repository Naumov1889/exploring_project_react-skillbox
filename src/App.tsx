import React from 'react';
import {hot} from 'react-hot-loader/root';
import './main.global.css'
import {Layout} from './shared/Layout';
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {Dropdown} from "./shared/Dropdown";

function AppComponent() {
    return (
        <Layout>
            <Header/>
            <Content>
                <CardsList/>
            </Content>
            <Dropdown onOpen={() => console.log('opened')}
                      onClose={() => console.log('closed')}
                      button={<button>Test</button>}>
                <ul>
                    <li>1</li>
                </ul>
            </Dropdown>
        </Layout>
    );
}

export const App = hot(() => <AppComponent />);