import React from 'react';
import styles from './postcommentlist.css';
import {useCommentsData} from "../../hooks/useCommentsData";
import {PostComment} from "./PostComment";

interface IPostCommentList {
    postId: string;
}


export function PostCommentList(props: IPostCommentList) {
    const [comments] = useCommentsData(props.postId);

    const postComments = comments.map((comment) => {
        return <PostComment key={comment.id} author={comment.author} comment={comment.comment}/>
    })

    return (
        <ul className={styles.postList}>
            {postComments.length !== 0 ? postComments : <li>It's coming...</li>}
        </ul>
    );
}
