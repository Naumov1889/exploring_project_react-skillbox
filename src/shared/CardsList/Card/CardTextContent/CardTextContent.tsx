import React, {useState} from 'react';
import styles from './cardtextcontent.css';
import {CardAuthor} from "./CardAuthor";
import {Post} from "../../../Post";

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
    const [isModalOpened, setIsModalOpened] = useState(false);

    return (
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <CardAuthor title={author.title} img={author.img}/>
                {/*<span className={styles.createdAt}>4 часа назад</span>*/}
            </div>
            <div className={styles.title}>
                <a href="#post-url"
                   className={styles.postLink}
                   onClick={() => setIsModalOpened(!isModalOpened)}>
                    {post.title}
                </a>
            </div>

            {isModalOpened && (
                <Post onClose={() => setIsModalOpened(!isModalOpened)} postId={post.id}/>
            )}
        </div>
    );
}
