//new 

var window = new Window("palette", "My script", undefined);
window.orientation= "column";

var text = window.add("statictext", undefined, "hello flowyzzzz" );

var group = window.add("group", undefined, "");
group.orientation= "row";

var buttonone = group.add("button", undefined,"Button1"); 
var buttontwo = group.add("button", undefined,"Button2");

var array = ["Test1", "Test2", "Test3", "Test4", "Test5"];

var dropdown = window.add("dropdownlist", undefined,array);
dropdown.selection = 0;
dropdown.size = [180, 25];

var panel = window.add("panel", undefined, "Flowyz");
panel.orientation= "row";

var radio = panel.add("radiobutton", undefined,"Radio");
var checkbox = panel.add("checkbox", undefined,"Checkbox");

var textbox = window.add("edittext", undefined,"My input");

var slider = window.add("slider", undefined,"");
window.center();
window.show(); 

buttonone.onClick = function() {
    modifyLayers();

}

buttontwo.onClick = function() {
    alert("Hello you clicked button two ogogogogog!!!");

}

function modifyLayers() {
    alert("Hello");
}
