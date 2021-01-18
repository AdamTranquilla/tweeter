import React from "react";
import { Tweets } from "../components/Tweets";

export default { title: "Tweet Container" };

export const emptyTweet = () => <Tweets />;

export const populatedTweet = () => {
  const tweets = [
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

  //return <Tweet name={singleTweet.name} handle={singleTweet.handle} profile_image={singleTweet.profile_image} text={singleTweet.text} date={singleTweet.date} />
  // OR
  return <Tweets tweetData={tweets} />;
};
