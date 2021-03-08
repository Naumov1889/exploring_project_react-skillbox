import React, {useContext} from 'react';
import styles from './cardslist.css';
import {Card} from "./Card";
import {postsContext} from "../context/postsContext";

export function CardsList() {
    const data = useContext(postsContext);

    const cards = data['posts'].map((post) => {
        return <Card key={post.post.id} post={post.post} author={post.author}/>
    })

    return (
        <ul className={styles.cardsList}>

            {/*case 1*/}
            { cards.length === 0 && !data['loading'] && !data['errorLoading'] && (
                <li>Нет ни одного поста</li>
            ) }

            {/*case 2*/}
            {cards}

            {/*case 3*/}
            {data['loading'] && (<li>Загрузка...</li>)}

            {/*case 4*/}
            {data['errorLoading'] && (<li>{data['errorLoading']}</li>)}

        </ul>
    );
}
