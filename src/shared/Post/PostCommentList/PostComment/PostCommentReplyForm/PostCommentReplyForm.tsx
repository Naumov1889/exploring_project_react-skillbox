import React, {FormEvent, useEffect, useRef, useState} from 'react';
import styles from './postcommentreplyform.css';


interface IPostCommentReplyFormProps {
    replyTo: string;
    onOpen: () => void;
}

export function PostCommentReplyForm({replyTo}: IPostCommentReplyFormProps) {
    const ref = useRef<HTMLTextAreaElement>(null);
    const [value, setValue] = useState(`${replyTo}, `);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
    }

    useEffect(() => {
        ref.current?.focus();
    }, []);

    return (
        <form className={styles.form}
              onSubmit={handleSubmit}>
            <textarea ref={ref}
                      className={styles.input}
                      value={value}
                      onChange={(event) => setValue(event.target.value)}></textarea>
            <button type="submit" className={styles.button}>Submit</button>
        </form>
    );
}

// Неконтролируемая компонента
// export function PostCommentReplyForm({replyTo}: IPostCommentReplyFormProps) {
//     const ref = useRef<HTMLTextAreaElement>(null);
//
//     function handleSubmit(event: FormEvent) {
//         event.preventDefault();
//     }
//
//     useEffect(() => {
//         ref.current?.focus();
//     }, []);
//
//     return (
//         <form className={styles.form}
//               onSubmit={handleSubmit}>
//             <textarea ref={ref}
//                       className={styles.input}
//                       defaultValue={`${replyTo}, `}></textarea>
//             <button type="submit" className={styles.button}>Submit</button>
//         </form>
//     );
// }