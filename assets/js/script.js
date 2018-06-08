function sendMail(){
	const submitter = $('#submitter').val().trim();
	const body = encodeURIComponent(`Hi Jonathan, 

	${$("#message").val().trim()}

	Regards,
	${submitter}
	`);
	const subject = encodeURIComponent('Message for Jonathan White');
	const message = `mailto:jon.white2@gmail.com?subject=${subject}&body=${body}`;
	window.open(message);

	const thanks = $("<p>").text('Thank you!');
	$("#form-wrapper").empty().addClass('thankyou').append(thanks);
};

