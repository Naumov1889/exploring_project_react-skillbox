import React from 'react';
import * as ReactDOM from 'react-dom';
import {Header} from "./Header";

// since we don't want header to be rendered via SSR
window.addEventListener('load', () => {
    ReactDOM.render(<Header/>, document.getElementById('react_root'));
});
