// =========================================
// 1. قاعدة البيانات (DATABASE)
// =========================================
const productsDB = [
    {
        id: "1",
        name: "Iphone 17 Pro Max",
        price: 93000,
        sku: "AP-17PM-256",
        description: "أحدث وحش من آبل، إطار تيتانيوم من الدرجة الخامسة، زر أكشن جديد، وأقوى معالج في تاريخ الهواتف الذكية.",
        images: ["D:/website store/images/iphone/17pro max.jpg"], // المسار الأصلي
        colors: ["#ff9019", "#f2f2f2", "#152c88"],
        specs: { "الشاشة": "6.9 بوصة Super Retina XDR", "المعالج": "A19 Pro", "الرام": "8GB", "التخزين": "256GB" }
    },
    {
        id: "9",
        name: "Iphone 15 Pro",
        price: 43000,
        sku: "AP-15P-128",
        description: "أداء احترافي في حجم مثالي. كاميرا بدقة 48 ميجابكسل ومنفذ USB-C لسرعة نقل بيانات خيالية.",
        images: ["D:/website store/images/iphone/15pro.jpg"], // المسار الأصلي
        colors: ["#333", "#fff", "#2c3e50"],
        specs: { "الشاشة": "6.1 بوصة OLED", "المعالج": "A17 Pro", "الرام": "8GB", "التخزين": "128GB" }
    },
    {
        id: "10",
        name: "Iphone 15",
        price: 38000,
        sku: "AP-15-128",
        description: "يأتي الآن مع الجزيرة التفاعلية (Dynamic Island) وكاميرا رئيسية 48MP وتصميم خلفي من الزجاج الملون.",
        images: ["D:/website store/images/iphone/15.jpg"], // المسار الأصلي
        colors: ["#ff9ff3", "#feca57", "#000"],
        specs: { "الشاشة": "6.1 بوصة OLED", "المعالج": "A16 Bionic", "الرام": "6GB", "التخزين": "128GB" }
    },
    {
        id: "2",
        name: "Samsung Galaxy S24 Ultra",
        price: 48000,
        oldPrice: 55000,
        sku: "SAM-S24U-512",
        description: "أقوى هاتف أندرويد لعام 2025 مع إطار تيتانيوم وقلم S-Pen مدمج. يتميز بشاشة مسطحة تماماً وأداء لا يضاهى.",
        images: ["D:/website store/images/samsung/s24 ultra.jpg"], // المسار الأصلي
        colors: ["#333", "#f4f4f4", "#d4af37"],
        specs: { "الشاشة": "6.8 بوصة", "المعالج": "Snapdragon 8 Gen 3", "الرام": "12GB", "التخزين": "512GB" }
    },
    {
        id: "3",
        name: "Samsung Galaxy S25 Ultra",
        price: 63000,
        sku: "SAM-S25U-256",
        description: "الإصدار الأحدث من سامسونج بتصميم انسيابي وكاميرات خارقة.",
        images: ["D:/website store/images/samsung/s25 ultra.jpg"], // المسار الأصلي
        colors: ["#000", "#555"],
        specs: { "الشاشة": "6.9 بوصة", "المعالج": "Snapdragon 8 Gen 4", "الرام": "16GB", "التخزين": "256GB" }
    },
    {
        id: "4",
        name: "Samsung Galaxy A56",
        price: 21000,
        sku: "SAM-A56-128",
        description: "ملك الفئة المتوسطة الجديد من سامسونج، شاشة أموليد وتردد 120 هرتز.",
        images: ["D:/website store/images/samsung/A56.jpg"], // المسار الأصلي
        colors: ["#8ecae6", "#000", "#fff"],
        specs: { "الشاشة": "6.6 بوصة Super AMOLED", "المعالج": "Exynos 1480", "الرام": "8GB", "التخزين": "128GB" }
    },
    {
        id: "5",
        name: "Xiaomi 14",
        price: 22000,
        sku: "XI-14-256",
        description: "تحفة شاومي بالتعاون مع لايكا، حجم مدمج وأداء جبار.",
        images: ["D:/website store/images/Xiaomi/Xiaomi-14.jpg"], // المسار الأصلي
        colors: ["#36454F", "#2ecc71"],
        specs: { "الشاشة": "6.36 بوصة OLED", "المعالج": "Snapdragon 8 Gen 3", "الرام": "12GB", "التخزين": "256GB" }
    },
    {
        id: "6",
        name: "Xiaomi 13",
        price: 20000,
        sku: "XI-13-256",
        description: "هاتف رائد بسعر منافس، كاميرات ممتازة وتصميم زجاجي فاخر.",
        images: ["D:/website store/images/Xiaomi/Xiaomi-13.jpg"], // المسار الأصلي
        colors: ["#000", "#fff"],
        specs: { "الشاشة": "6.36 بوصة", "المعالج": "Snapdragon 8 Gen 2", "الرام": "8GB", "التخزين": "256GB" }
    },
    {
        id: "7",
        name: "Oppo Reno 14",
        price: 18500,
        sku: "OP-RENO14-256",
        description: "خبير البورتريه الجديد، تصميم نحيف وشحن فائق السرعة.",
        images: ["D:/website store/images/oppo/Oppo-Reno-14.jpg"], // المسار الأصلي
        colors: ["#e056fd", "#000"],
        specs: { "الشاشة": "6.7 بوصة AMOLED", "المعالج": "Dimensity 8200", "الرام": "12GB", "التخزين": "256GB" }
    },
    {
        id: "11",
        name: "Huawei P60 Pro",
        price: 70000,
        sku: "OP-F21-128",
        description: "هاتف Huawei P60 Pro هو أحدث هاتف ذكي من شركة هواوي في سلسلة الهواتف الرائدة لديها حيث يتميز بتصميم أنيق ومختلف جدا مع مواصفات عالية .",
        images: ["D:/website store/images/Huawei/Huawei-P60-Pro.jpg"], // المسار الأصلي
        colors: ["#cacdc7", "#000"],
        specs: { "الشاشة": "6.43 بوصة LTPO OLED", "المعالج": "Snapdragon 8+ Gen 1", "الرام": "12GB", "التخزين": "256GB" }
    }
];

// =========================================
// 2. إعدادات اللغة (TRANSLATIONS)
// =========================================
const translations = {
    ar: {
        home: "الرئيسية", store: "المتجر", contact: "اتصل بنا",
        cartTitle: "سلة المشتريات", total: "المجموع:", checkout: "إتمام الشراء",
        relatedTitle: "منتجات قد تعجبك", footerText: "جميع الحقوق محفوظة © 2026 CrownMob",
        addToCart: "أضف للسلة", whatsapp: "اطلب عبر واتساب",
        specs: "المواصفات التقنية", shipping: "معلومات الشحن",
        shippingText: "شحن مجاني لجميع المحافظات خلال 3-5 أيام عمل.",
        selectColor: "اختر اللون:", notFound: "عذراً، المنتج غير موجود.", returnHome: "العودة للرئيسية",
        currency: "ج.م", save: "وفر"
    },
    en: {
        home: "Home", store: "Store", contact: "Contact Us",
        cartTitle: "Shopping Cart", total: "Total:", checkout: "Checkout",
        relatedTitle: "You May Also Like", footerText: "All Rights Reserved © 2026 CrownMob",
        addToCart: "Add to Cart", whatsapp: "Order via WhatsApp",
        specs: "Technical Specs", shipping: "Shipping Info",
        shippingText: "Free shipping to all governorates within 3-5 business days.",
        selectColor: "Select Color:", notFound: "Sorry, Product not found.", returnHome: "Return Home",
        currency: "EGP", save: "Save"
    }
};

// حالة التطبيق (السلة واللغة)
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentLang = localStorage.getItem('lang') || 'ar';

// =========================================
// 3. التهيئة عند التحميل (INITIALIZATION)
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. تطبيق اللغة المحفوظة
    updateLanguageUI();
    
    // 2. تحديث السلة
    updateCartUI();

    // 3. جلب المنتج وعرضه
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const product = productsDB.find(p => p.id === productId);
    const container = document.getElementById('product-container');

    if (product) {
        renderProduct(product, container);
        renderRelatedProducts(product);
    } else {
        const t = translations[currentLang];
        container.innerHTML = `
            <div style="text-align:center; padding: 50px;">
                <h2>${t.notFound}</h2>
                <a href="index.html" class="btn btn-cart" style="display:inline-block; margin-top:20px; width:auto">${t.returnHome}</a>
            </div>`;
    }

    // 4. تشغيل زر البحث (Enter Key)
    const searchInput = document.getElementById('search-input');
    if(searchInput) {
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
});

// =========================================
// 4. دالة عرض المنتج (RENDER)
// =========================================
function renderProduct(product, container) {
    const t = translations[currentLang];
    // تأكد من وجود صور - استخدام صورة افتراضية إذا لم توجد
    const galleryImages = product.images && product.images.length > 0 ? product.images : ["https://via.placeholder.com/500"];
    
    // حساب التوفير
    const saving = product.oldPrice ? product.oldPrice - product.price : 0;

    container.innerHTML = `
        <div class="gallery-container animate__animated animate__fadeInRight">
            <img src="${galleryImages[0]}" id="mainImg" class="main-image">
            <div class="thumbnails">
                ${galleryImages.map((img, index) => `
                    <img src="${img}" class="thumb ${index === 0 ? 'active' : ''}" onclick="changeImage('${img}', this)">
                `).join('')}
            </div>
        </div>

        <div class="product-info animate__animated animate__fadeInLeft">
            <div class="sku">SKU: ${product.sku}</div>
            <h1>${product.name}</h1>
            
            <div class="price-box">
                <span class="price">${product.price.toLocaleString()} ${t.currency}</span>
                ${product.oldPrice ? `<span class="old-price">${product.oldPrice.toLocaleString()} ${t.currency}</span>` : ''}
                ${saving > 0 ? `<span class="badge-sale">${t.save} ${saving.toLocaleString()}</span>` : ''}
            </div>

            <div class="description">
                <p>${product.description}</p>
            </div>

            <div class="options">
                <h3>${t.selectColor}</h3>
                <div class="color-options">
                    ${product.colors.map((color, index) => `
                        <div class="color-circle ${index===0?'selected':''}" style="background-color: ${color}" onclick="selectColor(this)"></div>
                    `).join('')}
                </div>
            </div>

            <div class="actions">
                <button class="btn btn-cart" onclick="addToCart('${product.id}')" data-lang="addToCart">
                    <i class="fas fa-shopping-bag"></i> ${t.addToCart}
                </button>
                <button class="btn btn-whatsapp" onclick="openWhatsapp('${product.name}')" data-lang="whatsapp">
                    <i class="fab fa-whatsapp"></i> ${t.whatsapp}
                </button>
            </div>

            <div class="accordion">
                <div class="accordion-item">
                    <div class="accordion-header" onclick="toggleAccordion(this)">
                        <span data-lang="specs">${t.specs}</span> <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="accordion-content open">
                        <ul>
                            ${Object.entries(product.specs).map(([key, val]) => `<li><strong>${key}:</strong> ${val}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" onclick="toggleAccordion(this)">
                        <span data-lang="shipping">${t.shipping}</span> <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="accordion-content">
                        <p data-lang="shippingText">${t.shippingText}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// عرض المنتجات المشابهة
function renderRelatedProducts(currentProduct) {
    const t = translations[currentLang];
    const grid = document.getElementById('related-grid');
    const related = productsDB.filter(p => p.id !== currentProduct.id).slice(0, 4);
    
    if (related.length === 0) {
        document.querySelector('.related-products').style.display = 'none';
        return;
    }

    grid.innerHTML = related.map(p => `
        <div class="product-card">
            <a href="product.html?id=${p.id}" style="text-decoration:none; color:inherit">
                <img src="${p.images[0] || 'https://via.placeholder.com/250'}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p style="color:var(--primary); font-weight:bold">${p.price.toLocaleString()} ${t.currency}</p>
            </a>
            <button class="btn btn-cart" style="margin-top:10px; padding:8px; font-size:0.9rem" onclick="addToCart('${p.id}')">
                <i class="fas fa-cart-plus"></i>
            </button>
        </div>
    `).join('');
}

// =========================================
// 5. وظائف السلة (CART LOGIC)
// =========================================
function addToCart(productId) {
    const product = productsDB.find(p => p.id === productId);
    if (!product) return;

    // هل المنتج موجود بالفعل؟
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        // استخدام الصورة الأولى أو صورة افتراضية
        const productImage = product.images && product.images.length > 0 ? product.images[0] : "https://via.placeholder.com/100";
        cart.push({ ...product, qty: 1, images: [productImage] });
    }

    // حفظ وتحديث
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    
    // فتح السلة تلقائياً لإظهار الإضافة
    document.querySelector('.cart-panel').classList.add('open');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const t = translations[currentLang];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count'); // العداد في النافبار
    const cartCountPanel = document.querySelector('.badge'); // العداد الاحتياطي
    const cartTotal = document.getElementById('cart-total');

    // تحديث العداد
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    if(cartCount) cartCount.innerText = totalQty;
    if(cartCountPanel) cartCountPanel.innerText = totalQty;

    // تحديث قائمة المنتجات
    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p style="text-align:center; padding:20px; color:#777">السلة فارغة 🛒</p>`;
    } else {
        cart.forEach(item => {
            total += item.price * item.qty;
            cartItemsContainer.innerHTML += `
                <div style="display:flex; justify-content:space-between; margin-bottom:15px; border-bottom:1px solid #eee; padding-bottom:10px;">
                    <div style="display:flex; gap:10px;">
                        <img src="${item.images[0]}" style="width:50px; height:50px; object-fit:cover; border-radius:8px;">
                        <div>
                            <h4 style="font-size:14px; margin:0;">${item.name}</h4>
                            <span style="font-size:12px; color:#888">${item.price.toLocaleString()} x ${item.qty}</span>
                        </div>
                    </div>
                    <div style="display:flex; flex-direction:column; align-items:end; justify-content:space-between;">
                        <span style="color:red; cursor:pointer; font-size:12px;" onclick="removeFromCart('${item.id}')">❌</span>
                        <span style="font-weight:bold">${(item.price * item.qty).toLocaleString()}</span>
                    </div>
                </div>
            `;
        });
    }

    // تحديث المجموع
    if(cartTotal) cartTotal.innerText = total.toLocaleString();
}

function toggleCartPanel() {
    document.querySelector('.cart-panel').classList.toggle('open');
}

// =========================================
// 6. البحث واللغة (SEARCH & LANG)
// =========================================
function toggleSearch() {
    const overlay = document.getElementById('search-overlay');
    overlay.classList.toggle('active');
    if (overlay.classList.contains('active')) {
        setTimeout(() => document.getElementById('search-input').focus(), 100);
    }
}

function performSearch() {
    const query = document.getElementById('search-input').value.toLowerCase();
    if (!query) return;

    // بحث بسيط في قاعدة البيانات
    const found = productsDB.find(p => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query));

    if (found) {
        window.location.href = `product.html?id=${found.id}`;
    } else {
        alert(currentLang === 'ar' ? 'لم يتم العثور على منتج بهذا الاسم' : 'No product found with this name');
    }
    toggleSearch(); // إغلاق البحث
}

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('lang', currentLang);
    location.reload(); // إعادة تحميل الصفحة لتطبيق التغييرات بالكامل
}

function updateLanguageUI() {
    const t = translations[currentLang];
    
    // 1. اتجاه الصفحة
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    // 2. تحديث النصوص الثابتة
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (t[key]) el.innerText = t[key];
    });

    // 3. نص زر اللغة
    const langText = document.querySelector('.lang-text');
    if(langText) langText.innerText = currentLang === 'ar' ? 'EN' : 'AR';
}

// =========================================
// 7. التفاعلات البصرية (UI INTERACTIONS)
// =========================================
window.changeImage = (src, thumb) => {
    document.getElementById('mainImg').src = src;
    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
};

window.selectColor = (circle) => {
    document.querySelectorAll('.color-circle').forEach(c => c.classList.remove('selected'));
    circle.classList.add('selected');
};

window.toggleAccordion = (header) => {
    const content = header.parentNode.querySelector('.accordion-content');
    const icon = header.querySelector('i');
    
    if (content.style.maxHeight || content.classList.contains('open')) {
        content.style.maxHeight = null;
        content.classList.remove('open');
        icon.style.transform = "rotate(0deg)";
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.classList.add('open');
        icon.style.transform = "rotate(180deg)";
    }
};

window.openWhatsapp = (productName) => {
    const msg = `مرحباً، أود الاستفسار عن المنتج: ${productName}`;
    window.open(`https://wa.me/201xxxxxxxxx?text=${encodeURIComponent(msg)}`, '_blank');
};
// ==================== دوال نافذة إتمام الشراء (Checkout) ====================

// متغير لحفظ السعر الحالي
let cartTotalAmount = 0; 

// 1. فتح النافذة
// عرفناها على window عشان نضمن إن الـ HTML يشوفها
window.openCheckout = function() {
    const modal = document.getElementById('checkout-modal');
    
    // محاولة قراءة السعر من السلة
    const cartTotalElement = document.getElementById('cart-total');
    
    if(cartTotalElement) {
        // تحويل النص "48,000" لرقم 48000
        let priceText = cartTotalElement.innerText;
        // إزالة الفاصلة والرموز غير الرقمية
        cartTotalAmount = parseInt(priceText.replace(/[^0-9]/g, '')) || 0;
    }
    
    // تحديث السعر في النافذة
    const finalTotalElement = document.getElementById('final-total');
    if(finalTotalElement) {
        finalTotalElement.innerText = cartTotalAmount.toLocaleString() + " ج.م";
        finalTotalElement.style.color = "#232f3e"; // إعادة اللون للأصلي لو كان متغير بسبب خصم سابق
    }

    if(modal) {
        modal.style.display = 'block';
    } else {
        console.error("عنصر checkout-modal غير موجود في الصفحة");
    }
}

// 2. غلق النافذة
window.closeCheckout = function() {
    const modal = document.getElementById('checkout-modal');
    if(modal) modal.style.display = 'none';
}

// 3. تبديل تفاصيل الدفع
window.changePaymentMethod = function() {
    // إخفاء كل التفاصيل الأول
    document.querySelectorAll('.details-section').forEach(div => {
        div.classList.remove('active');
    });

    // معرفة الاختيار الحالي
    const selectedRadio = document.querySelector('input[name="payment"]:checked');
    if(!selectedRadio) return;

    const selected = selectedRadio.value;

    // إظهار القسم المناسب
    if(selected === 'cash') {
        const el = document.getElementById('details-cash');
        if(el) el.classList.add('active');
    } else if(selected === 'valu') {
        const el = document.getElementById('details-valu');
        if(el) el.classList.add('active');
    } else if(selected === 'halan') {
        const el = document.getElementById('details-halan');
        if(el) el.classList.add('active');
    } else if(selected === 'instapay') {
        const el = document.getElementById('details-instapay');
        if(el) el.classList.add('active');
    } else if(selected === 'vodafone') {
        const el = document.getElementById('details-vodafone');
        if(el) el.classList.add('active');
    }
}

// 4. تطبيق كود الخصم
window.applyCoupon = function() {
    const codeInput = document.getElementById('coupon-code');
    const finalTotalElement = document.getElementById('final-total');
    
    if(!codeInput || !finalTotalElement) return;

    const code = codeInput.value.trim().toUpperCase();
    
    if(code === "MAZEN10") {
        alert("مبروك! تم تطبيق خصم 10%");
        let discount = cartTotalAmount * 0.10;
        let newTotal = cartTotalAmount - discount;
        finalTotalElement.innerText = newTotal.toLocaleString() + " ج.م";
        finalTotalElement.style.color = "green";
    } else {
        alert("كود الخصم غير صحيح");
        finalTotalElement.innerText = cartTotalAmount.toLocaleString() + " ج.م";
        finalTotalElement.style.color = "#232f3e";
    }
}

// 5. تأكيد الطلب
window.submitOrder = function() {
    const nameInput = document.getElementById('cust-name');
    const phoneInput = document.getElementById('cust-phone');
    const addressInput = document.getElementById('cust-address');

    if(!nameInput || !phoneInput || !addressInput) return;

    if(nameInput.value === "" || phoneInput.value === "" || addressInput.value === "") {
        alert("من فضلك أكمل بيانات الشحن (الاسم، الموبايل، العنوان)");
        return;
    }

    const selectedRadio = document.querySelector('input[name="payment"]:checked');
    const paymentMethod = selectedRadio ? selectedRadio.value : "غير محدد";
    
    alert(`شكراً يا ${nameInput.value}!\nتم استلام طلبك بنجاح.\nوسيلة الدفع: ${paymentMethod}\nسنتواصل معك على رقم ${phoneInput.value} للتأكيد.`);
    
    closeCheckout();
    
    // تفريغ السلة بعد الطلب الناجح
    cart = [];
    renderCart();
}

// إغلاق النافذة عند الضغط خارجها
window.onclick = function(event) {
    const modal = document.getElementById('checkout-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// =========================================
// DARK MODE SYSTEM (نظام الوضع الليلي)
// =========================================

// عند تحميل الصفحة، نتحقق من الوضع المحفوظ
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const toggleBtn = document.getElementById('theme-toggle');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if(toggleBtn) toggleBtn.checked = true; // تفعيل الزر
    }
});

function toggleTheme() {
    const body = document.body;
    const toggleBtn = document.getElementById('theme-toggle');
    
    body.classList.toggle('dark-mode');

    // حفظ الاختيار في المتصفح
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

