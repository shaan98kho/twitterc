import { createSelector } from "@reduxjs/toolkit";

const tweetsState = (state) => state.tweets
const usersState = (state) => state.users

export const selectTweetsWithUserData = createSelector( 
    [tweetsState, usersState],
    (tweets, users) => {
        console.log("tweets:", tweets)
        console.log("users:", users)
        return tweets.map((tweet) => ({
            ...tweet,
            user:  users.find((user) => user.uuid == tweet.uuid)
        }))
    }
)