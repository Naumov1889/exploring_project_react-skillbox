import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../reducer";
import axios from "axios";


export const POSTS_REQUEST = 'POSTS_REQUEST';
export type PostsRequestAction = {
    type: typeof POSTS_REQUEST;
}
export const postsRequest: ActionCreator<PostsRequestAction> = () => ({
    type: POSTS_REQUEST,
});

export interface IPostItem {
    post: {
        id: string;
        title: string;
        img: string;
    }
    author: {
        title: string;
        img: string;
    };
}


export interface IPostsData {
    posts: IPostItem[],
    after: string;
}

export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export type PostsRequestSuccessAction = {
    type: typeof POSTS_REQUEST_SUCCESS;
    data: IPostsData;
}
export const postsRequestSuccess: ActionCreator<PostsRequestSuccessAction> = (data: IPostsData) => ({
    type: POSTS_REQUEST_SUCCESS,
    data,
})

export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';
export type PostsRequestErrorAction = {
    type: typeof POSTS_REQUEST_ERROR;
    error: string;
}
export const postsRequestError: ActionCreator<PostsRequestErrorAction> = (error: string) => ({
    type: POSTS_REQUEST_ERROR,
    error,
})

export const postsRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    // axios.get('https://oauth.reddit.com/api/v1/me', {
    //     headers: {Authorization: `bearer ${getState().token}`}
    // })
    //     .then((resp) => {
    //         const userData = resp.data;
    //         dispatch(postsRequestSuccess({name: userData.name, iconImg: userData.icon_img}));
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //         dispatch(postsRequestError(String(error)));
    //     })

    dispatch(postsRequest());


    axios.get('https://oauth.reddit.com/best.json?limit=5&sr_detail=true', {
        headers: {Authorization: `bearer ${getState().token}`}
    })
        .then((resp) => {
            const posts = resp.data.data.children;
            const after = resp.data.data.after;
            const processedPosts = posts.map((post: any) => {
                return {
                    ...post,
                    post: {
                        id: post.data.id,
                        title: post.data.title,
                        img: post.data?.thumbnail
                    },
                    author: {
                        title: post.data?.sr_detail?.display_name,
                        img: post.data?.sr_detail?.icon_img
                    }
                }
            })

            dispatch(postsRequestSuccess({posts: processedPosts, after: after}));


            // setAfter(after);
            // setLoading(false);
            // setPosts(processedPosts)
        })
        .catch((error) => {
            console.log(error);
            dispatch(postsRequestError(String(error)));
            // setLoading(false)
            // setErrorLoading(String(error))
        })
}