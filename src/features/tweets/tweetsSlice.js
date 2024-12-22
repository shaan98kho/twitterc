import { createSlice } from "@reduxjs/toolkit";

const tweetsSlice = createSlice({
    name:"tweets",
    initialState: [],
    reducers: {
        setTweets: (state, action) => {
            return action.payload;
        },
        addTweet: (state, action) => {
            state.push(action.payload);
        },
        likeTweet: (state, action) => {
            const tweet = state.find((twt) => twt.id === action.payload);
            if (tweet) {
                tweet.likes += 1;
            }
        }
    }
})

export const { setTweets, addTweet, likeTweet} = tweetsSlice.actions;
export default tweetsSlice.reducer;