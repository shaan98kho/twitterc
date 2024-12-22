import './App.scss';
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTweets } from "./features/tweets/tweetsSlice";

function App() {
  const firstRender = React.useRef(true);
  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.tweets)

  function fetchData() {
    fetch("http://localhost:3000/tweets")
          .then((res) => res.json())
          .then((data) => dispatch(setTweets(data.tweets)))
          .catch((error) => console.log("error fetching data:", error))
  }

  React.useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
      <h1>Mock Twitter API</h1>
      {tweets.length === 0 ? (
        <p>No tweets available</p>
      ) : (
        tweets.map((tweet) => (
          <div key={tweet.id}>
            <p>{tweet.tweetText}</p>
            <p>Likes: {tweet.likes}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
