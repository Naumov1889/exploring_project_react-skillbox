import React from 'react';
import * as ReactDOM from 'react-dom';
import {Header} from "../shared/Header";
import {StarWarsNameClass} from "../shared/StarWarsNameClass.tsx";
import {StarWarsNameFunction} from "../shared/StarWarsNameFunction.tsx";

// since we don't want header to be rendered via SSR
window.addEventListener('load', () => {
    // ReactDOM.hydrate(<Header/>, document.getElementById('react_root'));
    // ReactDOM.hydrate(<StarWarsNameClass/>, document.getElementById('react_root'));
    ReactDOM.hydrate(<StarWarsNameFunction/>, document.getElementById('react_root'));
});
