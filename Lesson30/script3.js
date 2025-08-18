const screen = document.getElementById('screen');

function press(ch) {
    screen.value += ch;
}

function clearScreen() {
    screen.value = '';
}

function delChar() {
    screen.value = screen.value.slice(0, -1);
}

function calculate() {
    const expr = screen.value.trim();
    if (!expr) { screen.value = ''; return; }
    try {
        // Using Function constructor instead of eval for safety
        const result = Function(`"use strict"; return (${expr})`)();
        screen.value = Number.isFinite(result) ? result : 'Error';
    } catch (e) {
        screen.value = 'Error';
    }
}

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (/[0-9+\-*/.]/.test(e.key)) press(e.key);
    else if (e.key === 'Enter') calculate();
    else if (e.key === 'Backspace') delChar();
    else if (e.key.toLowerCase() === 'c') clearScreen();
});
