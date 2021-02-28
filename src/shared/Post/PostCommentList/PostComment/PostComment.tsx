import React from 'react';
import styles from './postcomment.css';

interface IComment {
  author: string;
  comment: string;
}

export function PostComment(props: IComment) {
  return (
    <div className={styles.comment}>
      <div className={styles.author}>{props.author}</div>
      <div className={styles.text}>{props.comment}</div>
    </div>
  );
}
