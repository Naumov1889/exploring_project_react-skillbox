import React from 'react';
import styles from './cardmenulist.css';
import {EIcons, Icon} from "../../../../Icons";

interface IMenuItemsListProps {
    postId: string;
}

export function CardMenuList({postId}: IMenuItemsListProps) {

    return (
        <ul className={styles.CardMenuList}>
            <li onClick={() => console.log(postId)} className={styles.menuItem}>
                <Icon name={EIcons.comment} size={14}/>
                Комментарии
            </li>
            <li className={styles.menuItem}>
                <Icon name={EIcons.share} size={14}/>
                Поделиться
            </li>
            <li className={styles.menuItem}>
                <Icon name={EIcons.hide} size={14}/>
                Скрыть
            </li>
            <li className={styles.menuItem}>
                <Icon name={EIcons.save} size={14}/>
                Сохранить
            </li>
            <li className={styles.menuItem}>
                <Icon name={EIcons.complain} size={14}/>
                Пожаловаться
            </li>
        </ul>
    );
}
