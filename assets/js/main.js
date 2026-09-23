function renderProducts(items) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    
    grid.innerHTML = items.map(p => `
        <div class="bg-white rounded-3xl overflow-hidden border border-brand-200/60 shadow-sm hover:shadow-xl transition duration-300 group flex flex-col justify-between">
            <div>
                <!-- កែសម្រួលបង្កើនកម្ពស់ប្រអប់រូបភាពឱ្យវែងទៅខាងក្រោម (h-80 ឬ aspect-[3/4]) -->
                <div class="relative w-full h-80 sm:h-96 bg-brand-50 overflow-hidden cursor-pointer" onclick="openModal(${p.id})">
                    <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500">
                    
                    <span class="absolute top-3 left-3 bg-brand-500/90 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1 z-10">
                        <i class="fa-solid fa-ribbon text-[10px]"></i> ${p.badge}
                    </span>
                    
                    <div class="absolute inset-0 bg-brand-900/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-xs font-medium">
                        <i class="fa-solid fa-heart text-pink-300 mr-1"></i> មើលព័ត៌មាន
                    </div>
                </div>

                <div class="p-4 space-y-1.5">
                    <span class="text-[10px] font-bold text-brand-500 uppercase tracking-wider block">${p.subtitle}</span>
                    <h3 class="font-bold text-brand-900 text-sm line-clamp-2 cursor-pointer hover:text-brand-600 transition min-h-[40px]" onclick="openModal(${p.id})">${p.name}</h3>
                </div>
            </div>

            <div class="px-4 pb-4">
                <button onclick="openModal(${p.id})" class="w-full py-2.5 rounded-2xl bg-brand-100 hover:bg-brand-500 text-brand-800 hover:text-white text-xs font-semibold transition duration-300 flex items-center justify-center gap-1.5">
                    <span>មើលលម្អិត</span>
                    <i class="fa-solid fa-sparkles text-[10px]"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function openModal(id) {
    const p = productsData.find(item => item.id === id);
    if (!p) return;

    document.getElementById('modal-img').src = p.image;
    document.getElementById('modal-badge').innerHTML = `<i class="fa-solid fa-ribbon mr-1"></i> ${p.badge}`;
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