import { fetchTweetsFromApi, fetchUsersFromApi, updateLikesIntoApi } from "../services/api";
import { setTweets, likeTweet } from "./tweets/tweetsSlice";
import { setUsers } from "./users/usersSlice";

// do slow stuff, when slow stuff is done dispatches an action to update state

export const fetchTweets = () => async (dispatch) => {
    try {
        const tweets = await fetchTweetsFromApi() // Call API service
        dispatch(setTweets(tweets))
    } catch(e) {
        console.error("Error fetching tweets:". e)
    }
}
export const fetchUsers = () => async (dispatch) => {
    try {
        const users = await fetchUsersFromApi() // Call API service
        dispatch(setUsers(users))
    } catch(e) {
        console.error("Error fetching tweets:". e)
    }
}

export const updateLikes = ({ tweetId, updatedLikes, isLiked }) => async (dispatch) => {
    try {
        // make put request to the server
        const updatedTweetLikes = await updateLikesIntoApi({tweetId, updatedLikes, isLiked})
        dispatch(likeTweet({tweetId, updatedLikes, isLiked}))
    } catch(e) {
        console.error("Error updating likes:". e)
    }
}