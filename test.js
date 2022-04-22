$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) {
    $("#top").fadeIn();
  } else {
    $("#top").fadeOut();
  }
});

$("#top").click(function () {
  $("body,html").animate({
    scrollTop: 0,
  });
});
