// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

// Contact Form Submission Handler
function handleFormSubmit(event) {
    event.preventDefault();
    const btn = document.getElementById('submit-btn');
    const successMsg = document.getElementById('form-success-msg');

    if (!btn || !successMsg) return;

    btn.disabled = true;
    btn.textContent = 'SENDING...';

    setTimeout(() => {
        btn.textContent = 'SENT ✓';
        btn.classList.remove('bg-amber-600', 'bg-amber-500', 'hover:bg-amber-600');
        btn.classList.add('bg-emerald-600', 'text-white');
        successMsg.classList.remove('hidden');

        // Reset form fields
        document.getElementById('contact-form').reset();

        setTimeout(() => {
            btn.disabled = false;
            btn.textContent = 'SEND';
            btn.classList.remove('bg-emerald-600', 'text-white');
            btn.classList.add('bg-amber-600', 'hover:bg-amber-700');
        }, 4000);
    }, 1000);
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