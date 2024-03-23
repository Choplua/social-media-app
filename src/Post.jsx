import React, { useState } from 'react';
import Comment from './Comment';
function Post(){
    const [likes, setLikes] = useState(0);

    function handleLike(){
        console.log('Liked!');
        setLikes(likes + 1);
    }
    return(
        <div>
            <h3>Test Post</h3>
            <p>This is a test post we'll edit later!</p>
            <p>Likes: {likes}</p>
            <button onClick={handleLike}>Like</button>

            <Comment content= "This is a test comment!"/>
            <Comment content= "This is a  2nd test comment!"/>
            <Comment content= "This is a  3rd test comment!"/>
        </div>
    )
}
export default Post