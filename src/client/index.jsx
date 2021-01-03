import React from 'react';
import * as ReactDOM from 'react-dom';
import {Header} from "../shared/Header";

// since we don't want header to be rendered via SSR
window.addEventListener('load', () => {
    ReactDOM.hydrate(<Header/>, document.getElementById('react_root'));
});
