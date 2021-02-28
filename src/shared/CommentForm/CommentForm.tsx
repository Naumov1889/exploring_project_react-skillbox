import React, {ChangeEvent, FormEvent, useContext, useRef, useState} from 'react';
import styles from './commentform.css';
import {commentContext} from "../context/commentContext";

export function CommentForm() {
    const {value, onChange} = useContext(commentContext);

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        onChange(event.target.value);
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
