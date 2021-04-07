let tagUl = document.getElementsByTagName('ul');
async function main(){
	let information = await axios.get('https://6065d36cb8fbbd00175677e7.mockapi.io/s-group/users');
	for (x of information.data){
		tagUl[0].innerHTML += '<li>' + 'Name: ' + x['name'] + '- Id: ' + x['id'] + '</li>';
	}
}
main();
async function add(){
	let userName = document.getElementById('username').value;
	if (userName.trim() !== ''){
		let newUser = {
			'name': userName
		}
		let result = await axios.post('https://6065d36cb8fbbd00175677e7.mockapi.io/s-group/users',newUser);
	}else{
		alert('Invalid input');
	}
	
	await main();
}
