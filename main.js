console.log('SYSTEM: MEGAMIND PROTOCOL INITIATED');

// Typing Effect for Manifesto
const text = document.querySelector('.typewriter');
// (Optional: Complicated logic could go here, but keeping it CSS-clean for now)

// Interactive Parallax on the Grid
const grid = document.querySelector('.grid-floor');

// Interactive Parallax
// (Logic moved to event listener)


// Config Loader
function initSystem() {
    if (typeof SYSTEM_CONFIG === 'undefined') return;

    // Socials
    const links = {
        'link-linkedin': SYSTEM_CONFIG.socials.linkedin,
        'link-medium': SYSTEM_CONFIG.socials.medium,
        'link-youtube': SYSTEM_CONFIG.socials.youtube,
        'link-instagram': SYSTEM_CONFIG.socials.instagram,
        'nav-join-btn': SYSTEM_CONFIG.socials.discord
    };

    for (const [id, url] of Object.entries(links)) {
        const el = document.getElementById(id);
        if (el && url) el.href = url;
        if (el) el.target = "_blank"; // Open in new tab
    }

    // Newsletter
    const form = document.getElementById('newsletter-form');
    if (form && SYSTEM_CONFIG.newsletter.formAction) {
        form.action = SYSTEM_CONFIG.newsletter.formAction;
        form.method = "POST";
    } else if (form) {
        // Fallback: If no action set, just redirect to subscribe URL on submit
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (SYSTEM_CONFIG.newsletter.subscribeUrl) {
                window.open(SYSTEM_CONFIG.newsletter.subscribeUrl, '_blank');
            } else {
                alert('SYSTEM ERROR: Newsletter Protocol Not Configured in config.js');
            }
        });
    }
}

initSystem();

document.addEventListener('mousemove', (e) => {
    // Calculate intensity based on mouse distance from center
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;

    // Tilt the interface slightly
    const app = document.getElementById('app');
    app.style.transform = `perspective(1000px) rotateX(${y * 2}deg) rotateY(${x * 2}deg)`;

    // Shift grid slightly
    grid.style.transform = `perspective(500px) rotateX(60deg) translateX(${x * 50}px)`;
});
