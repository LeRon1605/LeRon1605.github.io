window.addEventListener('scroll',(event) => {
	document.querySelector('.nav-bar').classList.toggle('nav-bar-scroll',window.scrollY > 0);
})
window.addEventListener('load',(event) => {
	document.querySelector('#my-image').style.transform = 'scale(1)';
})
let myTasks = document.querySelectorAll('.nav-bar li');
for (let i = 0;i < myTasks.length;i++){
	myTasks[i].onclick = (event) => {
		event.target.classList.add('isClicked');
		let liTags = event.target.parentElement.querySelectorAll('li');
		for (li of liTags){
			if (li != event.target) li.classList.remove('isClicked');
		}
	}
} 
let txt = 'Website and Mobile Developer',i = 0;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
  setInterval(() => {
  	  document.getElementById('type').style.borderRight = '3px solid gray'; 
  	  setTimeout(() => {
  	  		document.getElementById('type').style.borderRight = 'none'
  	  	}, 3000
  	  )
  	}, 5000
  )
}
window.addEventListener('load',typeWriter())
function loadPercentSkill(){
	let detail = document.querySelector('.about-me .detail');
	if (window.scrollY > detail.getBoundingClientRect().top+window.scrollY - 700) {

		let allSkills = document.querySelectorAll('.about-me .detail .my-inf #skills .skill .percent-skill div');
		let allPercent = document.querySelectorAll('.about-me .detail .my-inf #skills .skill .each-skill p:last-child');
		let text = document.querySelectorAll('.about-me .detail .my-inf > p');
		document.querySelector('.about-me .detail img').style.transform = 'translateY(0)';
		document.querySelector('.about-me .detail img').style.opacity = 1;
		let i = 0;
		for (tag of text) tag.classList.add('apear');
		function upPercent(){
			if (i <= 80){
				for (tag of allSkills) tag.style.width = `${i}%`;
				for (tag of allPercent) tag.innerText = `${i}%`;

				setTimeout(upPercent,3);
				i++
			}
		}
		upPercent();
		window.removeEventListener('scroll',loadPercentSkill);
	}
}
window.addEventListener('scroll',loadPercentSkill);
function loadNumber(){
	let tag = document.querySelector('#been-through');
	if (window.scrollY > tag.getBoundingClientRect().top+window.scrollY - 650) {
		let pTag = document.querySelectorAll('#been-through div p:last-child');
		let numTag = document.querySelectorAll('#been-through div p:last-child');
		let i = 0;
		function upPercent(){
			if (i <= 300){
				for (tag of numTag) tag.innerText = `${i}+`;
				setTimeout(upPercent,1);
				i++
			}
		}
		upPercent(300);
		window.removeEventListener('scroll',loadNumber);
	}
}
window.addEventListener('scroll',loadNumber);