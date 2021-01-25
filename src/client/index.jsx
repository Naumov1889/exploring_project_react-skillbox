import React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from '../App';
import {StarWarsNameClass} from "../shared/StarWarsNameClass.tsx";
import {StarWarsNameFunction} from "../shared/StarWarsNameFunction.tsx";

// since we don't want header to be rendered via SSR
window.addEventListener('load', () => {
    ReactDOM.hydrate(<App/>, document.getElementById('react_root'));
    // ReactDOM.hydrate(<StarWarsNameFunction/>, document.getElementById('react_root'));
});
