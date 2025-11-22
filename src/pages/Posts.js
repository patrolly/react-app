import LikeCounter from "../components/likeCounter";

function Posts(){
    return(
        <>
        <h1>LATEST POSTS</h1>
        <article>
        <div className='posts'>
    <LikeCounter color="lightblue" title="Pierwszy post" description="Opis naszego artykułu" count="5" author="autor 1"></LikeCounter>
    <LikeCounter color="lightgreen" title="2. post" description="Opis naszego artykułu" count="16" author="autor 2"></LikeCounter>
    <LikeCounter color="lightblue" title="3. post" description="Opis naszego artykułu" count="3" author="autor 3"></LikeCounter>
    </div>
        </article>
        </>
    )
}
export default Posts;