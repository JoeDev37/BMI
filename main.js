
// console.log('Hello, World!!');

const convBtn = document.getElementById('convBtn');
const hInput = document.getElementById('hInput');
const wInput = document.getElementById('wInput');
const result = document.getElementById('result');
const commnet = document.getElementById('commnet');

convBtn.addEventListener('click', () => {

    let h = Number(hInput.value);
    let w = Number(wInput.value);

    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
        alert('Please enter valid numbers for both height and weight!');
        return;
    }

    console.log("h: " + h + ", w: " + w)
    
})


