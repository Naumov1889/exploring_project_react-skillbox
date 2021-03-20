import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducer";
import {IPostsData, postsRequestAsync} from "../../store/posts/actions";

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

// export function usePostsData() {
//     const [posts, setPosts] = useState<IPostItem[]>([]);
//     const token = useSelector<RootState, any>(state => state.token);
//     const [loading, setLoading] = useState(false);
//     const [errorLoading, setErrorLoading] = useState('');
//     const [after, setAfter] = useState('');
//
//     useEffect(() => {
//         // setLoading(true)
//         // setErrorLoading('')
//         // axios.get('https://oauth.reddit.com/best.json?limit=5&sr_detail=true', {
//         //     headers: {Authorization: `bearer ${token}`}
//         // })
//         //     .then((resp) => {
//         //         const posts = resp.data.data.children;
//         //         const after = resp.data.data.after;
//         //         const processedPosts = posts.map((post: any) => {
//         //             return {
//         //                 ...post,
//         //                 post: {
//         //                     id: post.data.id,
//         //                     title: post.data.title,
//         //                     img: post.data?.thumbnail
//         //                 },
//         //                 author: {
//         //                     title: post.data?.sr_detail?.display_name,
//         //                     img: post.data?.sr_detail?.icon_img
//         //                 }
//         //             }
//         //         })
//         //
//         //         setAfter(after);
//         //         setLoading(false);
//         //         setPosts(processedPosts)
//         //     })
//         //     .catch((error) => {
//         //         console.log(error);
//         //         setLoading(false)
//         //         setErrorLoading(String(error))
//         //     })
//     }, [token])
//
//     return {posts, loading, errorLoading, after}
// }

export function usePostsData() {
    const data = useSelector<RootState, IPostsData>(state => state.posts.data)
    const loading = useSelector<RootState, boolean>(state => state.posts.loading)
    const token = useSelector<RootState>(state => state.token);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!token) return;
        dispatch(postsRequestAsync())
    }, [token])

    return {
        data,
        loading
    }
}