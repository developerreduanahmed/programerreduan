// সব বাটন নির্বাচন
const buttons = document.querySelectorAll(".btn");

// Active Button পরিবর্তন
function setActive(index) {
    buttons.forEach(btn => btn.classList.remove("active"));
    buttons[index].classList.add("active");
}

// About
function showAbout() {
    document.getElementById("heading").innerText = "About Me";

    document.getElementById("text").innerText =
        "আমি একজন Frontend Web Developer। HTML, CSS, JavaScript এবং Firebase ব্যবহার করে Responsive ও সুন্দর Website তৈরি করি।";

    setActive(0);
}

// Skills
function showSkills() {
    document.getElementById("heading").innerText = "My Skills";

    document.getElementById("text").innerHTML = `
    ✔ HTML <br>
    ✔ CSS <br>
    ✔ JavaScript <br>
    ✔ Firebase <br>
    ✔ Responsive Design
    `;

    setActive(1);
}

// Contact
function showContact() {
    document.getElementById("heading").innerText = "Contact";

    document.getElementById("text").innerHTML = `
    📧 Email: amdreduan513@gmail.com <br><br>
    📱 Phone: +880 1967-996762 <br><br>
    🌍 Location: Kishoreganj Sadar-2300 ,
    Bangladesh
    `;

    setActive(2);
}

// পেজ লোড হলে About দেখাবে
showAbout();