document.getElementById('numerologyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const birthdate = document.getElementById('birthdate').value;
    const lifePathNumber = calculateLifePathNumber(birthdate);
    displayResult(lifePathNumber);
});

function calculateLifePathNumber(birthdate) {
    const date = new Date(birthdate);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();
    
    const sum = getDigitSum(day) + getDigitSum(month) + getDigitSum(year);
    return reduceToSingleDigit(sum);
}

function getDigitSum(number) {
    let sum = 0;
    while (number) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}

function reduceToSingleDigit(number) {
    while (number > 9) {
        number = getDigitSum(number);
    }
    return number;
}

function displayResult(lifePathNumber) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Số chủ đạo của cuộc đời bạn là: ${lifePathNumber}</p>`;
}
