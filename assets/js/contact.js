// Email JS //
function sendMail(contactForm) {
    emailjs
      .send("service_zg7hxt9","template_8zjydva", {
        from_name: contactForm.fullName.value,
        email_id: contactForm.email_id.value,
        phone: contactForm.phone.value,
        message: contactForm.message.value
      })
      .then(
        function(response) {
            alert("Thanks for your message, I will reply as soon as possible!", response);
        },
        function(error) {
            console.log("FAILED", error);
        },
        contactForm.reset() 
    );
    return false;  // To block from loading a new page
}