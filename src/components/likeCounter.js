import './likeCounter.css';
import { useState, useEffect} from 'react';
function LikeCounter({title, description, count, color, author}){
    const [likes, setLikes] = useState(+count);
    const counterStyles = {
        color: likes > 5 ? "red" : "black",
    };

    useEffect(()=>{
        console.log("use effect odpalony");
      /*  //document.title = `${likes} likeów dla posta`;
        if({likes} == 0 ){
            document.title = `MiniFeed - ${likes}`;
        }else if(likes > 0){
            document.title = `Nowe lajki na MiniFeed`;
        }else if(likes > 20){
            document.title = `Jesteś absolutnym viralem! 🚀`;
        }*/
    }, [likes]);
    
    const handleLike = () =>{
        setLikes(likes + 1);
    
    };

    const handleDisLike = () =>{
        if(likes<1){
            return;
        }
        setLikes(likes - 1);
    };
    

    return(
        
        <div className='post' style={{backgroundColor: color}}>
            <p style={counterStyles}>Liczba likeów {likes}</p>
            <h2>{title}</h2>
            <p>{description}</p>
            <p><span>{author}</span></p>
            <div className='actions'>
            <button onClick={handleLike} style={{ marginRight: "10px"}}>Polub 👍</button>
            <button onClick={handleDisLike}>DisLike 👎</button>
            </div>
        </div>
    );
}
export default LikeCounter;
