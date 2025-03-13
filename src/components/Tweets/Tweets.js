import React from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets, fetchUsers, updateLikes } from "../../features/thunks";
// import { selectTweetsWithUserData } from "../../selectors/tweetsSelector";
import store from "../../store";
import { useLoaderData } from "react-router-dom";
// import { likeTweet } from "../../features/tweets/tweetsSlice";

//icons
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { FaRegComment, FaUserCircle } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";

export async function loader() {
    const tweetResults = await store.dispatch(fetchTweets())
    const userResults = await store.dispatch(fetchUsers())
    
    return {
        tweets: tweetResults,
        users: userResults
    }
}

export default function Tweet() {
    const dispatch = useDispatch()
    const { tweets, users } = useLoaderData()

    // const tweetsWithUserData = useSelector(selectTweetsWithUserData) // note** removed as loader is implemented
    const tweetsWithUserData = tweets?.map((tweet) => ({
        ...tweet,
        user:  users.find((user) => user.uuid === tweet.uuid)
    }))

    const handleLike = (tweetId, currentLikes, isCurrentlyLiked) => {
        console.log(tweetId, currentLikes, isCurrentlyLiked)

        const updatedLikes = isCurrentlyLiked ? currentLikes - 1 : currentLikes + 1
        const updatedIsLiked = !isCurrentlyLiked
        dispatch(updateLikes({ tweetId, updatedLikes, isLiked: updatedIsLiked}))
    }

    return <>
        {
            tweetsWithUserData?.map((tweet) => {
                return <div className="tweet" key={tweet.tid}>
                        <div className="user-profile">
                            {/* <img src={tweet.user?.profilePic} alt="User 
                            profile"></img> */}
                            <FaUserCircle />
                        </div>
                        <div className="tweet-content">
                            <div className="tweet-header">
                                <div className="user-details">
                                    <span className="user-name">{tweet.user.name}</span>
                                    <span className="user-handles">{tweet.user.handle}</span>
                                    <span className="tweet-timestamp">{tweet.timeStamp}</span>
                                </div>
                                <div className="tweet-menu">
                                    <CiMenuKebab />
                                </div>
                            </div>
                            <div className="tweet-body">{tweet.tweetText}</div>
                            <div className="tweet-actions">
                                <button className="tweet-action-btn comment">
                                    <div className="tweet-action-icon"><FaRegComment /></div>
                                    <span>{tweet.replies.length}</span>
                                </button>
                                <button className="tweet-action-btn retweet">
                                    <div className="tweet-action-icon"><FaRetweet /></div>
                                    <span>{tweet.retweets}</span>
                                </button>
                                <button 
                                    className={`tweet-action-btn like ${tweet.isLiked && "active"}`}
                                    onClick={() => {
                                        handleLike(tweet.tid, tweet.likes, tweet.isLiked)
                                    }}
                                >
                                    <div className="tweet-action-icon">{tweet.isLiked ? <IoIosHeart/> : <IoIosHeartEmpty />}</div>
                                    <span>{tweet.likes}</span>
                                </button>
                            </div>
                        </div>
                    </div>
            })
        }
    </>
}