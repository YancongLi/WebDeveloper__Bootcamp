function reverse (array) {
	for (var i = array.length - 1; i >= 0; i--) {
		console.log( array[i] );
	}
}

function isUniform (array) {
	var first = array[0];
	for (var i = 1; i < array.length; i++ ){
		if (first !== array[i]) {
			return false;
		}
	}
	return true;
}

function sumArray (array) {
	var sum = 0;
	array.forEach(function(element) {
		sum += element;
	});
	return sum;
}

function max (array) {
	var max = array[0];
	array.forEach(function(element) {
		if (element > max) {
			max = element;
		}
	});
	return max;
}