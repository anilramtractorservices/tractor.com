// Mobile Menu Navigation Responsive Toggle
const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('show');
    const icon = menuToggle.querySelector('i');
    if (navbar.classList.contains('show')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Dynamic Navigation Bar Shadow Trigger on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 30) {
        header.style.boxShadow = '0 8px 25px rgba(0,0,0,.12)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,.08)';
    }
});

// Dynamic System Copyright Year
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal Elements Animation Configuration
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Formspree API URL natively declared in JavaScript only
const FORMSPREE_URL = "https://formspree.io/f/mojovdkj";

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // JavaScript AJAX के ज़रिये रोकने के लिए
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    const data = new FormData(form);
    
    // Submitting data in the background with JavaScript Fetch API
    fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";
        if (response.ok) {
            status.innerHTML = "Thanks for contacting! We will reply soon.";
            status.className = "form-status success";
            form.reset(); // सबमिशन के बाद फॉर्म को रीसेट करने के लिए
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form";
                }
                status.className = "form-status error";
            })
        }
    }).catch(error => {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";
        status.innerHTML = "Oops! There was a problem submitting your form";
        status.className = "form-status error";
    });
});
