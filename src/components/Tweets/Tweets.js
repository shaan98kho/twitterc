import React from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets, fetchUsers } from "../../features/fetchThunks";
import { selectTweetsWithUserData } from "../../selectors/tweetsSelector";

//icons
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";


export default function Tweet({}) {
    const dispatch = useDispatch()
    const tweetsWithUserData = useSelector(selectTweetsWithUserData)
    
    React.useEffect(() => {
        dispatch(fetchTweets())
        dispatch(fetchUsers())
    }, [dispatch])

    console.log(tweetsWithUserData)

    return <>
        {
            tweetsWithUserData?.map((tweet) => {
                return <div className="tweet">
                        <div className="user-profile">
                            <img src={tweet.user.profilePic}></img>
                        </div>
                        <div>
                            <div className="user-details">
                                <span className="user-name">{tweet.user.name}</span>
                                <span className="user-handles">{tweet.user.handle}</span>                                
                            </div>
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
                    </div>
            })
        }
    </>
}