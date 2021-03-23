import {useEffect, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducer";


interface IComment {
    id: string;
    author: string;
    comment: string;
}


export function useCommentsData(postId: string) {
    const [comments, setComments] = useState<IComment[]>([]);
    const token = useSelector<RootState, any>(state => state.token);

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

                setComments(processedComments)

            })
            .catch(console.log)
    }, [token])

    return [comments]
}