$(window).on('load', function(){
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});

$(document).ready(function(){
    let vw = $(window).width()/2;
    const spacing = 100; // uniform spacing for balloons

    // Reposition balloons on window resize
    $(window).resize(function(){
        vw = $(window).width()/2;
        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
        $('#b11').animate({top:240, left: vw - spacing*3}, 500);
        $('#b22').animate({top:240, left: vw - spacing*2}, 500);
        $('#b33').animate({top:240, left: vw - spacing}, 500);
        $('#b44').animate({top:240, left: vw}, 500);
        $('#b55').animate({top:240, left: vw + spacing}, 500);
        $('#b66').animate({top:240, left: vw + spacing*2}, 500);
        $('#b77').animate({top:240, left: vw + spacing*3}, 500);
    });

    // --- Functions for each sequence ---
    function turnOnLights() {
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');

		// Hide all buttons
		$('.navbar button').fadeOut('slow');

		// Start the rest of the sequence AFTER user clicks
		setTimeout(playMusic, 4000);
		setTimeout(showBanner, 10000);
		setTimeout(flyBalloons, 16000);
		setTimeout(fadeInCake, 23000);
		setTimeout(lightCandle, 28000);
		setTimeout(showWishMessage, 32000);
		setTimeout(showStory, 37000);
	}

    function playMusic() {
        $('.song')[0].play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');
        $('body').addClass('peach-after');
    }

    function showBanner() {
        $('.bannar').addClass('bannar-come');
    }

    function flyBalloons() {
        $('.balloon-border').animate({top:-500},8000);
        $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
        loopAllBalloons();
    }

    function fadeInCake() {
        $('.cake').fadeIn('slow');
    }

    function lightCandle() {
        $('.fuego').fadeIn('slow');
    }

    function showWishMessage() {
        vw = $(window).width()/2; // recalc window width
        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();

        // Rename balloon IDs
        $('#b1').attr('id','b11');
        $('#b2').attr('id','b22');
        $('#b3').attr('id','b33');
        $('#b4').attr('id','b44');
        $('#b5').attr('id','b55');
        $('#b6').attr('id','b66');
        $('#b7').attr('id','b77');

        // Animate to final positions
        $('#b11').animate({top:240, left: vw - spacing*3}, 500);
        $('#b22').animate({top:240, left: vw - spacing*2}, 500);
        $('#b33').animate({top:240, left: vw - spacing}, 500);
        $('#b44').animate({top:240, left: vw}, 500);
        $('#b55').animate({top:240, left: vw + spacing}, 500);
        $('#b66').animate({top:240, left: vw + spacing*2}, 500);
        $('#b77').animate({top:240, left: vw + spacing*3}, 500);

        $('.balloons').css('opacity','0.9');
        $('.balloons h2').fadeIn(3000);
    }

	function showStory() {
		$('.cake').fadeOut(1000); // 1s fade out
		$('.message').fadeIn(1000); // 1s fade in

		let i = 0;
		function msgLoop(i){
			$("p:nth-child("+i+")").fadeOut(1500).delay(1500).promise().done(function(){
				i++;
				$("p:nth-child("+i+")").fadeIn(1500).delay(2000);
				if(i < 50) msgLoop(i);
				else $('.cake').fadeIn(1000);
			});
		}
		msgLoop(0);
	}

    // --- Balloon movement loops ---
    function loopOne() { animateBalloon('#b1', loopOne); }
    function loopTwo() { animateBalloon('#b2', loopTwo); }
    function loopThree() { animateBalloon('#b3', loopThree); }
    function loopFour() { animateBalloon('#b4', loopFour); }
    function loopFive() { animateBalloon('#b5', loopFive); }
    function loopSix() { animateBalloon('#b6', loopSix); }
    function loopSeven() { animateBalloon('#b7', loopSeven); }

    function animateBalloon(selector, callback) {
        const randleft = 1000*Math.random();
        const randtop = 500*Math.random();
        $(selector).animate({left:randleft, bottom:randtop},10000, callback);
    }

    function loopAllBalloons() {
        loopOne(); loopTwo(); loopThree();
        loopFour(); loopFive(); loopSix(); loopSeven();
    }

	$('#turn_on').click(turnOnLights);
});