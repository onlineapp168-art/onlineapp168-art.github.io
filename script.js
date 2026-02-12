// Minimal script - removed all heavy features to prevent browser freezing

// Tab functionality - very simple
if (document.querySelectorAll('.tab-button').length > 0) {
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            this.classList.add('active');
            const target = document.getElementById(tabName);
            if (target) target.classList.add('active');
        });
    });
}

// Simple anchor link clicks - direct scroll to element
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href !== '#') {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                // Scroll directly to element with offset for navbar
                const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'auto'  // Instant scroll, no animation to prevent freezing
                });
            }
        }
    });
});

