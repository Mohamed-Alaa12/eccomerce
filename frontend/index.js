// ================= CART SYSTEM =================
const cartPanel = document.getElementById("cart-panel");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");

let cart = [];

function toggleCart() {
  cartPanel.classList.toggle("open");
}

function addToCart(name, price) {
  const existing = cart.find(i => i.name === name);
  existing ? existing.qty++ : cart.push({ name, price, qty: 1 });
  renderCart();
  // فتح السلة تلقائياً عند الإضافة (اختياري)
  if(!cartPanel.classList.contains("open")) toggleCart();
}

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0, count = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = `<p class="empty">${translations[currentLang].cartEmpty}</p>`;
    cartTotal.innerText = 0;
    cartCount.innerText = 0;
    return;
  }

  cart.forEach((item, index) => {
    total += item.price * item.qty;
    count += item.qty;

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
      <div class="info">
        <h4>${item.name}</h4>
        <div class="qty">
          <button data-index="${index}" class="decrease">-</button>
          <span>${item.qty}</span>
          <button data-index="${index}" class="increase">+</button>
        </div>
      </div>
      <div class="price">
        <span>${(item.price * item.qty).toLocaleString()} ج</span>
        <div data-index="${index}" class="remove">حذف</div>
      </div>
    `;

    cartItems.appendChild(cartItem);
  });

  // تحديث السعر الإجمالي في السلة
  cartTotal.innerText = total.toLocaleString(); 
  // تحديث كلاس السعر الإجمالي لربطه بالـ Checkout
  cartTotal.className = "cart-total-price"; 
  
  cartCount.innerText = count;

  document.querySelectorAll(".increase").forEach(btn =>
    btn.onclick = () => increaseQty(btn.dataset.index)
  );
  document.querySelectorAll(".decrease").forEach(btn =>
    btn.onclick = () => decreaseQty(btn.dataset.index)
  );
  document.querySelectorAll(".remove").forEach(btn =>
    btn.onclick = () => removeItem(btn.dataset.index)
  );
}

function increaseQty(index) {
  cart[index].qty++;
  renderCart();
}

function decreaseQty(index) {
  cart[index].qty--;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

document.addEventListener("click", function (e) {
  if (
    cartPanel.classList.contains("open") &&
    !cartPanel.contains(e.target) &&
    !e.target.closest(".cart-icon") &&
    !e.target.closest(".add-to-cart-btn") // إضافة استثناء لأزرار الإضافة
  ) {
    cartPanel.classList.remove("open");
  }
});


// ================= BRAND + SEARCH FILTER =================

let currentBrand = "all";

function filterBrand(brand) {
  currentBrand = brand;
  applyFilters();
}

const searchInput = document.getElementById("search-input");
if(searchInput) {
    searchInput.addEventListener("input", applyFilters);
}

function applyFilters() {
  const query = searchInput ? searchInput.value.toLowerCase() : "";
  const products = document.querySelectorAll(".product-card");

  products.forEach(product => {
    const name = product.querySelector("h3").innerText.toLowerCase();
    const brand = product.dataset.brand;

    const matchBrand = currentBrand === "all" || brand === currentBrand;
    const matchSearch = name.includes(query);

    if (matchBrand && matchSearch) {
      product.style.display = "block"; // استخدام style.display أفضل للإخفاء
    } else {
      product.style.display = "none";
    }
  });
}


// ================= SUPPORT FORM =================
const supportForm = document.getElementById("support-form");
if(supportForm) {
    supportForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("تم إرسال رسالتك بنجاح!");
      supportForm.reset();
    });
}


// ================= SCROLL =================
function scrollToProducts() {
  const productsSection = document.getElementById("products");
  if(productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
  }
}


// ================= LOGIN =================
function openLoginPage() {
  window.location.href = "login.html";
}


// ================= LANGUAGE SYSTEM =================

let currentLang = "ar";

const translations = {
  ar: {
    heroTitle: "خصومات قوية على الموبايلات",
    heroDesc: "أفضل الأسعار – تقسيط مريح",
    products: "أحدث المنتجات",
    login: "تسجيل الدخول",
    home: "الرئيسية",
    navProducts: "المنتجات",
    accessories: "الإكسسوارات",
    support: "الدعم",
    cartEmpty: "السلة فارغة"
  },
  en: {
    heroTitle: "Big Discounts on Phones",
    heroDesc: "Best Prices – Easy Installments",
    products: "Latest Products",
    login: "Login",
    home: "Home",
    navProducts: "Products",
    accessories: "Accessories",
    support: "Support",
    cartEmpty: "Cart is empty"
  }
};


function toggleLanguage() {
  const html = document.documentElement;
  const langBtn = document.querySelector(".lang-btn");

  currentLang = currentLang === "ar" ? "en" : "ar";

  html.setAttribute("lang", currentLang);
  html.setAttribute("dir", currentLang === "ar" ? "rtl" : "ltr");

  if(langBtn) langBtn.innerText = currentLang.toUpperCase();

  // تحديث النصوص (مع التحقق من وجود العناصر لتجنب الأخطاء)
  const heroTitle = document.querySelector(".hero h2");
  if(heroTitle) heroTitle.innerText = translations[currentLang].heroTitle;

  const heroDesc = document.querySelector(".hero p");
  if(heroDesc) heroDesc.innerText = translations[currentLang].heroDesc;

  const prodTitle = document.querySelector(".products h2");
  if(prodTitle) prodTitle.innerText = translations[currentLang].products;

  const navHome = document.querySelector(".nav-home");
  if(navHome) navHome.innerText = translations[currentLang].home;

  const navProds = document.querySelector(".nav-products");
  if(navProds) navProds.innerText = translations[currentLang].navProducts;

  const navAcc = document.querySelector(".nav-accessories");
  if(navAcc) navAcc.innerText = translations[currentLang].accessories;

  const navSupp = document.querySelector(".nav-support");
  if(navSupp) navSupp.innerText = translations[currentLang].support;

  const loginBtn = document.querySelector(".login-btn");
  if(loginBtn) loginBtn.innerText = translations[currentLang].login;

  if (cart.length === 0) {
    cartItems.innerHTML = `<p class="empty">${translations[currentLang].cartEmpty}</p>`;
  }
}


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
// USER AUTHENTICATION SYSTEM
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    checkUserAuth();
});

function checkUserAuth() {
    const authArea = document.getElementById('user-auth-area');
    const user = JSON.parse(localStorage.getItem('currentUser'));

    if (!authArea) return;

    if (user) {
        // لو مسجل دخول -> إظهار زر البروفايل
        authArea.innerHTML = `
            <div class="user-profile-btn" onclick="window.location.href='profile.html'">
                <i class="fas fa-user-circle"></i>
                <span>${user.name.split(' ')[0]}</span> </div>
        `;
    } else {
        // لو مش مسجل -> إظهار زر تسجيل الدخول
        authArea.innerHTML = `
            <button class="login-btn" onclick="openLoginPage()">
                ${currentLang === 'ar' ? 'تسجيل الدخول' : 'Login'}
            </button>
        `;
    }
}

// دالة تسجيل الخروج
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
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

