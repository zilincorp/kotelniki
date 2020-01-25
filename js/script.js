$("#video-play").click(function () {
  document.getElementById('first-video').play();
  $('#video-play').hide();
})


$("#first-video").prop("volume", 0.3).click(function () {
  this[this.paused ? "play" : "pause"]();
});
