$(function() {

	// Get the form.
	var form = $('#contact-form');

	// Get the messages div.
	var formMessages = $('.form-messege');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Contact form btn
		var btn = $('#contact-form-btn');

		// Show sending message
		btn.text('Sending...');

		// Disable button
		btn.prop('disabled', true);

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text("Thanks! we will contact with you soon");

			// Clear the form.
			$('#contact-form input,#contact-form textarea').val('');

			// Enable button
			btn.prop('disabled', false);

			// Change button text back to submit
			btn.text('Submit');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			console.log(data);

			// Set the message text.
			$(formMessages).text('Oops! An error occured and your message could not be sent.');

			// Enable button
			btn.prop('disabled', false);

			// Change button text back to submit
			btn.text('Submit');
		});
	});

});
