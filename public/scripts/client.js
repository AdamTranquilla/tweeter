/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const escape = function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

$(document).ready(function() {

  const renderTweets = function(tweets) {
    $(".tweetContainer").empty();
    console.log('renderTweets called');
    for (const tweetObj of tweets) {
      $(".tweetContainer").prepend(createTweetElement(tweetObj));
    }
  };

  const dateConvert = function(unix) {
    let date = new Date(unix);
    let fdate = date.getFullYear() + '/' + ("0" + (date.getMonth() + 1)).slice(-2) + '/' + ("0" + date.getDate()).slice(-2);
    return fdate;
  };

  const createTweetElement = function(tweet) {
    const $tweet = `
  <article class="tweet">
  <header>
    <span><i class="fas fa-fire"></i> ${tweet.user.name}</span>
    <span class="hash">${tweet.user.handle}</span>
  </header>
  
  <body>${escape(tweet.content.text)}</body>
  <hr>
  <footer>
    <output> ${dateConvert(tweet.created_at)} </output>
    <div>
      <i class="fas fa-flag"></i>
      <!--colorvvagrant </i>-->
      <i class="far fa-retweet"></i>
      <!--<i class="fas fa-flag"></i>-->
      <i class="far fa-heart"></i>
      <!--<i class="fas fa-heart"></i>-->
    </div>
  </footer>
  </article>
  `;
    return $tweet;
  };

  const $button = $('#load-more-posts');
  $button.on('click', function() {
    console.log('Button clicked, performing ajax call...');
  });

  const loadTweets = function() {
    $.get("/tweets")
      .then(data => renderTweets(data));
  };

  $('nav button').click(function() {
    $('.new-tweet').toggleClass('visible');
  });



  $('form').submit(function(text) {
    console.log('Button clicked, adding new tweet to data...', this);
    text.preventDefault(); // stops page from action if its not specific to what we want
    const tweetData = $(this).serialize();
    const textVal = $("textarea.text-box").val();
    if (!textVal) {
      $(".err").html(`<i class="fas fa-exclamation-triangle"></i>Text empty!`);
      return;
    }
    if (textVal.length > 140) {
      return;
    }

    $.post("/tweets", tweetData) // this is the text from the form
      .then(() => {
        loadTweets();
      }) // anon arrow to make sure post && get has recieved tweetData first
      .catch(err => console.log("Error message = ", err));
  });

  loadTweets();
});