// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault(); // Prevents the form from submitting normally

    const formData = new FormData(event.target);

    // Convert form data to JSON
    const formDataObject = {};
    formData.forEach(function(value, key){
        formDataObject[key] = value;
    });

    // Simulate sending form data to server
    // In a real scenario, you would send this data to your backend using AJAX or fetch
    setTimeout(function() {
        console.log("Form data:", formDataObject);
        alert("Thank you for your message! We'll get back to you soon.");
        event.target.reset(); // Reset the form after submission
    }, 1000); // Simulating a delay for the sake of demonstration
});

// Example of dynamic content update
document.getElementById("load-content").addEventListener("click", function(){
    // Simulate loading new content
    setTimeout(function() {
        const newContent = "<h2>New Content</h2><p>This is some new content dynamically loaded using JavaScript.</p>";
        document.getElementById("dynamic-content").innerHTML = newContent;
    }, 1000); // Simulating a delay for the sake of demonstration
});
