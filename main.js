
// console.log('Hello, World!!');

const convBtn = document.getElementById('convBtn');
const hInput = document.getElementById('hInput');
const wInput = document.getElementById('wInput');
const result = document.getElementById('result');
const commnet = document.getElementById('commnet');

convBtn.addEventListener('click', () => {

    let h = Number(hInput.value);
        h = h/100;
    let w = Number(wInput.value);

    const bmi = w/(h*h);

    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
        alert('Please enter valid numbers for both height and weight!');
        return;
    }


    if (bmi < 18.5) {
        commnet.textContent = 'Under Weight!!';
        commnet.style.color = '#f38ba8';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        commnet.textContent = 'Normal Weight';
        commnet.style.color = '#a6e3a1'; 
    } else if (bmi >= 25 && bmi <= 29.9) {
        commnet.textContent = 'Over Weight!!';
        commnet.style.color = '#f38ba8';
    } else if (bmi > 30) {
        commnet.textContent = 'Obesity!!';
        commnet.style.color = '#f38ba8';
    }


    result.value = bmi.toFixed(2)
    
})


