import React, {ChangeEvent, FormEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CommentForm} from "../CommentForm";
import {RootState} from "../../store/reducer";
import {updateComment} from "../../store/actions";

export function CommentFormContainer() {
    const value = useSelector<RootState, string>(state => state.commentText);
    const dispatch = useDispatch();

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        dispatch(updateComment(event.target.value))
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
    }

    return (
        <CommentForm/>
    );
}
