import React, {ChangeEvent, FormEvent, useState} from 'react';
import styles from './commentform.css';


type CommentFormProps = {
    value: string;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit: (event: FormEvent) => void;
}

export function CommentForm() {
    const [value, setValue] = useState('');
    const [touched, setTouched] = useState(false);
    const [valueError, setValueError] = useState('');

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        setTouched(true);
        setValueError(validateValue());

        const isFormValid = !validateValue();
        if (!isFormValid) return;

        alert('Форма отправлена');
    }

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setValue(event.target.value);
    }

    function validateValue() {
        if (value.length <= 3) return 'Введите больше 3-х символов';
        return '';
    }

    return (
        <form className={styles.form}
              onSubmit={handleSubmit}>
            <textarea className={styles.input}
                      value={value}
                      onChange={handleChange}
                      aria-invalid={valueError ? 'true' : undefined}/>
            {touched && valueError && (<div>{valueError}</div>)}
            <button type="submit" className={styles.button}>Submit</button>
        </form>
    );
}
