document.querySelector('.order-form').addEventListener('submit', function(e) {
    e.preventDefault(); // منع الصفحة من إعادة التحميل العشوائي

    // جلب البيانات المدخلة من قِبل المستخدم
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const description = document.getElementById('description').value;

    // جلب خيار السعر المختار
    const selectedPrice = document.querySelector('input[name="السعر_المختار"]:checked').value;

    // تحديد إيميلك الشخصي وموضوع الرسالة تلقائياً
    const myEmail = "raoufkadriii3@gmail.com";
    const subject = encodeURIComponent("طلب جديد لتطوير موقع إلكتروني! 🛠️");

    // تنسيق محتوى الرسالة الموجهة إليك
    const bodyText = مرحباً رؤوف، لديك طلب جديد من المنصة: \n\ n + 👤الإسم الكامل: $ { name }\
    n + 📧بريد الزبون الإلكتروني: $ { email }\
    n + 💰السعر / الباقة المختارة: $ { selectedPrice }\
    n\ n + 📝وصف الموقع المطلوب: \n$ { description };

    const body = encodeURIComponent(bodyText);

    // فتح تطبيق البريد الإلكتروني الخاص بالمستخدم تلقائياً بالمعلومات معبأة بالكامل
    window.location.href = mailto: $ { myEmail } ? subject = $ { subject } & body = $ { body };
});