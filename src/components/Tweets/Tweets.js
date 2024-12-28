import React from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets } from "../../features/fetchThunks";

//icons
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";


export default function Tweet({}) {
    const dispatch = useDispatch()
    const tweets = useSelector((state) => state.tweets)
    
    React.useEffect(() => {
        dispatch(fetchTweets())
    }, [dispatch])

    return <>
        {
            tweets.map((tweet) => {
                return <div className="tweet">
                        <div className="tweet-text">{tweet.tweetText}</div>
                        <div className="tweet-actions">
                            <button className="tweet-action-btn">
                                <div><FaRegComment /></div>
                                <span>{tweet.replies.length}</span>
                            </button>
                            <button className="tweet-action-btn">
                                <div><FaRetweet /></div>
                                {tweet.retweets}
                            </button>
                            <button className="tweet-action-btn">
                                <div>{tweet.isLiked ? <IoIosHeart/> : <IoIosHeartEmpty />}</div>
                                {tweet.likes}
                            </button>
                        </div>
                    </div>
            })
        }
    </>
}