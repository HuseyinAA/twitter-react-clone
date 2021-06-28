import React, {useState, useEffect} from 'react';
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./firebase";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("Posts").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);

    return (
        <div className="feed">
            {/*Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/*TweetBox */}
            <TweetBox />
            
            {/*Post */}
            {posts.map(post => (
                
                <Post 
                    displayName={post.displayName}
                    userName ={post.userName}
                    verified={post.verified}
                    text={post.text}
                    image={post.image}
                    avatar={post.avatar}
                    />
            ))}
            
            
        </div>
    )
}

export default Feed;
