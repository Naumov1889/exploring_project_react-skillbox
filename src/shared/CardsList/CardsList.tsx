import React, {useContext} from 'react';
import styles from './cardslist.css';
import {Card} from "./Card";
import {postsContext} from "../context/postsContext";

export function CardsList() {
    const posts = useContext(postsContext);

    const cards = posts.map((post) => {
        return <Card key={post.post.id} post={post.post} author={post.author}/>
    })

    return (
        <ul className={styles.cardsList}>
            {cards.length !== 0 ? cards : <li>It's coming...</li>}
        </ul>
    );
}
