jQuery(function() {

	let my_switch = false;

	$('#p1').click(function () {

	if (my_switch == false) {
		my_switch = true;

		$(this).html('Congratulations!');

		$('#my_image').attr('src', 'images/nothired.gif');


	} else {
		my_switch = false;

		$(this).html('Condolences');

			$('#my_image').attr('src', 'images/employment.gif');




	}



	});

});
