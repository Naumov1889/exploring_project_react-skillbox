import React, {useState} from 'react';
import styles from './postcomment.css';
import {PostCommentReplyForm} from "./PostCommentReplyForm";

interface IComment {
    author: string;
    comment: string;
}

export function PostComment(props: IComment) {
    const [isReplyOpened, setIsReplyOpened] = useState(false);

    return (
        <div className={styles.comment}>
            <div className={styles.author}>{props.author}</div>
            <div className={styles.text}>{props.comment}</div>
            <button type="button"
                    onClick={() => setIsReplyOpened(!isReplyOpened)}>
                Ответить
            </button>

            {isReplyOpened && (
                <PostCommentReplyForm replyTo={props.author} onOpen={() => {}}/>
            )}

        </div>
    );
}
