const logs = [
    {
        id: 'LOG_025',
        title: 'NEURAL LINK INTERFACE',
        desc: 'Prototyping the bridge between biological cognition and silicon latency.',
        date: '2026.01.15'
    },
    {
        id: 'LOG_024',
        title: 'THE ARCHITECTURE OF NEXT',
        desc: 'Defining the parameters for reality simulation v2.0.',
        date: '2026.01.02'
    },
    {
        id: 'LOG_023',
        title: 'HARDWARE ACCELERATION',
        desc: 'Building the physical interface for the digital mind.',
        date: '2025.12.28'
    },
    {
        id: 'LOG_022',
        title: 'VOID GENESIS',
        desc: 'Initial commit of the MOHIT NEXUS protocol.',
        date: '2025.12.10'
    }
];

function renderLogs() {
    const grid = document.querySelector('.sector-grid');
    if (!grid) return;

    // Clear existing static content if any (optional, or just append)
    // grid.innerHTML = ''; 

    logs.forEach(log => {
        // Check if log already exists to avoid duplication if running multiple times
        // In a real app we'd just wipe and redraw
    });

    // For this simple static site, let's just REPLACE the static HTML in blog.html with this dynamic content
    // But first we need to make sure we are on the blog page.
    const isBlog = window.location.pathname.includes('blog.html');

    if (isBlog) {
        grid.innerHTML = logs.map(log => `
            <a href="#" class="sector-card" style="width: 100%; height: auto; align-items: flex-start; padding: 2rem;">
                <div class="card-header" style="width: 100%; display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span class="font-tech" style="color: var(--cyber-cyan);">${log.id}</span>
                    <span class="font-tech" style="font-size: 0.8rem; color: #666;">${log.date}</span>
                </div>
                <h3>${log.title}</h3>
                <p>${log.desc}</p>
            </a>
        `).join('');
    }
}

document.addEventListener('DOMContentLoaded', renderLogs);
