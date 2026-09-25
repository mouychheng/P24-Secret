// Function សម្រាប់ Render បង្ហាញ Card ផលិតផលឱ្យដូច Design ដើម ១០០%
function renderProducts(products) {
    const container = document.getElementById('productsGrid');
    
    // បើស្វែងរកមិនឃើញ
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

    // បង្ហាញ Card តាមស្ទាយដើម
    container.innerHTML = products.map(p => `
        <div class="bg-white rounded-3xl p-3 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between border border-[#C6A382]/20">
            <div>
                <!-- Image Container with Badges -->
                <div class="relative w-full h-44 md:h-48 rounded-2xl overflow-hidden mb-3">
                    <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover">
                    
                    <!-- Left Badge (លេខផលិតផល / Badge ថ្មី) -->
                    <span class="absolute top-2 left-2 bg-[#6E4927]/70 text-white text-[10px] font-medium px-2.5 py-1 rounded-full backdrop-blur-md">
                        ${p.badge}
                    </span>
                    
                    <!-- Right Badge (Net Weight) -->
                    <span class="absolute top-2 right-2 bg-black/60 text-white text-[10px] font-medium px-2.5 py-1 rounded-full backdrop-blur-md">
                        ${p.netWeight}
                    </span>
                </div>

                <!-- Product Info -->
                <div class="text-center px-1">
                    <h3 class="font-bold text-[#6E4927] text-sm md:text-base leading-tight mb-1">
                        ${p.name}
                    </h3>
                    <p class="text-[11px] md:text-xs text-[#A97C50] line-clamp-1 mb-3">
                        ${p.subtitle}
                    </p>
                </div>
            </div>

            <!-- Detail Button (ចុចមើលលម្អិត) -->
            <button 
                onclick="openModal(${p.id})" 
                class="w-full py-2 bg-[#F3E9DC] hover:bg-[#6E4927] text-[#6E4927] hover:text-white text-xs font-bold rounded-xl transition-all duration-300 shadow-sm"
            >
                មើលលម្អិត
            </button>
        </div>
    `).join('');
}

// Function សម្រាប់ដំណើរការ Search Box
function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    const query = searchInput.value.toLowerCase().trim();

    const filtered = productsData.filter(p => {
        return (p.name && p.name.toLowerCase().includes(query)) ||
               (p.subtitle && p.subtitle.toLowerCase().includes(query)) ||
               (p.description && p.description.toLowerCase().includes(query));
    });

    renderProducts(filtered);
}

// ហៅ Render នៅពេល Load ទំព័រដំបូង
document.addEventListener('DOMContentLoaded', () => {
    if (typeof productsData !== 'undefined') {
        renderProducts(productsData);
    }
});

function openModal(id) {
    const p = productsData.find(item => item.id === id);
    if (!p) return;

    document.getElementById('modal-img').src = p.image;
    document.getElementById('modal-badge').innerHTML = `<i class="fa-solid fa-ribbon mr-1"></i> ${p.badge}`;
    
    // បង្ហាញចំណុះក្នុង Modal ប្រសិនបើមាន
    const netWeightElem = document.getElementById('modal-netweight');
    if (netWeightElem) {
        netWeightElem.innerText = p.netWeight ? `ចំណុះ / ទម្ងន់៖ ${p.netWeight}` : '';
    }

    document.getElementById('modal-title').innerText = p.name;
    document.getElementById('modal-subtitle').innerText = p.subtitle;
    document.getElementById('modal-desc').innerText = p.description;
    document.getElementById('modal-ingredients').innerText = p.ingredients;
    document.getElementById('modal-usage').innerText = p.usage;

    document.getElementById('product-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('product-modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof productsData !== 'undefined') {
        renderProducts(productsData);
    }
});

// Typewriter Effect សម្រាប់ P24 Secrets
function initTypewriter() {
    const text = "P24 Secrets";
    const speed = 150; // ល្បឿនសរសេរ ( millisecond )
    let index = 0;
    const element = document.getElementById("typewriter-title");

    if (!element) return;

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

// ហៅ Function ឱ្យដំណើរការពេល Page Load
document.addEventListener("DOMContentLoaded", () => {
    initTypewriter();
});

// Typewriter ជារង្វិលជុំ (Type -> Pause -> Delete -> Repeat)
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

        // ពេលវាយចប់ពាក្យមួយ ឱ្យឈប់សម្រាក ២ វិនាទី
        if (!isDeleting && charIndex === currentWord.length) {
            speed = 2000;
            isDeleting = true;
        } 
        // ពេលលុបអស់ ឱ្យប្តូរទៅពាក្យបន្ទាប់
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 500;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();
}

document.addEventListener("DOMContentLoaded", () => {
    initLoopTypewriter();
});

// Function លោតអក្សរជារង្វិលជុំ ( Warm Brown Theme )
function initLoopTypewriter() {
    const words = ["P24 Secrets", "Beauty & Care ✨", "Skin Secrets 💫"];
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

        // ពេលវាយចប់ពាក្យមួយ ឱ្យឈប់សម្រាក ២ វិនាទី
        if (!isDeleting && charIndex === currentWord.length) {
            speed = 2000;
            isDeleting = true;
        } 
        // ពេលលុបអស់ ឱ្យប្តូរទៅពាក្យបន្ទាប់
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 500;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();
}

document.addEventListener("DOMContentLoaded", () => {
    initLoopTypewriter();
});

// អនុវត្តមុខងារ Search ស្វែងរកឈ្មោះផលិតផល
function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    
    // តម្រងរកមើលឈ្មោះ ឬប្រភេទផលិតផល
    const filteredProducts = productsData.filter(product => {
        return product.name.toLowerCase().includes(query) || 
               product.subtitle.toLowerCase().includes(query) ||
               product.description.toLowerCase().includes(query);
    });

    // បង្ហាញលទ្ធផលឡើងវិញ
    renderProducts(filteredProducts);
}