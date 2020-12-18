$(document).ready(function() {
  const $tweetText = $("#tweet-text"); // this is an obj
  const update = () => {
    const chars = 140 - $tweetText.val().length;
    const $counter = $("#counter");
    $counter.text(chars);
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