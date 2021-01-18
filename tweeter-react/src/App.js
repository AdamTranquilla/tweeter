import "./App.css";
import { Navigation } from "./components/Navigation";
import { Profile } from "./components/Profile";
import { TweetForm } from "./components/TweetForm";
import { Tweet } from "./components/Tweet";
import React, { useState } from "react";

const initialTweetData = [
  {
    name: "Bob",
    handle: "@theBuilder",
    profile_image: "https://i.imgur.com/73hZDYK.png",
    text: "nails wya",
    date: "1 days ago",
  },
  {
    name: "Armie Hammer",
    handle: "@HammerTime",
    profile_image: "https://i.imgur.com/73hZDYK.png",
    text: "yo zuck wheres the meats at?",
    date: "1 second ago",
  },
];

function App() {
  const [tweetData, setTweetData] = useState(initialTweetData);

  const tweets = tweetData.map((tweetData, index) => {
    return (
      <Tweet
        key={index}
        name={tweetData.name}
        handle={tweetData.handle}
        profile_image={tweetData.profile_image}
        text={tweetData.text}
        date={tweetData.date}
      />
    );
  });

  const addNewTweet = text => {
    const newTweet = {
      name: "Adam Tranquilla",
      handle: "@adam.tranquilla",
      profile_image: "https://i.imgur.com/73hZDYK.png",
      text,
      date: "10 days ago"
    };
    setTweetData([newTweet, ...tweetData]);
  };

  return (
    <div className="App">
      <Navigation />
      <Profile />
      <main className="container">
        <TweetForm addNewTweet={addNewTweet} />
        <section className="tweets">{tweets}</section>
      </main>
    </div>
  );
}

export default App;
