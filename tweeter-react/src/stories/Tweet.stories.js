import React from 'react' 
import { Tweet } from '../components/Tweet'

export default {title : "Singular Tweet"}

export const emptyTweet = () => <Tweet />

export const populatedTweet = () => {

  const singleTweet = {
    name: "Armie Hammer",
    handle: "@HammerTime",
    profile_image: "https://i.imgur.com/73hZDYK.png",
    text: "yo zuck where the meats at?",
    date: "1 second ago"
  }

  //return <Tweet name={singleTweet.name} handle={singleTweet.handle} profile_image={singleTweet.profile_image} text={singleTweet.text} date={singleTweet.date} />
  // OR
  return <Tweet {...singleTweet} />

}