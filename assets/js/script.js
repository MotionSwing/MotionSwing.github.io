$(window).on('load', function() {
	$('#toggle').on('click', function() {
		$('.container-fluid .card:nth-child(1)').toggleClass('col-md-8');
	});
});


function modal_click() {
	var submitter = $('#submitter').val();
	var message = $('#message').val();
	$('#ModalLongTitle').text('Thank you '  + submitter + '!');
	$('#ModalLong .modal-body').text('Your message: "' + message + '"');
}