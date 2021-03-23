import React from 'react';
import styles from './cardtextcontent.css';
import {CardAuthor} from "./CardAuthor";
import {Link} from 'react-router-dom'

interface ICardTextContentProps {
    post: {
        id: string;
        title: string;
        img: string;
    }
    author: {
        title: string;
        img: string;
    };
}

export function CardTextContent({post, author}: ICardTextContentProps) {
    return (
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <CardAuthor title={author.title} img={author.img}/>
            </div>
            <div className={styles.title}>
                <Link to={`/posts/${post.id}`}
                      className={styles.postLink}>
                    {post.title}
                </Link>
            </div>
        </div>
    );
}
