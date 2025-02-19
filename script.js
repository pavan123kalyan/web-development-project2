document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("leadForm");
    
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const country = document.getElementById("country").value;

            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const phonePattern = /^[0-9]{10}$/;

            if (!name || !email || !phone || !country) {
                alert("Please fill in all fields.");
                return;
            }
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email.");
                return;
            }
            if (!phonePattern.test(phone)) {
                alert("Please enter a valid phone number.");
                return;
            }

            // Redirect with form data
            window.location.href = `thankyou.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&country=${encodeURIComponent(country)}`;
        });
    }
});
