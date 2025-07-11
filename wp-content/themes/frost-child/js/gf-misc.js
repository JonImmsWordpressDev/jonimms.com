// This script hides the paragraph with the class 'contact-me
document.addEventListener('gform_confirmation_loaded', function (event, formId) {
    const paragraph = document.querySelector('.contact-me-para');
    if (paragraph) {
        paragraph.style.display = 'none';
    }
});
