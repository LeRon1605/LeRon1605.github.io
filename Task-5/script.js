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