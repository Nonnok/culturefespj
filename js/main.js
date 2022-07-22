// FadeUp Animation
function fadeAnime() {
  $('.fadeUpTrigger').each(function() {
    var elemPos = $(this).offset() . top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeUp');
    } else {
      $(this).removeClass('fadeUp');
    }
  });
}

$(window).scroll(function() {
  fadeAnime();
});

// PageTopLink Animation
function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $('#page-top').removeClass('DownMove');
    $('#page-top').addClass('UpMove');
  } else {
    if($('#page-top').hasClass('UpMove')){
      $('#page-top').removeClass('UpMove');
      $('#page-top').addClass('DownMove');
    }
  }
}

$(window).scroll(function () {
  PageTopAnime();
});

$('#page-top').click(function () {
  var scroll = $(window).scrollTop();
  if(scroll > 0) {
  $(this).addClass('floatAnime');
    $('body,html').animate({
        scrollTop: 0
    }, 2000,function() {
        $('#page-top').removeClass('floatAnime');
    }); 
  }
  return false;
});

// Slider Animation
$('#slider').vegas({
  slides: [
    { src: 'img/artiodactyls-heel-after.png' },
    { src: 'img/human3.png' },
    { src: 'img/rabbit2.png' },
    { src: 'img/mimic.png' },
    { src: 'img/jump-after.png' },
    { src: 'img/oneroom.png' },
    { src: 'img/posing-after.png' },
    { src: 'img/artiodactyls1-after.png'},
    { src: 'img/artiodactyls5-after.png' },
    { src: 'img/deformation-after.png' },
    { src: 'img/Child-after.png' },
    { src: 'img/Chine-after.png' },
    { src: 'img/artiodactyls3-after.png' },
    { src: 'img/sit-down-after.png' },
    { src: 'img/fullface-after.png' },
    { src: 'img/rabbit.png'},
    { src: 'img/artiodactyls6-after.png' },
    { src: 'img/artiodactyls4-after.png' },
  ],
  overlay: true,
  transition: 'fade2',
  transitionDuration: 2000,
  delay: 5000,
  animationDuration: 20000,
  animation: 'random',
});

// Typing Animation
function TextTypingAnime() {
	$('.TextTyping').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		var thisChild = "";
		if (scroll >= elemPos - windowHeight) {
			thisChild = $(this).children();
			thisChild.each(function (i) {
				var time = 100;
				$(this).delay(time * i).fadeIn(time);
			});
		} else {
			thisChild = $(this).children();
			thisChild.each(function () {
				$(this).stop();
				$(this).css("display", "none");
			});
		}
	});
}
$(window).on('load', function () {
	var element = $(".TextTyping");
	element.each(function () {
		var text = $(this).html();
		var textbox = "";
		text.split('').forEach(function (t) {
			if (t !== " ") {
				textbox += '<span>' + t + '</span>';
			} else {
				textbox += t;
			}
		});
		$(this).html(textbox);
	});
	TextTypingAnime();
});

// Loading Animation
var bar = new ProgressBar.Line(splash_text, {
  easing: 'easeInOut',
  duration: 0.2,
  color: '#555',
  trailWidth: 0.2,
  trailColor: '#bbb',
  text: {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      padding: '0',
      margin: '-30px 0 0 0',
      transform: 'translate(-50%, -50%)',
      'font-size': '1rem',
      color: '#fff',
    },
    autoStyleContainer: false
  },
  step: function(state, bar) {
    bar.setText(Math.round(bar.value() * 100) + '%');
  }
});
bar.animate(1.0, function() {
  $("#splash_text").fadeOut(10);
  $(".loader_cover-up").addClass("coveranime");
  $(".loader_cover-down").addClass("coveranime");
  $("#splash").fadeOut();
});