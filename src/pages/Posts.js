import { useDispatch, useSelector } from "react-redux";
import LikeCounter from "../components/likeCounter";
import { useEffect } from "react";
import { fetchPosts } from "../store/postsSlice";

function Posts(){
    const dispatch = useDispatch();
    const {posts, error, status} = useSelector((state)=>state.posts);

    useEffect(()=>{
        if(status == 'idle'){
            dispatch(fetchPosts());
        }
    }, [status, dispatch]);
    return(
        <>
        <article>
            
        <h1>LATEST POSTS</h1>
        <div className='posts'>
        {status === 'loading' && <p>Ładowanie ...</p>}
        {status === 'failed' && <p>Błąd: {error}</p>}
        {status === 'succeeded' && (
            posts.map(post => <LikeCounter key={post.id} color="" title={post.title} description={post.body} count="5" author="autor 1"></LikeCounter>) 
        )}
        
        
    </div>
        </article>
        </>
    )
}
export default Posts;