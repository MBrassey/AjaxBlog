$(document).ready(function() {

    $("#jquery_jplayer_1").jPlayer({
        ready: function(event) {
            $(this).jPlayer("setMedia", {
				title: "Bubble",
				m4a: "http://jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
				oga: "http://jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
            });
        },
        swfPath: "http://jplayer.org/latest/dist/jplayer",
        supplied: "mp3, oga",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		remainingDuration: true,
		toggleDuration: true
    });
});                                      
