import React, {useEffect, useRef, useState} from 'react';
import styles from './cardslist.css';
import {Card} from "./Card";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducer";
import {IPostItem, postsRequestAsync} from "../../store/posts/actions";


export function CardsList() {
    const posts = useSelector<RootState, IPostItem[]>(state => state.posts.data.posts)
    const numberOfLoads = useSelector<RootState, number>(state => state.posts.data.numberOfLoads)
    const loading = useSelector<RootState, boolean>(state => state.posts.loading)
    const errorLoading = useSelector<RootState, string>(state => state.posts.error)
    const dispatch = useDispatch();

    const cards = posts.map((post) => {
        return <Card key={post.post.id} post={post.post} author={post.author}/>
    })

    const bottomOfList = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && (numberOfLoads % 3 !== 0 || numberOfLoads === 0)) {
                dispatch(postsRequestAsync())
            }
        }, {
            rootMargin: '10px',
        })

        if (bottomOfList.current) {
            observer.observe(bottomOfList.current)
        }

        return () => {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current);
            }
        }
    }, [posts])

    return (
        <ul className={styles.cardsList}>

            {/*case 1*/}
            {cards.length === 0 && !loading && !errorLoading && (
                <li>Нет ни одного поста</li>
            )}

            {/*case 2*/}
            {cards}

            <div ref={bottomOfList}/>

            {/*case 3*/}
            {loading && (<li>Загрузка...</li>)}

            {/*case 4*/}
            {errorLoading && (<li>{errorLoading}</li>)}

            {/*case 5*/}
            {numberOfLoads % 3 === 0 && cards.length !== 0 && !loading && !errorLoading && (
                <button onClick={() => dispatch(postsRequestAsync())}>Загрузить ещё</button>
            )}
        </ul>
    );
}
