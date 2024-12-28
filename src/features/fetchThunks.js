import { fetchTweetsFromApi, fetchUsersFromApi } from "../services/api";
import { setTweets } from "./tweets/tweetsSlice";
import { setUsers } from "./users/usersSlice";

export const fetchTweets = () => async (dispatch) => {
    try {
        const tweets = await fetchTweetsFromApi() // Call API service
        dispatch(setTweets(tweets))
    } catch (e) {
        console.error("Error fetching tweets:". e)
    }
}
export const fetchUsers = () => async (dispatch) => {
    try {
        const users = await fetchUsersFromApi() // Call API service
        dispatch(setUsers(users))
    } catch (e) {
        console.error("Error fetching tweets:". e)
    }
}