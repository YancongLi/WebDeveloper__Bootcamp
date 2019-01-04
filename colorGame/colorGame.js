let numOfSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll('.square');
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.getElementById('message')
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let modeBtns = document.querySelectorAll('.mode');

init();

function init () {
	setupModeButtons();
	setupSquareListeners();
	resetColors();
	resetButton.addEventListener('click', function () {
		resetColors();
	});
}

function setupModeButtons () {
	for(let i = 0; i < modeBtns.length; i++) {
		modeBtns[i].addEventListener("click", function () {
			modeBtns.forEach(function (btn) {
				btn.classList.remove('selected');
			});
			this.classList.add('selected');
			this.textContent === 'Easy' ? numOfSquares = 3 : numOfSquares = 6;
			resetColors();
		});
	}
}

function setupSquareListeners () {
	for (let i = 0; i < squares.length; i++) {
		squares[i].addEventListener('click', function () {
			let clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = 'Correct!';
				resetButton.textContent = 'Play Again?';
				changeColors(pickedColor);
				h1.style.background = pickedColor;
			}else {
				this.style.backgroundColor = '#232323';
				messageDisplay.textContent = 'Try Again!'
			}
		});
	}
}

function resetColors() {
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = 'New Colors';
	messageDisplay.textContent = '';
	for (let i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];
		}else {
			squares[i].style.display = 'none';
		}
	}
	h1.style.backgroundColor = 'steelblue';
}

function changeColors(color) {
	for (let i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(num) {
	let arr = [];
	for (let i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	let r = Math.floor(Math.random() * ((255 - 0) + 1)); //range = (max - min) + 1
	let g = Math.floor(Math.random() * ((255 - 0) + 1));
	let b = Math.floor(Math.random() * ((255 - 0) + 1));
	let rgb = `rgb(${r}, ${g}, ${b})`;
	return rgb;
}

