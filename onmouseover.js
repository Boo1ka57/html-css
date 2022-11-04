window.onload = init;
function init() {
	images = document.getElementsByTagName("img");
	for (var i = 0; i < images.length; i++) {
		images[i].onmouseover = showAnswer;
		images[i].onmouseout = reblur;
	}
};

function showAnswer (eventObj) {
	images = eventObj.target;
	name = images.id;
	name = "../Head-First-JavaScript-Programming-master/chapter9/" + name + ".jpg";
	images.src = name;
}
	
function reblur(eventObj) {
	images = eventObj.target;
	name = images.id;
	name = "../Head-First-JavaScript-Programming-master/chapter9/" + name + "blur.jpg";
	images.src = name;
}