let inpHTMLCollection = document.getElementsByClassName('input');
let outputHTMLCollection = document.getElementsByClassName('output');
let today = new Date();
// Test 1
function test1(){
	outputHTMLCollection[0].value = `Now is ${today.getHours()}:${today.getMinutes()}`;
}
// Test 2
function test2(){
	let date = today.getDate();
	let month = today.getMonth() + 1;
	let year = today.getFullYear();
	outputHTMLCollection[1].value = `Today is ${month} - ${date} - ${year}   ||   ${month}/${date}/${year}    ||    ${date} - ${month} - ${year}    ||    ${date}/${month}/${year}`;
}
// Test 3
function test3(){
	let inp = inpHTMLCollection[2].value;
	if (inp.length == 0) alert('Invalid input');
	 	else{
	 		outputHTMLCollection[2].value = 'True';
			for (let i = 0;i < inp.length - 1;i++){
				if ((inp[i] < '0' || inp[i] > '9')|| (inp[i + 1] < '0' || inp[i + 1] > '9')){
					alert('Invalid Input. Numbers only');
					outputHTMLCollection[2].value = '';
					break;
				}
				if (inp[i + 1] - inp[i] < 0) {
					outputHTMLCollection[2].value = 'False';
					break;
				}
			}
	 	}
}
// Test 4
function test4(){
	let inp = inpHTMLCollection[3].value;
	outputHTMLCollection[3].value = '';
	for (x of inp){
		if ((x >= 'a' && x <= 'z') || (x >= 'A' && x <= 'Z')){
			outputHTMLCollection[3].value += String.fromCharCode(x.charCodeAt(0) + 1);		
		}else{
			alert('Invalid Input. Alphabet only');
			outputHTMLCollection[3].value = '';
			break;
		}
	}
}
// Test 5
function test5(){
	let inp = inpHTMLCollection[4].value;
	if (inp.length < 3 || inp.length % 2 === 0) alert('Invalid Input');
		else outputHTMLCollection[4].value = inp.slice(Math.floor(inp.length/2) - 1,Math.floor((inp.length/2) + 2));
}
test1();
test2();