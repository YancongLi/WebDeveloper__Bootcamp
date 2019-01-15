//Check off specific todos by clicking
$('ul').on('click', 'li', function () {//on() will add listeners for all potential future elements
	$(this).toggleClass('completed');
});

//Click on X to delete Todo
$('ul').on('click', 'span', function(event) {
	$(this).parent().fadeOut(500, function () {// -> a callback function here
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		// console.log('You hit ENTER');
		let input = $(this).val();
		$('ul').append('<li><span>X<span> ' + input + '</li>');
		$(this).val('');
	}
});

$('.fa-plus').click(function(event) {
	$("input[type='text']").fadeToggle();
});