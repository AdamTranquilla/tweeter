import React from "react";
import "./Tweet.css";

export const Tweet = (props) => {
  const { name, handle, text, profile_image, date } = props;

  return (
    <>
      {name && handle && text && profile_image && date && (
        <article className="tweet">
          <header>
            <div className="avatar-user">
              <img src={profile_image} />
              <span>{name}</span>
            </div>
            <span className="hash">{handle}</span>
          </header>
          <div className="tweetText">{text}</div>
          <hr />
          <footer>
            <output> {date} </output>
            <div className="footer-icons">
              <i className="far fa-flag"></i>
              <i className="fas fa-retweet"></i>
              <i className="far fa-heart"></i>
            </div>
          </footer>
        </article>
      )}
    </>
  );
};
