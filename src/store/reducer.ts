import {Reducer} from "redux";
import {SET_TOKEN, UPDATE_COMMENT} from "./actions";
import {ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS} from "./me/actions";
import {meReducer, MeState} from "./me/reducer";
import {postsReducer, PostsState} from "./posts/reducer";
import {POSTS_REQUEST, POSTS_REQUEST_ERROR, POSTS_REQUEST_SUCCESS} from "./posts/actions";


export type RootState = {
    commentText: string;
    token?: string;
    me: MeState;
    posts: PostsState;
}

const initialState: RootState = {
    commentText: 'Привет, Skillbox!',
    token: '',
    me: {
        loading: false,
        error: '',
        data: {}
    },
    posts: {
        loading: false,
        error: '',
        data: {
            posts: [],
            nextAfter: '',
            numberOfLoads: 0
        }
    },
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
        case POSTS_REQUEST:
        case POSTS_REQUEST_ERROR:
        case POSTS_REQUEST_SUCCESS:
            return {
                ...state,
                posts: postsReducer(state.posts, action)
            }
        default:
            return state;
    }
}
