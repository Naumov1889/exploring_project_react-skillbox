import React, {ChangeEvent, FormEvent, useContext, useRef, useState} from 'react';
import styles from './commentform.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState, updateComment} from "../../store";

export function CommentForm() {
    const value = useSelector<RootState, string>(state => state.commentText);
    const dispatch = useDispatch();

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        dispatch(updateComment(event.target.value))
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
    }

    return (
        <form className={styles.form}
              onSubmit={handleSubmit}>
            <textarea className={styles.input}
                      value={value} onChange={handleChange}></textarea>
            <button type="submit" className={styles.button}>Submit</button>
        </form>
    );
}
