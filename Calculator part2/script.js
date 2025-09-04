const display = document.getElementById('display');
const equals = document.getElementById('equals');
const clearBtn = document.getElementById('clear');
const backBtn = document.getElementById('back');
let a = null;
let b = null;
let op = null;
let fresh = false;

function show(v) {
    display.textContent = v;
}

function val() {
    return display.textContent;
}

function putDigit(d) {
    if (fresh || val() === '0') {
        if (d === '.') show('0.');
        else show(d);
        fresh = false;
    } else {
        if (d === '.' && val().includes('.')) return;
        show(val() + d);
    }
}

function setOp(next) {
    if (op && !fresh) compute();
    a = parseFloat(val());
    op = next;
    fresh = true;
}

function compute() {
    if (op === null) return;
    b = parseFloat(val());
    let r = 0;
    if (op === 'add') r = a + b;
    if (op === 'subtract') r = a - b;
    if (op === 'multiply') r = a * b;
    if (op === 'divide') r = b === 0 ? NaN : a / b;
    show(String(Number.isFinite(r) ? +parseFloat(r.toFixed(10)) : 'NaN'));
    a = r;
    fresh = true;
    op = null;
}

document.querySelectorAll('.num').forEach(btn => {
    btn.addEventListener('click', () => putDigit(btn.dataset.val));
});

document.querySelectorAll('.op').forEach(btn => {
    btn.addEventListener('click', () => setOp(btn.dataset.op));
});

equals.addEventListener('click', compute);

clearBtn.addEventListener('click', () => {
    a = b = null;
    op = null;
    fresh = false;
    show('0');
});

backBtn.addEventListener('click', () => {
    if (fresh) return;
    const s = val();
    if (s.length <= 1) show('0');
    else show(s.slice(0, -1));
});

window.addEventListener('keydown', e => {
    const k = e.key;
    if (/\d/.test(k)) putDigit(k);
    if (k === '.') putDigit('.');
    if (k === '+') setOp('add');
    if (k === '-') setOp('subtract');
    if (k === '*') setOp('multiply');
    if (k === '/') setOp('divide');
    if (k === 'Enter' || k === '=') compute();
    if (k === 'Backspace') backBtn.click();
    if (k.toLowerCase() === 'c') clearBtn.click();
});
