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
function hideElement(elementId){
	//console.log(elementId);
	document.getElementById(elementId).style.display ="none";
}
function showElement(elementId){
	document.getElementById(elementId).style.display = "inline";
}
function showButton(buttonId){
	var buttonVal = document.getElementById(buttonId).innerHTML;
	console.log(buttonVal);
	document.getElementById("words-as-sentence").style.display="block";
	document.getElementById("words-as-sentence").innerHTML += buttonVal+" ";
}
function clearData(id){
	document.getElementById(id).innerHTML="";
}
function generateWords(subValue,text,varr,y)
{
	var str = text.split(' '); 
	str = generateRandomWords(str);
	var clicked = false;
	var hide = false;
	var v = false;
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
			//console.log(count);
			var id = this.id;
			//console.log(document.getElementById(this.id).value);
			showButton(this.id);
			hideElement(this.id);
			if(count == 1 && hide==false){
				document.getElementById("words-as-sentence-1").style.display="block";
				var btn = document.createElement('Button');
				btn.id="reform";
				btn.innerHTML = "Re-form the sentence";
				document.getElementById("words-as-sentence-1").appendChild(btn);	
			}
			else if(count == 1&& hide == true){
				document.getElementById("words-as-sentence-1").style.display="block";
				document.getElementById("reform").style.display="block";
				console.log("this");
			}
			if(count == str.length){
				v = true;
				if(hide == false){
					document.getElementById("words-as-sentence-2").style.display = "block";
					var bttn = document.createElement("Button");
					bttn.id = "checkCorrectness";
					bttn.innerHTML = "Check the Correctness of this sentence";
					document.getElementById("words-as-sentence-2").appendChild(bttn);
				}
				else if(hide == true){
					document.getElementById("words-as-sentence-2").style.display = "block";
					document.getElementById("checkCorrectness").style.display="block";
				}	
				count=0;
				document.getElementById("checkCorrectness").addEventListener("click",function(){
					//get the sentence formed.
					var sentence = document.getElementById("words-as-sentence").innerHTML;
					console.log(sentence);
					//check whether the sentence matches.
					var compare;
					if(subValue == "english"){
						var index = varr[y];
						switch(index){
							case "a": compare = English.a;break;
							case "b": compare = English.b;break;
							case "c": compare = English.c;break;
							case "d": compare = English.d;break;
							case "e": compare = English.e;break;
							case "f": compare = English.f;break;
							case "g": compare = English.g;break;
							case "h": compare = English.h;break;
							case "i": compare = English.i;break;
							case "j": compare = English.j;break;
						}
					}
					else{
						var index = varr[y];
						switch(index){
							case "a": compare = Hindi.a;break;
							case "b": compare = Hindi.b;break;
							case "c": compare = Hindi.c;break;
							case "d": compare = Hindi.d;break;
							case "e": compare = Hindi.e;break;
							case "f": compare = Hindi.f;break;
							case "g": compare = Hindi.g;break;
						}
					}
					var i,result=false;
					for(i=0;i<compare.length;i++){
						if(sentence.localeCompare(compare[i]) == 1){
							result = true;
							break;
						}
						else{
							result = false;
						}
					}
					document.getElementById("result").style.display="block";
					if(result == true){
						document.getElementById("result").innerHTML = "Right Answer";
					}
					else{
						document.getElementById("result").innerHTML = "Wrong Answer";
					}
					sentence="";
				});
			}
			document.getElementById("reform").addEventListener("click",function(){
				//have to revert the sentence back to the same form.
				showElement(id);
				hideElement("sentence2");
				hideElement("words-as-sentence");
				hideElement("words-as-sentence-1");
				hideElement("reform");
				if(v == true){
					hideElement("checkCorrectness");
					hideElement("words-as-sentence-2");
					clearData("result");
					hideElement("result");
				}
				hide = true;
				count = 0;
				clearData("words-as-sentence");
				clicked=false;
				v=false;
				//i=0;
			});
			
		});
	}
}
function generateRandom(subValue)
{
	var arr;
	if(subValue == "english")
	{
		arr = new Array();
		varr = new Array();
		arr[0] = English.a[0];varr[0] = "a";
		arr[1] = English.b[0];varr[1] = "b";
		arr[2] = English.c[0];varr[2] = "c";
		arr[3] = English.d[0];varr[3] = "d";
		arr[4] = English.e[0];varr[4] = "e";
		arr[5] = English.f[0];varr[5] = "f";
		arr[6] = English.g[0];varr[6] = "g";
		arr[7] = English.h[0];varr[7] = "h";
		arr[8] = English.i[0];varr[8] = "i";
		arr[9] = English.j[0];varr[9] = "j";
	}
	else{
		arr = new Array();
		varr = new Array();
		arr[0] = Hindi.a[0];varr[0] = "a";
		arr[1] = Hindi.b[0];varr[1] = "b";
		arr[2] = Hindi.c[0];varr[2] = "c";
		arr[3] = Hindi.d[0];varr[3] = "d";
		arr[4] = Hindi.e[0];varr[4] = "e";
		arr[5] = Hindi.f[0];varr[5] = "f";
		arr[6] = Hindi.g[0];varr[6] = "g";
	}
	y = Math.floor(Math.random()*arr.length);
	var text = arr[y];
	generateWords(subValue,text,varr,y);
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