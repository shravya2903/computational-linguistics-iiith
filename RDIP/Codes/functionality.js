function generateRandomWords(str)
{
	let counter = str.length;
	while(counter>0){
		let index = Math.floor(Math.random()*counter);
		counter--;
		
		let temp = str[counter];
		str[counter] = str[index];
		str[index] = temp;
	}
	return str;
}
function displaySentence(){
	document.getElementById("sentence2").style.display="block";
}
function hideButton(buttonId){
	console.log(buttonId);
	document.getElementById(buttonId).style.display ="none";
}
function showButton(buttonId){
	var buttonVal = document.getElementById(buttonId).innerHTML;
	console.log(buttonVal);
	document.getElementById("words-as-sentence").style.display="block";
	document.getElementById("words-as-sentence").innerHTML += buttonVal+" ";
}
function generateWords(subValue,text)
{
	var str = text.split(' '); 
	str = generateRandomWords(str);
	var clicked = false; var set=false;
	var count = 0;
	for(var i=0;i<str.length;i++){
		var bttn = document.createElement("button");
		bttn.id=i;
		var val =i;
		bttn.innerHTML = str[i];
		document.getElementById("display_words").appendChild(bttn);
		document.getElementById(val).style.margin = "15px";
		document.getElementById(val).addEventListener("click", function(){
			clicked = true;
			count++;
			if(count == 1){
				displaySentence();
			}
			console.log(count);
			console.log(document.getElementById(this.id).value);
			showButton(this.id);
			hideButton(this.id);
			
			if(count == 1){
				document.getElementById("words-as-sentence-1").style.display="block";
				var btn = document.createElement('Button');
				btn.id="reform";
				btn.innerHTML = "Re-form the sentence";
				document.getElementById("words-as-sentence-1").appendChild(btn);
				
			}
		});
	}
}
function generateRandom(subValue)
{
	var arr;
	if(subValue == "english")
	{
		arr = new Array();
		arr[0] = English.a[0];
		arr[1] = English.b[0];
		arr[2] = English.c[0];
		arr[3] = English.d[0];
		arr[4] = English.e[0];
		arr[5] = English.f[0];
		arr[6] = English.g[0];
		arr[7] = English.h[0];
		arr[8] = English.i[0];
		arr[9] = English.j[0];
	}
	else{
		arr = new Array();
		arr[0] = Hindi.a[0];
		arr[1] = Hindi.b[0];
		arr[2] = Hindi.c[0];
		arr[3] = Hindi.d[0];
		arr[4] = Hindi.e[0];
		arr[5] = Hindi.f[0];
		arr[6] = Hindi.g[0];
	}
	y = Math.floor(Math.random()*arr.length);
	var text = arr[y];
	generateWords(subValue,text);
	document.getElementById("display_words").style.display="block";
    arr.splice(y, 1);
}
function displayButtons(subValue){
	if(subValue == "english")
	{
		generateRandom(subValue);
	}
	else if(subValue == "hindi")
	{
		generateRandom(subValue);
	}
}
function getOption(subValue){
	if(subValue == "english" || subValue == "hindi"){
		document.getElementById("words_sentence").style.display="block";
	}
	else if(subValue=="null"){
		document.getElementById("words_sentence").style.display="";
	}
	displayButtons(subValue);
}