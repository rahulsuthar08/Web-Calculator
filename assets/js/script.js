function getDatashow(){
	return document.getElementById("datashow-value").innerText;
}
function printDatashow(num){
	document.getElementById("datashow-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printDatashow("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var datashow=getDatashow();
			if(output==""&&datashow!=""){
				if(isNaN(datashow[datashow.length-1])){
					datashow= datashow.substr(0,datashow.length-1);
				}
			}
			if(output!="" || datashow!=""){
				output= output==""?output:reverseNumberFormat(output);
				datashow=datashow+output;
				if(this.id=="="){
					var result=eval(datashow);
					printOutput(result);
					printDatashow("");
				}
				else{
					datashow=datashow+this.id;
					printDatashow(datashow);
					printOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}