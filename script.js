const text = "Hello World 👋 !!!";
let index = 0;
const typingText = document.getElementById("typing-text");

function type() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 300); // 300 ms bekle
    }
}

window.onload = type; 