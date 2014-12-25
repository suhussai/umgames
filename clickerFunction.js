var h = screen.height;
var w = screen.width;
var selectionBoxWidth = w*0.30;
var gameBoxWidth = w - selectionBoxWidth;

//var gameBoxController = document.getElementById("gameBox");
//gameBoxController.width = gameBoxWidth;
//gameBoxController.height = h;

$("#gameBox").width = gameBoxWidth;
$("#gameBox").height = h;

function hideAll() {
    
    for (i = 1; i < categories.length; i++) {
	if (displayed[i] == 1) {
	    //	    var selectionBox = document.getElementById(gameSelectionBox[i]);
	    $("#"+gameSelectionBox[i]).css("float","left");
	    $("#"+gameSelectionBox[i]).css("border", "0px red solid");
	    $("#"+gameSelectionBox[i]).css("left","0%");
	    $("#"+gameSelectionBox[i]).css("top","0%");
	    $("#"+gameSelectionBox[i]).css("height", h);
	    $("#"+gameSelectionBox[i]).css("width", selectionBoxWidth);
	    $("#"+gameSelectionBox[i]).css("visibility", "hidden");
	    $("#"+gameSelectionBox[i]).css("position", "absolute");
	    displayed[i] = 0;
	}
    }
}

function showOne(i) {
//    var selectionBox = document.getElementById(gameSelectionBox[i]);
    $("#"+gameSelectionBox[i]).css("float","left");
    $("#"+gameSelectionBox[i]).css("border", "0px red solid");
    $("#"+gameSelectionBox[i]).css("left","0%");
    $("#"+gameSelectionBox[i]).css("top","0%");
    $("#"+gameSelectionBox[i]).css("height", h);
    $("#"+gameSelectionBox[i]).css("width", selectionBoxWidth);
    $("#"+gameSelectionBox[i]).css("visibility", "visible");
    $("#"+gameSelectionBox[i]).css("position", "absolute");
    displayed[i] = 1;
    
    for (j = 1; j < gameSrc[i].length; j++) {
	$("#img"+i+j).attr("src", gameSrc[i][j]);
	$("#ling"+i+j).attr("href", "play.html?name=" +  gameTitles[i][j]);
    }
}

function clickCheck(i) {
    $("#" + categories[i]).click(function(){
	if (displayed[i] == 0) {
            hideAll();
            showOne(i);
	}
	else {
	    hideAll();
        }
    });
    
    $("#" + titles[i]).click(function(){
	if (displayed[i] == 0) {
            hideAll();
            showOne(i);
	}
	else {
	    hideAll();
        }
    });



    
}
