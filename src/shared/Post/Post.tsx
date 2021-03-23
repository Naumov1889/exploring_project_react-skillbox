import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import {useHistory, useParams} from 'react-router-dom'
import styles from './post.css';
import {PostCommentList} from "./PostCommentList";
import {CommentFormContainer} from "../CommentFormContainer";

interface IPost {
    postId: string;
}

export function Post() {
    const ref = useRef<HTMLDivElement>(null);
    const history = useHistory();
    let {postId} = useParams<IPost>();

    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (event.target instanceof Node && !ref.current?.contains(event.target)) {
                history.push('/posts/')
            }
        }

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])

    const modalRootNode = document.querySelector('#modal_root');
    if (!modalRootNode) return null;

    return ReactDOM.createPortal((
        <div className={styles.modal} ref={ref}>
            <div className={styles.content}>
                <div className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab atque cupiditate delectus deserunt
                    dignissimos eligendi eum facilis illum, inventore ipsa ipsam itaque modi mollitia necessitatibus
                    perferendis placeat tenetur unde.
                </div>
                <PostCommentList postId={postId}/>
                <CommentFormContainer/>
            </div>
        </div>
    ), modalRootNode);
}
