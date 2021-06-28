import React, {useState} from 'react';
import './TweetBox.css';
import {Avatar, Button} from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    
    const sendTweet = (e) =>{
        e.preventDefault();

        db.collection("Posts").add({
            displayName: "Hossain Ghazal",
            userName: "HuseyinAA",
            verified: true,
            text: tweetMessage,
            avatar: "https://raw.githubusercontent.com/HuseyinAA/HuseyinAA.github.io/main/Images/profile.PNG",
            image: tweetImage,
        });

        setTweetImage("");
        setTweetMessage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://raw.githubusercontent.com/HuseyinAA/HuseyinAA.github.io/main/Images/profile.PNG"/>
                    <input 
                        onChange={(e) => setTweetMessage(e.target.value)} 
                        value={tweetMessage} 
                        placeholder="What's happening?" 
                        type="text"
                    />
                </div>
                <input 
                    className="tweetBox__imageInput" 
                    onChange={(e) => setTweetImage(e.target.value)}
                    value={tweetImage}
                    placeholder="Optional: Enter image URL" 
                    type="text"
                />
                <Button
                    onClick={sendTweet}
                    type="submit"
                    className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
