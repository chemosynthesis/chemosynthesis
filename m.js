// Function to detect when content enters the viewport
document.addEventListener('DOMContentLoaded', function() {
    const faders = document.querySelectorAll('.fade-in');
    
    const appearOptions = {
        threshold: 0.1, // When 10% of the content is visible
        rootMargin: "0px 0px -100px 0px" // Adjust the margin to trigger earlier
    };
    
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('show');
                appearOnScroll.unobserve(entry.target); // Stop observing once the element is visible
            }
        });
    }, appearOptions);
    
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
