
//the following code is what allows my navbar to appear and dissappear
//this variable is what knows wheter the navbar is hidden or shown
var navchecker=false
function navbar(){

if(navchecker==false){
    document.getElementById("navbar").style.visibility="visible";
    document.getElementById("buuton").style.backgroundColor="rgb(48, 46, 46)";
    navchecker=true;
}
else if(navchecker==true){
    document.getElementById("navbar").style.visibility="hidden";
    document.getElementById("buuton").style.backgroundColor="white";
    navchecker=false;
}
}
