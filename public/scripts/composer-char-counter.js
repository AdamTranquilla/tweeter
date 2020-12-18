$(document).ready(function() {
  const $tweetText = $("#tweet-text");
  const update = () => {

    const chars = 140 - $tweetText.val().length;
    const $counter = $("#counter");

    $counter.text(chars); // counter laerts user if there are too many char, resets once acceptable
    if (chars < 0) {
      $counter.css({ color: "red" });
      $(".err").html(`<i class="fas fa-exclamation-triangle"></i>Text too long!`);
    } else {
      $counter.css({ color: "#545149" });
      $(".err").html(``);
    }
  };
  $tweetText.on("keyup", update);
});