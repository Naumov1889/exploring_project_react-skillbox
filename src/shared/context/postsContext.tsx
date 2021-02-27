import React from "react";
import {usePostsData} from "../hooks/usePostsData";

interface IPostItemContext {
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

export const postsContext = React.createContext<IPostItemContext[]>([])

export function PostsContextProvider({children}: {children: React.ReactNode}) {
    const [posts] = usePostsData();

    return (
        <postsContext.Provider value={posts}>
            {children}
        </postsContext.Provider>
    )
}