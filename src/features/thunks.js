import { fetchCurrentUserFromApi, fetchTweetsFromApi, fetchUsersFromApi, updateLikesIntoApi, postTweetToApi } from "../services/api";
import { setCurrentUser } from "./currentUser/currentUserSlice";
import { setTweets, likeTweet } from "./tweets/tweetsSlice";
import { setUsers } from "./users/usersSlice";

// do slow stuff, when slow stuff is done dispatches an action to update state

export const fetchTweets = () => async (dispatch) => {
    try {
        const tweets = await fetchTweetsFromApi() // Call API service
        dispatch(setTweets(tweets))
        return tweets
    } catch(e) {
        console.error("Error fetching tweets:",e)
        throw e
    }
}

export const fetchUsers = () => async (dispatch) => {
    try {
        const users = await fetchUsersFromApi() // Call API service
        dispatch(setUsers(users))
        return users
    } catch(e) {
        console.error("Error fetching tweets:",e)
        throw e
    }
}

export const fetchCurrentUser = () => async (dispatch) => {
    try {
        const currentUser = await fetchCurrentUserFromApi() // Call API service
        dispatch(setCurrentUser(currentUser))
        return currentUser
    } catch(e) {
        console.error("Error fetching tweets:",e)
        throw e
    }
}

export const updateLikes = ({ tweetId, updatedLikes, isLiked }) => async (dispatch) => {
    try {
        // make put request to the server
        const updatedTweetLikes = await updateLikesIntoApi({tweetId, updatedLikes, isLiked})
        dispatch(likeTweet({tweetId, updatedLikes, isLiked}))
    } catch(e) {
        console.error("Error updating likes:".e)
    }
}

export const postTweet = ({cuid, inputtedTweetText}) => async (dispatch) => {
    try {
        const tweetText = await postTweetToApi({inputtedTweetText, cuid})
        
    } catch(e) {
        console.error("Error posting tweet",e)
        throw e
    }
}