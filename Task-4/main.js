function check(string){
	for (let i = 0;i < string.length;i++){
		if (string[i] >= '0' && string[i] <= '9') return false;
	}
	return true;
}
function add(){
	if (check(document.getElementById('username').value)){
	 	document.getElementById('block').append('FullName: ' + document.getElementById('username').value,'  Age:',document.getElementById('age').value);
	 	document.getElementById('block').innerHTML = document.getElementById('block').innerHTML + '<br></br>';
	}else{
		alert('Name doesn\'t include number');
	}
}
