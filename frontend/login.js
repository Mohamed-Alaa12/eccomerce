const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})

// 1. بنمسك الفورم نفسها مش الزرار (عشان ده submit)
const loginForm = document.querySelector("form");

// 2. بنضيف مراقب للحدث لما يحصل submit
loginForm.addEventListener("submit", function(e) {
    
    // e.preventDefault() => دي بتمنع الصفحة إنها تعمل ريفريش
    e.preventDefault(); 

    // 3. التوجيه للصفحة الرئيسية مباشرة بدون شروط
    window.location.href = "index.html"; 
});

// دالة وهمية لتسجيل الدخول (حطها في ملف login.js)
function handleLogin(event) {
    event.preventDefault(); // لمنع إعادة تحميل الصفحة
    
    // هنجيب البيانات اللي كتبها (مثال)
    const email = document.getElementById('login-email').value;
    
    // حفظ بيانات المستخدم في المتصفح
    const userData = {
        name: "مازن أسامة", // تقدر تاخد الاسم من الداتا بيز لو هتعمل باك إند
        email: email,
        phone: "010XXXXXXXX",
        address: "المنصورة، مصر",
        joinDate: "2026-02-15"
    };
    
    localStorage.setItem('currentUser', JSON.stringify(userData));
    
    // توجيه للصفحة الرئيسية
    window.location.href = "index.html";
}