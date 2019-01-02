// let firstLi = document.querySelector('li');
let allLis = document.querySelectorAll('li');

for (let i = allLis.length - 1; i >= 0; i--) {
	allLis[i].addEventListener('mouseover', function () {
		this.classList.add('selected');
	});
	allLis[i].addEventListener('mouseout', function () {
		this.classList.remove('selected');
	});
	allLis[i].addEventListener('click', function () {
		this.classList.toggle('done');
	});
}