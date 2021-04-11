let count = -1;
function apppearMessage(){
	count++;
	let messageBlock = document.getElementsByClassName('message-appear');
	messageBlock[0].innerHTML += '<div class="message"> <div class="block"><i class="fas fa-times-circle"  onclick=removeMessage()></i> <i class="fas fa-minus" onclick=closeMessage()></i><i class="fas fa-phone"></i><i class="fas fa-video"></i></div></div>';
}
function closeMessage(){
	let messageBlock = document.getElementsByClassName('message');
	messageBlock[0].style.display = 'none';
}
function removeMessage(){
	let messageBlock = document.getElementsByClassName('message');
	messageBlock[0].parentNode.removeChild(messageBlock[0]);
	document.getElementById('avatar-icon').parentNode.removeChild(document.getElementById('avatar-icon'));
}
function closeAvatar(){
	document.getElementById('avatar-icon').parentNode.removeChild(document.getElementById('avatar-icon'));
}