var categories = new Array("", "category1", "category2", "category3", "category4", "category5");
var selection = new Array("", "category1", "category2", "category3", "category4", "category5");

var displayed = new Array(-1, 0, 0, 0, 0, 0);  

for (i = 1; i < categories.length; i++) {

    document.getElementById(categories[i]).onclick = function(){
	if (displayed[i] == 0) {
	    hideAll();
            document.getElementById("gameSelectionBox" + i).style.visibility = "visible";
            displayed[i] = 1;
	}
	
	else {
            document.getElementById("gameSelectionBox" + i).style.visibility = "hidden";
            displayed[i] = 0;
	}
    };
    
}

function hideAll() {

    for (i = 1; i < categories.length; i++) {
	document.getElementById(categories[i]).onclick = function(){
            document.getElementById("gameSelectionBox" + i).style.visibility = "hidden";
	};
	displayed[i] = 0;
    }

}

function clickCheck(i) {
    document.getElementById(categories[1]).onclick = function(){
        alert(displayed[1]);

	if (displayed[1] == 0) {
            document.getElementById("gameSelectionBox1").style.visibility = "visible";
            displayed[1] = 1;
            alert(displayed[1]);
	}
	
	else {
            document.getElementById("gameSelectionBox1").style.visibility = "hidden";
            displayed[1] = 0;
            alert(displayed[1]);

	}
    };

}


designSelectionBox() {
    var selectionBox = document.createElement("gameSelectionBox");
    selectionBox.style.float = left;
    selectionBox.style.border = 1px red solid;
    selectionBox.style.left = 0%; 
    selectionBox.style.top = 0%; 
    selectionBox.style.height = 500px; 
    selectionBox.style.width = 30%; 
    selectionBox.style.visibility = hidden; 

}
