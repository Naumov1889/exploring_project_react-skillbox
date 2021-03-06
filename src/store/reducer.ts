import {Reducer} from "redux";
import {SET_TOKEN, UPDATE_COMMENT} from "./actions";
import {ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS} from "./me/actions";
import {meReducer, MeState} from "./me/reducer";


export type RootState = {
    commentText: string;
    token?: string;
    me: MeState;
}

const initialState: RootState = {
    commentText: 'Привет, Skillbox!',
    token: '',
    me: {
        loading: false,
        error: '',
        data: {}
    }
}


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
        case ME_REQUEST:
        case ME_REQUEST_ERROR:
        case ME_REQUEST_SUCCESS:
            return {
                ...state,
                me: meReducer(state.me, action)
            }
        default:
            return state;
    }
}
