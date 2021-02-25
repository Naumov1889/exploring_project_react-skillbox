import React from 'react';
import styles from './header.css';
import {SortBlock} from "./SortBlock";
import {SearchBlock} from "./SearchBlock";
import {ThreadTitle} from "./ThreadTitle";

export function Header() {
    return (
        <header className={styles.header}>
            <SearchBlock/>
            <ThreadTitle/>
            <SortBlock/>
        </header>
    );
}
