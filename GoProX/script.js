// Mobile menu toggle
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');
let isMenuOpen = false;

// Create mobile menu button
const mobileMenuBtn = document.createElement('button');
mobileMenuBtn.className = 'mobile-menu-btn';
mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
navbar.appendChild(mobileMenuBtn);

mobileMenuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    navLinks.style.display = isMenuOpen ? 'flex' : 'none';
    mobileMenuBtn.innerHTML = isMenuOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    if (isMenuOpen) {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'var(--dark-bg)';
        navLinks.style.padding = '1rem';
        navLinks.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (isMenuOpen && !navbar.contains(e.target)) {
        isMenuOpen = false;
        navLinks.style.display = 'none';
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking a link
            if (isMenuOpen) {
                isMenuOpen = false;
                navLinks.style.display = 'none';
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
});

// Workshop card hover effect
document.querySelectorAll('.workshop-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
    });
});

// Registration form handling
const registrationForm = document.getElementById('registration-form');
const paymentModal = document.getElementById('payment-modal');
const closeModal = document.querySelector('.close');
const countdownElement = document.getElementById('countdown');
const copyBtn = document.querySelector('.copy-btn');

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    paymentModal.style.display = 'block';
    startCountdown();
});

closeModal.addEventListener('click', () => {
    paymentModal.style.display = 'none';
    resetCountdown();
});

window.addEventListener('click', (e) => {
    if (e.target === paymentModal) {
        paymentModal.style.display = 'none';
        resetCountdown();
    }
});

// Countdown timer
let countdownInterval;

function startCountdown() {
    let minutes = 5;
    let seconds = 0;

    countdownInterval = setInterval(() => {
        if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }

        const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        countdownElement.textContent = formattedTime;

        if (minutes === 0 && seconds === 0) {
            clearInterval(countdownInterval);
            countdownElement.style.animation = 'blink 1s infinite';
        }
    }, 1000);
}

function resetCountdown() {
    clearInterval(countdownInterval);
    countdownElement.textContent = '5:00';
    countdownElement.style.animation = 'none';
}

// Copy UPI ID functionality
copyBtn.addEventListener('click', () => {
    const upiId = 'skillmaster@upi';
    navigator.clipboard.writeText(upiId).then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    });
});

// Payment confirmation
document.querySelector('.confirm-btn').addEventListener('click', () => {
    alert('Thank you for your payment! We will contact you shortly with workshop details.');
    paymentModal.style.display = 'none';
    resetCountdown();
    registrationForm.reset();
});

// Newsletter form handling
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    if (emailInput.value) {
        // Here you would typically send this to your backend
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
    }
});

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in, .slide-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Mentor card flip effect
document.querySelectorAll('.mentor-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.mentor-image').style.transform = 'rotateY(180deg)';
    });

    card.addEventListener('mouseleave', () => {
        card.querySelector('.mentor-image').style.transform = 'rotateY(0)';
    });
});

// Add CSS for blinking animation
const style = document.createElement('style');
style.textContent = `
    @keyframes blink {
        0% { opacity: 1; }
        50% { opacity: 0; }
        100% { opacity: 1; }
    }
`;
document.head.appendChild(style);

// Add mobile menu styles
const mobileStyles = document.createElement('style');
mobileStyles.textContent = `
    .mobile-menu-btn {
        display: none;
        background: none;
        border: none;
        color: var(--text-primary);
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0.5rem;
    }

    @media (max-width: 768px) {
        .mobile-menu-btn {
            display: block;
        }

        .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: var(--dark-bg);
            padding: 1rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-top: 1px solid var(--border-color);
        }

        .nav-links.show {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .nav-links li {
            width: 100%;
            text-align: center;
        }

        .nav-links a {
            display: block;
            padding: 0.5rem;
        }
    }
`;
document.head.appendChild(mobileStyles); 