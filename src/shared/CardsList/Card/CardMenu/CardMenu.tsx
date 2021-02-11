import React from 'react';
import styles from './cardmenu.css';
import {Dropdown} from "../../../Dropdown";
import {CardMenuList} from "./CardMenuList";


export function CardMenu() {
    return (
        <div className={styles.cardMenu}>
            <Dropdown onOpen={() => console.log('opened')}
                      onClose={() => console.log('closed')}
                      button={
                          <button className={styles.menuBtn}>
                              MENU
                          </button>
                      }>
                <CardMenuList/>
            </Dropdown>
        </div>
    );
}
