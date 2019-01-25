var left_button = document.getElementById("left_button");
var right_button = document.getElementById("right_button");
var left_div_height = 90;
left_button.addEventListener("click",increaseLeft);
right_button.addEventListener("click",increaseRight);

function increaseLeft(){
	var left_div = left_button.parentNode;
	var new_div =  document.createElement("div");
	new_div.className = "left_intern_box";
	new_div.style = "margin:10px 10% 10px 10%; background-color: white; width:80%;";
	new_div.style.height = left_div_height + "%";
	left_div.appendChild(new_div);
	console.log(left_div.clientHeight);
	console.log(left_div.scrollHeight);

	if(left_div.clientHeight < left_div.scrollHeight){
		var arr = document.getElementsByClassName("left_intern_box");
		console.log(arr);
		var dHeight = parseInt(window.getComputedStyle(left_div).height);
		left_div_height = (90 - 90*(10*arr.length)/(0.9*dHeight))/arr.length;
		for(var i = 0; i < arr.length; i++){
			arr[i].style.height = left_div_height+ "%";
		}
	}
}

function increaseRight(){

}