import React from 'react';
import styles from './cardmenu.css';
import {Dropdown} from "../../../Dropdown";
import {CardMenuList} from "./CardMenuList";
import {Icon, EIcons} from '../../../Icons';


export function CardMenu() {
    return (
        <div className={styles.cardMenu}>
            <Dropdown onOpen={() => {}}
                      onClose={() => {}}
                      button={
                          <button className={styles.menuBtn}>
                              <Icon name={EIcons.menu} size={21}/>
                          </button>
                      }>
                <CardMenuList postId="1234"/>
            </Dropdown>
        </div>
    );
}
