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
            const { tweetId, updatedLikes, isLiked } = action.payload;
            const tweet = state.find((twt) => twt.tid === tweetId);

            if (tweet) {
                tweet.likes = updatedLikes
                tweet.isLiked = isLiked

                console.log("reducers tweet", tweet)
            }else {
                console.log("huh???")
            }
            // Increase tweet like counts
        }
    }
})

export const { setTweets, addTweet, likeTweet} = tweetsSlice.actions;
export default tweetsSlice.reducer;