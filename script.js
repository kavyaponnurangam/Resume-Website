// Smooth scrolling for navigation
$(document).ready(function() {
  $('a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      const hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);
    }
  });

  // Form validation
  $('#contactForm').on('submit', function(e) {
    e.preventDefault();
    let name = $('#name').val().trim();
    let email = $('#email').val().trim();
    let subject = $('#subject').val().trim();
    let message = $('#message').val().trim();

    if (name === '' || email === '' || subject === '' || message === '') {
      $('#form-status').text('Please fill out all fields!').css('color', 'red');
    } else {
      $('#form-status').text('Message sent successfully!').css('color', 'green');
      this.reset();
    }
  });
});
