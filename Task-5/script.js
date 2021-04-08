let count = -1;
function apppearMessage(){
	count++;
	let messageBlock = document.getElementsByClassName('message-appear');
	messageBlock[0].innerHTML += '<div class="message"> <i class="fas fa-times-circle"  onclick=closeMessage()></i> </div>';
}
function closeMessage(){
	let messageBlock = document.getElementsByClassName('message');
	messageBlock[count].style.display = 'none';
}
function appearIcon(){
	let searchingInput = document.getElementById('searching');
	let facebookIcon = document.getElementById('fb-icon');
	let backIcon = document.getElementById('appearIcon');
	facebookIcon.style.display = 'none';
	backIcon.style.display = 'inline-block'
}