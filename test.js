document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Basic form validation
    if (name && email && message) {
        alert('Thank you for your message!');
    } else {
        alert('Please fill out all fields.');
    }
});
