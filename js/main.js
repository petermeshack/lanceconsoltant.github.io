// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

// Contact Form Submission Handler (Opens local mail client with pre-filled details)
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Retrieve input values from the contact form
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Your destination consulting email address
    const recipientEmail = "Ojijo2028@gmail.com";
    
    // Format subject and body parameters
    const subject = encodeURIComponent(`Consultation Inquiry from ${firstName} ${lastName}`);
    const body = encodeURIComponent(
        `Name: ${firstName} ${lastName}\n` +
        `Email: ${email}\n\n` +
        `Message:\n${message}`
    );

    // Open the local mail / Gmail handler application
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    const successMsg = document.getElementById('form-success-msg');
    if (successMsg) {
        successMsg.classList.remove('hidden');
    }
}

// Lightbox Functions for Portfolio Images
function openLightbox(imgSrc, title) {
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const modalTitle = document.getElementById('lightbox-title');

    if (!modal || !modalImg || !modalTitle) return;

    modalImg.src = imgSrc;
    modalTitle.textContent = title;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

// Close lightbox on backdrop click
document.addEventListener('DOMContentLoaded', () => {
    const lightboxModal = document.getElementById('lightbox-modal');
    if (lightboxModal) {
        lightboxModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeLightbox();
            }
        });
    }
});