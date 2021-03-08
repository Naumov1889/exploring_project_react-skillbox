import {useEffect, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducer";

interface IPostItem {
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

export function usePostsData() {
    const [posts, setPosts] = useState<IPostItem[]>([]);
    const token = useSelector<RootState, any>(state => state.token);
    const [loading, setLoading] = useState(false);
    const [errorLoading, setErrorLoading] = useState('');

    useEffect(() => {
        setLoading(true)
        setErrorLoading('')
        axios.get('https://oauth.reddit.com/best.json?limit=5&sr_detail=true', {
            headers: {Authorization: `bearer ${token}`}
        })
            .then((resp) => {
                const posts = resp.data.data.children;
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

                // console.log(processedPosts)

                setLoading(false);
                setPosts(processedPosts)
            })
            .catch((error) => {
                console.log(error);
                setLoading(false)
                setErrorLoading(String(error))
            })
    }, [token])

    return {posts: posts, loading: loading, errorLoading: errorLoading}
}
