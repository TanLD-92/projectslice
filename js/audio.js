var music = document.getElementById('music'); // id for audio element
var pButton = $(".play-audio"); // play button
function play() {
	// start music
	if (music.paused) {
		// remove pause, add play
		pButton.removeClass('play');
		pButton.addClass('play');
		music.play();
	} else { // pause music
		// remove play, add pause
		pButton.removeClass('play');
		pButton.addClass('pause');
		music.pause();
	}
}

jQuery(document).ready(function() {	
	var windowWidth = $('body').width();
	if(windowWidth < 1121) {
		pButton.removeClass('play');
		pButton.addClass('pause');
		music.pause();
	} else {
		// remove pause, add play
		pButton.removeClass('play');
		pButton.addClass('play');
		music.play();
	}

});