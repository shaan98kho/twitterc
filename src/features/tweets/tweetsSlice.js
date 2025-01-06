import { createSlice } from "@reduxjs/toolkit";

const tweetsSlice = createSlice({
    name:"tweets",
    initialState: [],
    reducers: {
        setTweets: (state, action) => {
            return action.payload; // Update tweets state with new data
        },
        addTweet: (state, action) => {
            state.push(action.payload); // Edit tweets
        },
        likeTweet: (state, action) => {
            const tweet = state.find((twt) => twt.id === action.payload);

            console.log(action.payload)
            if (tweet) {
                tweet.isLiked = !tweet.isLiked;

                if (tweet.isLiked)
                tweet.likes -= 1;
                else
                tweet.likes += 1;
            }
            // Increase tweet like counts
        }
    }
})

export const { setTweets, addTweet, likeTweet} = tweetsSlice.actions;
export default tweetsSlice.reducer;