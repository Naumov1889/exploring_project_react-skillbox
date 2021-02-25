import React, {useContext} from 'react';
import styles from './header.css';
import {SortBlock} from "./SortBlock";
import {SearchBlock} from "./SearchBlock";
import {ThreadTitle} from "./ThreadTitle";
import {tokenContext} from "../context/tokenContext";

export function Header() {
    // const {Consumer} = tokenContext;
    const token = useContext(tokenContext);
    return (
        <header className={styles.header}>
            {/*<Consumer>*/}
            {/*    {(token) => }*/}
            {/*</Consumer>*/}
            <SearchBlock token={token}/>
            <ThreadTitle/>
            <SortBlock/>
        </header>
    );
}
