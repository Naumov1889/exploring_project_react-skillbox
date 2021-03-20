import React, {useContext, useEffect, useRef, useState} from 'react';
import styles from './cardslist.css';
import {Card} from "./Card";
// import {postsContext} from "../context/postsContext";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducer";
import {IPostItem, IPostsData, postsRequestAsync} from "../../store/posts/actions";



export function CardsList() {
    const posts = useSelector<RootState, IPostItem[]>(state => state.posts.data.posts)
    const after = useSelector<RootState, string>(state => state.posts.data.after)
    const token = useSelector<RootState, any>(state => state.token);
    const loading = useSelector<RootState, boolean>(state => state.posts.loading)
    const errorLoading = useSelector<RootState, string>(state => state.posts.error)
    const dispatch = useDispatch();

    const cards = posts.map((post) => {
        return <Card key={post.post.id} post={post.post} author={post.author}/>
    })

    const bottomOfList = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(() => {
            dispatch(postsRequestAsync())
            console.log('load more')
        }, {
            rootMargin: '10px',
        })

        if (bottomOfList.current) {
            observer.observe(bottomOfList.current)
        }

        return () => {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current);  // отписка от того, что считал предыдущий эффект
            }
        }
    }, [])

    return (
        <ul className={styles.cardsList}>

            {/*case 1*/}
            { cards.length === 0 && !loading && !errorLoading && (
                <li>Нет ни одного поста</li>
            ) }

            {/*case 2*/}
            {cards}

            <div ref={bottomOfList}/>

            {/*case 3*/}
            {loading && (<li>Загрузка...</li>)}

            {/*case 4*/}
            {errorLoading && (<li>{errorLoading}</li>)}

        </ul>
    );
}
