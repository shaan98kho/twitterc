import { configureStore } from "@reduxjs/toolkit";
import tweetsReducer from "./features/tweets/tweetsSlice";
import usersReducer from "./features/users/usersSlice";
import currentUserReducer from "./features/currentUser/currentUserSlice";

// import thunk from "redux-thunk";

const store = configureStore({
    reducer: {
        tweets: tweetsReducer,
        users: usersReducer,
        currentUser: currentUserReducer,
    },
});

export default store;