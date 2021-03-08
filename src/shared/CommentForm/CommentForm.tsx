import React from 'react';
import { Formik } from 'formik';
import styles from './commentform.css';


export function CommentForm() {
    return (
        <Formik
            initialValues={{ comment: '' }}
            validate={values => {
                const errors: { comment?: string } = {};
                if (!values.comment) {
                    errors.comment = 'Required';
                } else if (
                    values.comment.length <= 3
                ) {
                    errors.comment = 'Введите больше 3-х символов';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 1000);
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit} className={styles.form}>
                    <textarea
                        name="comment"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.comment}
                        className={styles.input}
                        aria-invalid={errors.comment ? 'true' : undefined}
                    />
                    {errors.comment && touched.comment && (<div>{errors.comment}</div>)}
                    <button type="submit" disabled={isSubmitting} className={styles.button}>
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    );
}
