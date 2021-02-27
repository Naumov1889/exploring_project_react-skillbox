import React from 'react';
import styles from './cardauthor.css';

interface ICardAuthorProps {
    title: string;
    img?: string;
}

export function CardAuthor({title, img}: ICardAuthorProps) {
    const defaultImg = "https://cdn.dribbble.com/users/2531150/screenshots/7381472/media/be977f32a3f5abf4898f2c343ab7bfe0.jpg?compress=1&resize=800x600";

    return (
        <a className={styles.userLink} href="#user-url">
            <img className={styles.avatar}
                 src={img ? img : defaultImg}
                 alt="avatar"
            />
            <span className={styles.username}>{title}</span>
        </a>
    );
}
