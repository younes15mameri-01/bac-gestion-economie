// =========================
// تشغيل الموقع
// =========================

document.addEventListener("DOMContentLoaded", function () {

    console.log("تم تشغيل الموقع بنجاح ✅");


    // =========================
    // أزرار الأقسام
    // =========================

    const buttons = document.querySelectorAll(".card button");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            const card = button.parentElement;
            const title = card.querySelector("h3").textContent;

            alert("سيتم فتح قسم " + title + " قريبًا 📚");

        });

    });

});

