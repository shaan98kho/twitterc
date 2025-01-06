import React from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets, fetchUsers } from "../../features/fetchThunks";
import { selectTweetsWithUserData } from "../../selectors/tweetsSelector";
import { likeTweet } from "../../features/tweets/tweetsSlice";

//icons
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";



export default function Tweet({}) {
    const dispatch = useDispatch()
    
    
    React.useEffect(() => {
        dispatch(fetchTweets())
        dispatch(fetchUsers())
    }, [dispatch])

    const tweetsWithUserData = useSelector(selectTweetsWithUserData)

    const handleLike = (tweetID) => {
        dispatch(likeTweet(tweetID))

        // console.log(tweetsWithUserData)
    }


    return <>
        {
            tweetsWithUserData?.map((tweet) => {
                return <div className="tweet">
                        <div className="user-profile">
                            <img src={tweet.user?.profilePic}></img>
                        </div>
                        <div>
                            <div className="tweet-header">
                                <div className="user-details">
                                    <span className="user-name">{tweet.user.name}</span>
                                    <span className="user-handles">{tweet.user.handle}</span>                                
                                </div>
                                <div className="tweet-menu">
                                    <CiMenuKebab />
                                </div>
                            </div>
                            <div className="tweet-body">{tweet.tweetText}</div>
                            <div className="tweet-actions">
                                <button className="tweet-action-btn">
                                    <div><FaRegComment /></div>
                                    <span>{tweet.replies.length}</span>
                                </button>
                                <button className="tweet-action-btn">
                                    <div><FaRetweet /></div>
                                    {tweet.retweets}
                                </button>
                                <button className="tweet-action-btn" onClick={() => handleLike(tweet.tid)}>
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