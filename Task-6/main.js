let tagUl = document.getElementsByTagName('ul');
async function main(){
	let information = await axios.get('https://6065d36cb8fbbd00175677e7.mockapi.io/s-group/users');
	
	for (x of information.data){
		tagUl[0].innerHTML += '<li>' + 'name: ' + x['name'] + '    id: ' + x['id'] + '</li>';
	}
}
main();
async function add(){
	let newUser = {
		'name': document.getElementById('username').value,
	}
	let result = await axios.post('https://6065d36cb8fbbd00175677e7.mockapi.io/s-group/users',newUser);
	await main();
}
