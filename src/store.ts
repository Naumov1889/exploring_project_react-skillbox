import {ActionCreator, AnyAction, createStore, Reducer} from "redux";

export type RootState = {
    commentText: string;
    token: string;
}

const initialState: RootState = {
    commentText: 'Привет, Skillbox!',
    token: '',
}
const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const SET_TOKEN = 'SET_TOKEN';
export const updateComment: ActionCreator<AnyAction> = (text) => ({
    type: UPDATE_COMMENT,
    text: text
})
export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.text
            }
        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}
