/**
 * P24 Secrets - Main Script
 */

// Function សម្រាប់ Render បង្ហាញ Card ផលិតផល
function renderProducts(products) {
    // ស្វែងរក Container (គាំទ្រទាំង ID productsGrid និង product-grid)
    const container = document.getElementById('productsGrid') || document.getElementById('product-grid');
    if (!container) return;

    // ប្រសិនបើស្វែងរកមិនឃើញ
    if (!products || products.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-12">
                <i class="fa-solid fa-box-open text-4xl text-[#A97C50]/40 mb-3"></i>
                <p class="text-[#6E4927] font-bold text-base">រកមិនឃើញផលិតផលដែលអ្នកស្វែងរកទេ!</p>
                <p class="text-xs text-[#A97C50] mt-1">សូមសាកល្បងស្វែងរកឈ្មោះផ្សេងទៀត (ឧទាហរណ៍៖ សេរ៉ូម, ឡេ, ហ្វូម)</p>
            </div>
        `;
        return;
    }

    // បង្ហាញ Card ផលិតផល (កែសម្រួលទំហំរូបភាពជារាងការេ 1:1 និងតម្រៀបអត្ថបទឱ្យស្អាត)
    container.innerHTML = products.map(p => `
        <div class="bg-white rounded-2xl p-2.5 sm:p-3 shadow-xs hover:shadow-md transition duration-300 flex flex-col justify-between border border-[#C6A382]/20 h-full">
            <div>
                <!-- Image Container (កំណត់ជារាងការេ aspect-square ធំច្បាស់ល្មម) -->
                <div onclick="openModal(${p.id})" class="relative w-full aspect-square rounded-xl overflow-hidden mb-2.5 cursor-pointer group bg-[#F8F5F0]">
                    <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                    
                    <!-- Top Badges Overlay -->
                    <div class="absolute top-1.5 left-1.5 right-1.5 flex justify-between items-center pointer-events-none z-10">
                        <!-- Left Badge -->
                        ${p.badge ? `
                            <span class="bg-[#6E4927]/80 text-white text-[9px] sm:text-[10px] font-medium px-2 py-0.5 rounded-full backdrop-blur-xs">
                                ${p.badge}
                            </span>
                        ` : '<span></span>'}
                        
                        <!-- Right Badge (Net Weight) -->
                        ${(p.netweight || p.netWeight) ? `
                            <span class="bg-black/60 text-white text-[9px] sm:text-[10px] font-medium px-2 py-0.5 rounded-full backdrop-blur-xs">
                                ${p.netweight || p.netWeight}
                            </span>
                        ` : ''}
                    </div>
                </div>

                <!-- Product Info -->
                <div class="text-center px-1">
                    <h3 onclick="openModal(${p.id})" class="font-bold text-[#6E4927] text-xs sm:text-sm leading-snug mb-1 cursor-pointer hover:text-[#A97C50] transition line-clamp-2 min-h-[32px] flex items-center justify-center">
                        ${p.name}
                    </h3>
                    <p class="text-[10px] sm:text-xs text-[#A97C50] line-clamp-1 mb-2.5">
                        ${p.subtitle || ''}
                    </p>
                </div>
            </div>

            <!-- Detail Button -->
            <button 
                onclick="openModal(${p.id})" 
                class="w-full py-1.5 bg-[#F3E9DC] hover:bg-[#6E4927] text-[#6E4927] hover:text-white text-xs font-bold rounded-lg transition-all duration-300 shadow-2xs active:scale-95"
            >
                មើលលម្អិត
            </button>
        </div>
    `).join('');
}

// Function ស្វែងរកផលិតផល
function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput || typeof productsData === 'undefined') return;

    const query = searchInput.value.toLowerCase().trim();

    const filtered = productsData.filter(p => {
        return (p.name && p.name.toLowerCase().includes(query)) ||
            (p.subtitle && p.subtitle.toLowerCase().includes(query)) ||
            (p.description && p.description.toLowerCase().includes(query));
    });

    renderProducts(filtered);
}

// Function បើក Modal មើលព័ត៌មានលម្អិត
function openModal(id) {
    if (typeof productsData === 'undefined') return;
    const p = productsData.find(item => item.id === id);
    if (!p) return;

    const modalImg = document.getElementById('modal-img');
    const modalBadge = document.getElementById('modal-badge');
    const modalNetWeight = document.getElementById('modal-netweight');
    const modalTitle = document.getElementById('modal-title');
    const modalSubtitle = document.getElementById('modal-subtitle');
    const modalDesc = document.getElementById('modal-desc');
    const modalIngredients = document.getElementById('modal-ingredients');
    const modalUsage = document.getElementById('modal-usage');

    if (modalImg) modalImg.src = p.image;
    if (modalBadge) modalBadge.innerHTML = `<i class="fa-solid fa-ribbon mr-1"></i> ${p.badge || ''}`;

    if (modalNetWeight) {
        const netWeightVal = p.netweight || p.netWeight;
        modalNetWeight.innerText = netWeightVal ? `ចំណុះ / ទម្ងន់៖ ${netWeightVal}` : '';
    }

    if (modalTitle) modalTitle.innerText = p.name;
    if (modalSubtitle) modalSubtitle.innerText = p.subtitle || '';
    if (modalDesc) modalDesc.innerText = p.description || '';
    if (modalIngredients) modalIngredients.innerText = p.ingredients || '';
    if (modalUsage) modalUsage.innerText = p.usage || '';

    const modal = document.getElementById('product-modal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

// Function បិទ Modal
function closeModal() {
    const modal = document.getElementById('product-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Function អក្សររត់ (Loop Typewriter Effect)
function initLoopTypewriter() {
    const words = ["P24 Secrets 🎀", "Beauty & Care ✨", "Skin Secrets 💖"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const element = document.getElementById("typewriter-title");

    if (!element) return;

    function typeEffect() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            element.innerText = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.innerText = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 80 : 150;

        if (!isDeleting && charIndex === currentWord.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 500;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();
}

// ដំណើរការ Render និង Setup ពេល Page Load
document.addEventListener('DOMContentLoaded', () => {
    if (typeof productsData !== 'undefined' && typeof renderProducts === 'function') {
        renderProducts(productsData);
    }
    if (typeof initLoopTypewriter === 'function') {
        initLoopTypewriter();
    }
});