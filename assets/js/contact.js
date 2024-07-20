// Email JS //
function sendMail(contactForm) {
  emailjs.send("service_zg7hxt9", "template_8zjydva", {
      from_name: contactForm.fullName.value,
      email_id: contactForm.email_id.value,
      phone: contactForm.phone.value,
      message: contactForm.message.value
  })
  .then(
      function(response) {
          Swal.fire({
              title: 'Message Sent!',
              text: 'Thanks for your message, I will reply as soon as possible!',
              icon: 'success',
              confirmButtonText: 'OK'
          });
          contactForm.reset(); // Reset the form here
      },
      function(error) {
          Swal.fire({
              title: 'Error!',
              text: 'Your message could not be sent. Please try again later.',
              icon: 'error',
              confirmButtonText: 'OK'
          });
          console.log("FAILED", error);
      }
  );
  return false;  // To block from loading a new page
}
