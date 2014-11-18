function showSelection() {
    document.getElementById('gameSelectionBox').css('visibility', 'visible'); 
//    $("gameSelectionBox").css("visibility", "visible");

}

function hideSelection() {
    document.getElementById('gameSelectionBox').css('visibility', 'hidden'); 
//    $("gameSelectionBox").css("visibility", "visible");

}



//	    res.send('<html> <script src="//static.miniclipcdn.com/js/game-embed.js"></script> <body> <div id="miniclip-game-embed" data-game-name="free-running-2" data-theme="0" data-width="680" data-height="510" data-language="en"><a href="http://www.miniclip.com/games/free-running-2/">Play Free Running 2</a></div> <p style="text-align:center;"><a href="http://www.miniclip.com/games/free-running-2/" target="_blank">Play Free Running 2</a> / More <a href="http://www.miniclip.com/games/genre-3/" target="_blank">Sports games</a></p> </body> </html>');


var games = new Array("FreeRunning2", "");
var gameSources = new Array(FreeRunning2Src, "");
var FreeRunning2Src = '<embed width="800" height="600" base="http://external.kongregate-games.com/gamez/0019/2194/live/" src="http://external.kongregate-games.com/gamez/0019/2194/live/embeddable_192194.swf" type="application/x-shockwave-flash"></embed><br/>Play free games at <a href="http://www.kongregate.com/">Kongregate</a>';


function loadGame() {
    window.onload = function() {
	var url = location.href;
	var game = url.split('?')[1];
	var gameIndex = found(game);
	if (gameIndex != -1) {
	    //we found it
	    var gameSource = gameSources[gameIndex];
	    document.getElementById("game").innerHTML = gameSource;

	}
    }

}

function findGame(game) {
    var found = -1;
    for (i = 0; i < games.length; i++) {
	if (game == games[i]) {
	    found = i;
	}
    }
}



