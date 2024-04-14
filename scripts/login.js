// Handles form submission, sends a POST request to the server, and redirects on successful login.
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var formData = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    };

    // Send login request to the server
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect to dashboard or another page on successful login
            window.location.href = "/dashboard";
        } else {
            // Display error message
            document.getElementById("loginMessage").innerText = data.message;
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
