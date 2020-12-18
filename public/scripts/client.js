$(document).ready(function() {

  const renderTweets = function(tweets) {
    $(".tweetContainer").empty();
    for (const tweetObj of tweets) {
      $(".tweetContainer").prepend(createTweetElement(tweetObj));
    }
  };

  const escape = function(str) { // Prevents users from posting script to container
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function(tweet) {
    const $tweet = `
  <article class="tweet">
  <header>
  <div class="avatar-user">
    <img src="${tweet.user.avatars}" />
    <span>${tweet.user.name}</span>
    </div>
    <span class="hash">${tweet.user.handle}</span>
  </header>
  
  <div class="tweetText">${escape(tweet.content.text)}</div>
  <hr>
  <footer>
    <output> ${moment(tweet.created_at).fromNow()} </output>
    <div class="footer-icons">
      <i class="far fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="far fa-heart"></i>
    </div>
  </footer>
  </article>
  `;
    return $tweet;
  };

  const loadTweets = function() {
    $.get("/tweets")
      .then(data => renderTweets(data));
  };

  $('nav button').click(function() {
    $('.new-tweet').toggleClass('visible');
    $('#tweetText').focus(); // focus on textbox functionality currently not working :(
  });

  $("nav button").click(function() {
    $('.new-tweet').slideToggle();
  });

  $(window).scroll(function() { // returns users to top of page by adding and removing classes
    if ($(this).scrollTop() > 100) {
      $('.upBtn').addClass('scrolled');
    } else {
      $('.upBtn').removeClass('scrolled');
    }
  });

  $(".upBtn").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  $('form').submit(function(text) {
    text.preventDefault(); // stops page from action if text is empty or too long
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