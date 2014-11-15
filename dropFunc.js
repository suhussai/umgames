var ma = ["dropmenu1","dropmenu2","dropmenu3"];
function dropMenu(x){
    for (var m in ma) {
	if(ma[m] != x){
	    document.getElementById(ma[m]).style.display = "none";
	}
    }
    if(document.getElementById(x).style.display == 'block'){
	fadeOut(x);
    } else {
	fadeIn(x);
    }
}

