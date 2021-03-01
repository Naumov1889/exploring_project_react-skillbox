import React, {ChangeEvent, FormEvent} from 'react';
import styles from './commentform.css';


type CommentFormProps = {
    value: string;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit: (event: FormEvent) => void;
}

export function CommentForm({value, onChange, onSubmit}: CommentFormProps) {
    return (
        <form className={styles.form}
              onSubmit={onSubmit}>
            <textarea className={styles.input}
                      value={value} onChange={onChange}></textarea>
            <button type="submit" className={styles.button}>Submit</button>
        </form>
    );
}
