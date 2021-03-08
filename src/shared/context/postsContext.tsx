import React from "react";
import {usePostsData} from "../hooks/usePostsData";

interface IPostItemContext {
    posts: {
        post: {
            id: string;
            title: string;
            img: string;
        }
        author: {
            title: string;
            img: string;
        };
    }[],
    loading: boolean,
    errorLoading?: string;
}

export const postsContext = React.createContext<IPostItemContext>({posts: [], loading: false})

export function PostsContextProvider({children}: { children: React.ReactNode }) {
    const data = usePostsData();
    console.log(data)

    return (
        <postsContext.Provider value={data}>
            {children}
        </postsContext.Provider>
    )
}