
document.getElementById("leadForm").addEventListener("submit", function(event) {
    // Prevent form submission if validation fails
    event.preventDefault();

    // Get form data
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const country = document.getElementById("country").value;

    // Simple validation
    if (!name || !email || !phone || !country) {
        alert("Please fill in all fields.");
        return;
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate phone format (basic check)
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number.");
        return;
    }

    // If validation passes, submit the form (e.g., using AJAX or traditional submission)
    alert("Form submitted successfully!");
    // Example: this.submit(); // For traditional form submission
});
