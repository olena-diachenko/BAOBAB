$(document).ready(function () {
  // Search

  $('.header__search,.header__input').click(function (event) {
    $('.header__search,.header__input').toggleClass('active');
  });

  // Burger

  $('.header__burger').click(function (event) {
    $('.header__burger,.header__nav,.header__burger-inner').toggleClass('open');
  });
})

// Video

jQuery(function($) {
  //play video btn
  $(".about__video-section video").removeAttr("controls"); //hide controls by default
  //on clicking play button
  $(".about__video-section").each(function() {
    $(".about__video-btn").click(function() {
      var video = $(this)
        .closest(".about__video-section")
        .find("video")
        .get(0);
      video.play();
      video.controls = true;
      $(this).css("visibility", "hidden");
      return false;
    });

    //when video is paused
    $(this)
      .find("video")
      .click(function() {
        var video = $(this).get(0);
        video.pause();
        video.controls = false;
        $(this)
          .siblings(".about__video-btn")
          .css("visibility", "visible");
        return false;
      });

    //when video has ended
    $(this)
      .find("video")
      .on("ended", function() {
        $(this).get(0).controls = false;
        $(this)
          .siblings(".about__video-btn")
          .css("visibility", "visible");
        $(this)
          .get(0)
          .load();
      });
  });
});
 
// Slider

$('.clients__wrap').slick({
  arrows: false,
  centerPadding: '0',
  slidesToShow: 6,
  responsive: [
    {
      breakpoint: 1279,
      settings: {
        dots: true,
        arrows: false,
        centerPadding: '15px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 767,
      settings: {
        dots: true,
        arrows: false,
        centerPadding: '15px',
        slidesToShow: 1
      }
    }
  ]
});

// Scroll-behavior

$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (t) {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
        var e = $(this.hash);
        e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"), e.length && (t.preventDefault(), $("html, body").animate({
            scrollTop: e.offset().top
        }, 400, function () {
            var t = $(e);
            if (t.focus(), t.is(":focus")) return !1;
            t.attr("tabindex", "-1"), t.focus()
        }))
    }
});

// Modal

var modal = document.getElementById("modal");
var btn = document.getElementsByClassName("contacts__card-btn");
btn[0].onclick = function() {
  modal.style.display = "block";
}
btn[1].onclick = function () {
  modal.style.display = "block";
}
btn[2].onclick = function () {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
let eventsArray = ["click","touchstart", "touchend"];

eventsArray.forEach( function(event) { 
    window.addEventListener(event, function(e) {
      if (e.target === modal) {
          modal.style.display = "none";
      }
    }, false);
});