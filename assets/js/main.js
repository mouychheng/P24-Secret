function renderProducts(items) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    
    grid.innerHTML = items.map(p => `
        <div class="bg-white rounded-2xl overflow-hidden border border-brand-200 shadow-sm hover:shadow-md transition group">
            <div class="relative h-56 overflow-hidden cursor-pointer" onclick="openModal(${p.id})">
                <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                <span class="absolute top-3 left-3 bg-brand-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm">${p.badge}</span>
                <div class="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-xs font-medium">
                    <i class="fa-solid fa-eye mr-1"></i> ចុចមើលគុណភាព
                </div>
            </div>
            <div class="p-4 space-y-1">
                <span class="text-[10px] font-bold text-brand-600 uppercase tracking-wider block">${p.subtitle}</span>
                <h3 class="font-bold text-brand-900 text-sm line-clamp-1 cursor-pointer" onclick="openModal(${p.id})">${p.name}</h3>
                <button onclick="openModal(${p.id})" class="mt-2 w-full py-2 rounded-xl bg-brand-100 hover:bg-brand-600 text-brand-900 hover:text-white text-xs font-semibold transition">
                    មើលគុណភាព
                </button>
            </div>
        </div>
    `).join('');
}

function openModal(id) {
    const p = productsData.find(item => item.id === id);
    if (!p) return;

    document.getElementById('modal-img').src = p.image;
    document.getElementById('modal-badge').innerText = p.badge;
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

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    if (typeof productsData !== 'undefined') {
        renderProducts(productsData);
    }
});