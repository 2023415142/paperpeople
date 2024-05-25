<script>
    function submitForm() {
        
        var email = document.getElementById("email").value.trim();
        var message = document.getElementById("message").value.trim();

        
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        
        if (email === "") {
            alert("Please enter your email.");
            return false; // Prevent form submission
        } else if (message === "") {
            alert("Please enter your message.");
            return false; // Prevent form submission
        } else if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return false; // Prevent form submission
        }

        // Alert with the entered email and message
        alert("Email: " + email + "\nMessage: " + message);

        return true; // Allow form submission
    }
</script>







