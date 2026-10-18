/**
 * Auto-load Header and Footer Components
 */
async function loadComponents() {
    // ពិនិត្យមើលថាតើទំព័របច្ចុប្បន្នស្ថិតក្នុង Folder More/ ឬ Root
    const isInMoreFolder = window.location.pathname.includes('/More/') || window.location.pathname.endsWith('/game.html');
    
    const basePath = isInMoreFolder ? '../' : './';
    const componentPath = isInMoreFolder ? './' : 'More/';

    try {
        // Fetch Header & Footer
        const [headerRes, footerRes] = await Promise.all([
            fetch(`${componentPath}header.html`),
            fetch(`${componentPath}footer.html`)
        ]);

        if (headerRes.ok) {
            const headerHtml = await headerRes.text();
            const headerContainer = document.getElementById('header-container');
            if (headerContainer) headerContainer.innerHTML = headerHtml;
        }

        if (footerRes.ok) {
            const footerHtml = await footerRes.text();
            const footerContainer = document.getElementById('footer-container');
            if (footerContainer) footerContainer.innerHTML = footerHtml;
        }

        // Adjust Paths automatically depending on page location
        fixComponentPaths(basePath, isInMoreFolder);

    } catch (error) {
        console.error('Error loading components:', error);
    }
}

// កែសម្រួល Path រូបភាព និង Links ឱ្យដើរត្រឹមត្រូវស្វ័យប្រវត្តិ
function fixComponentPaths(basePath, isInMoreFolder) {
    // 1. Fix Logo Paths
    const logoImg = document.getElementById('header-logo-img');
    const footerLogoImg = document.getElementById('footer-logo-img');
    if (logoImg) logoImg.src = `${basePath}assets/images/logo.jpg`;
    if (footerLogoImg) footerLogoImg.src = `${basePath}assets/images/logo.jpg`;

    // 2. Fix Links
    const linksToAdjust = [
        'nav-home', 'nav-about', 'nav-products', 'nav-game', 'nav-contact',
        'mob-nav-home', 'mob-nav-about', 'mob-nav-products', 'mob-nav-game', 'mob-nav-contact',
        'footer-link-home', 'footer-link-products', 'footer-link-game'
    ];

    linksToAdjust.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            let currentHref = el.getAttribute('href');
            if (isInMoreFolder) {
                if (currentHref.startsWith('index.html')) {
                    el.setAttribute('href', `../${currentHref}`);
                } else if (currentHref.startsWith('More/')) {
                    el.setAttribute('href', currentHref.replace('More/', ''));
                }
            } else {
                if (!currentHref.startsWith('More/') && currentHref.endsWith('game.html')) {
                    el.setAttribute('href', `More/${currentHref}`);
                }
            }
        }
    });
}

// Function បើក/បិទ Mobile Menu លើទូរស័ព្ទ
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

// ដំណើរការ Load ស្វ័យប្រវត្តិ
document.addEventListener('DOMContentLoaded', loadComponents);