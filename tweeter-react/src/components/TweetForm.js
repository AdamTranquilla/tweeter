import React, { useState } from "react";
import "./TweetForm.css";

export const TweetForm = (props) => {
  const { addNewTweet } = props;

  const [tweetText, setTweetText] = useState("");
  const tweetRemainingLength = 140 - tweetText.length;
  const spanStyle = { color: tweetRemainingLength >= 0 ? "black" : "red" };

  const submitTweet = (event) => {
    event.preventDefault();
    if (tweetRemainingLength >= 0 && tweetRemainingLength < 140) {
      addNewTweet(tweetText);
      setTweetText("");
    }
  };
  return (
    <section className="new-tweet">
      <form onSubmit={submitTweet} action="/tweets" method="POST">
        <textarea
          value={tweetText}
          onChange={(event) => setTweetText(event.target.value)}
          className="text-box"
          name="text"
          id="tweet-text"
          placeholder="What are you humming about?"
        ></textarea>

        <span className="err"></span>

        <div className="submit-counter">
          <button type="submit">Tweet</button>
          <span style={spanStyle} name="counter" id="counter" for="tweet-text">
            {140 - tweetText.length}
          </span>
        </div>
      </form>
    </section>
  );
};
