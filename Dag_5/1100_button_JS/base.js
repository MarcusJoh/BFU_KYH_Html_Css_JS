function buttonFunc(){
	
	//document.write("<p> Click!</p>");
	document.getElementById("buttonDemo").innerHTML = "enter stuff into the html";
}








//this will toggle an ID to display none or to display block
function showToggle() {

	// gets the tag that has the ID
	let divEle = document.getElementById("toggleDiv");

	// check it is display none
	if (divEle.style.display === "none") {
		// if it is, make it display block
		divEle.style.display = "block";
	} else {
		// if no make it display none
		divEle.style.display = "none";
	}

}