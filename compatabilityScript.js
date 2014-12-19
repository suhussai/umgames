if (navigator.appCodeName == "Mozilla") {
    //http://stackoverflow.com/questions/574944/how-to-load-up-css-files-using-javascript
    link = document.createElement( "link" );
    link.href = "stylesM.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";
    
    document.getElementsByTagName( "head" )[0].appendChild( link );
}
