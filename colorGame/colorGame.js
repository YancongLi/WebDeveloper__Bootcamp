let numOfSquares = 6;
let colors = generateRandomColors(numOfSquares);
let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.getElementById('message')
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let easyBtn = document.querySelector('#easyBtn');
let hardBtn = document.querySelector('#hardBtn');

easyBtn.addEventListener('click', function () {
	this.classList.add('selected');
	hardBtn.classList.remove('selected');
	numOfSquares = 3;
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (let i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
	}
	h1.style.backgroundColor = 'steelblue';
	messageDisplay.textContent = '';
});

hardBtn.addEventListener('click', function () {
	this.classList.add('selected');
	easyBtn.classList.remove('selected');
	numOfSquares = 6;
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = 'block';
	}
	h1.style.backgroundColor = 'steelblue';
	messageDisplay.textContent = '';
});

resetButton.addEventListener('click', function () {
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	//Change colors to squares
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = 'steelblue';
	messageDisplay.textContent = '';
	this.textContent = 'New Colors';
});

colorDisplay.textContent = pickedColor;
for (let i = 0; i < squares.length; i++) {
	//Add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//Add click listeners to squares
	squares[i].addEventListener('click', function () {
		//Grab color of the clicked square
		let clickedColor = this.style.backgroundColor;
		//Compare color to pickedColor
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





