import { configureStore } from "@reduxjs/toolkit";
import tweetsReducer from "./features/tweets/tweetsSlice";
import usersReducer from "./features/users/usersSlice";

// import thunk from "redux-thunk";

const store = configureStore({
    reducer: {
        tweets: tweetsReducer,
        users: usersReducer,
    },
});

export default store;