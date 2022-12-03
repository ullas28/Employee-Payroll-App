let salary = document.querySelector('#salary');
let output = document.querySelector('.salary-output-text');
salary.addEventListener('input', function() {
    output.textContent = salary.value;
});