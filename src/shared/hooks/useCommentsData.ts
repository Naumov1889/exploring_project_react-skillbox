import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {tokenContext} from "../context/tokenContext";


interface IComment {
    id: string;
    author: string;
    comment: string;
}


export function useCommentsData(postId: string) {
    const [comments, setComments] = useState<IComment[]>([]);
    const token = useContext(tokenContext);

    useEffect(() => {
        axios.get(`https://oauth.reddit.com/comments/${postId}.json?limit=5`, {
            headers: {Authorization: `bearer ${token}`}
        })
            .then((resp) => {
                const comments = resp.data[1].data.children;
                const processedComments = comments.map((comment: any) => {
                    return {
                        ...comment,
                        id: comment.data.id,
                        author: comment.data.author,
                        comment: comment.data.body
                    }
                })

                console.log(processedComments)

                setComments(processedComments)

            })
            .catch(console.log)
    }, [token])

    return [comments]
}