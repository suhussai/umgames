var h = screen.height;
var w = screen.width;
var selectionBoxWidth = w*0.30;
var gameBoxWidth = w - selectionBoxWidth;

var gameBoxController = document.getElementById("gameBox");
gameBoxController.width = gameBoxWidth;
gameBoxController.height = h;

function hideAll() {
    
    for (i = 1; i < categories.length; i++) {
	if (displayed[i] == 1) {
	    var selectionBox = document.getElementById(gameSelectionBox[i]);
	    selectionBox.style.float = "left";
	    selectionBox.style.border = "0px red solid";
	    selectionBox.style.left = "0%";
	    selectionBox.style.top = "0%";
	    selectionBox.style.height = h;
	    selectionBox.style.width = selectionBoxWidth;
	    selectionBox.style.visibility = "hidden";
	    selectionBox.style.position = "absolute";
	    displayed[i] = 0;
	}
    }
}

function showOne(i) {
    var selectionBox = document.getElementById(gameSelectionBox[i]);
    selectionBox.style.visibility = "visible"; 
    selectionBox.style.float = "left";
    selectionBox.style.border = "0px red solid";
    selectionBox.style.left = "0%"; 
    selectionBox.style.top = "0%"; 
    selectionBox.style.height = h; 
    selectionBox.style.width = selectionBoxWidth; 
    selectionBox.style.position = "absolute";
    displayed[i] = 1;
    
    for (j = 1; j < gameSrc[i].length; j++) {
	document.getElementById("img"+i+j).src = gameSrc[i][j];
	document.getElementById("ling"+i+j).href = "play.html?name=" +  gameTitles[i][j];
    }
}

function clickCheck(i) {
    document.getElementById(categories[i]).onclick = function(){
	if (displayed[i] == 0) {
            hideAll();
            showOne(i);
	}
	else {
	    hideAll();
        }
    };
    
    document.getElementById(titles[i]).onclick = function(){
	if (displayed[i] == 0) {
            hideAll();
            showOne(i);
	}
	else {
	    hideAll();
        }
    };



    
}
