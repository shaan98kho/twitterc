import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTweets } from "../../features/tweets/tweetsSlice";
import { setUsers } from "../../features/users/usersSlice";

const dispatch = useDispatch()
const tweets = useSelector((state) => state.tweets)


function fetchData() {
    fetch("http://localhost:3000/tweets")
    .then(res => res.json())
    .then(data => dispatch(setTweets(data.tweets)))
    .catch(error => console.log("Failed to fetch data:", error))

    fetch("http://localhost:3000/tweets")
    .then(res => res.json())
    .then(data => dispatch(setUsers(data.users)))
    .catch(error => console.log("Failed to fetch data:", error))
}

React.useEffect(() => {
    fetchData()
}, [])