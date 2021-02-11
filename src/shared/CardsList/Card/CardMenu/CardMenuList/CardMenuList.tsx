import React from 'react';
import styles from './cardmenulist.css';
import {GenericList} from "../../../../GenericList";
import {generateRandomString, merge} from "../../../../../utils";

/* TODO: how to make className work with CSS modules */
const CardMenuListItems = [
    {As: 'li' as const, text: 'Alert "HI"', className: 'item', onClick: () => alert('HI')},
    {As: 'li' as const, text: 'Close', className: 'item item_close'},
].map((item) => ({...item, id: generateRandomString()}));

export function CardMenuList() {
    const handleItemClick = (id: string) => {
        console.log('clicked item', id);
    }

    return (
        <ul className={styles.CardMenuList}>
            <GenericList list={CardMenuListItems.map(merge({onClick: handleItemClick}))}/>
            {/*<GenericList list={CardMenuListItems.map((obj) => merge(obj)({onClick: pipe(handleItemClick, obj.onClick)}))}/>*/}
        </ul>
    );
}
