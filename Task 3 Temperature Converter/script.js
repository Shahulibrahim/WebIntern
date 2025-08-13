document.getElementById('convertBtn').addEventListener('click', convertTemp);

function convertTemp() {
    let temp = parseFloat(document.getElementById('temperature').value);
    let unit = document.getElementById('unit').value;
    let result = '';

    if (isNaN(temp)) {
        document.getElementById('result').innerHTML = "⚠ Please enter a valid number.";
        return;
    }

    if (unit === 'C') {
        result = `${(temp * 9/5 + 32).toFixed(2)} °F | ${(temp + 273.15).toFixed(2)} K`;
    } 
    else if (unit === 'F') {
        result = `${((temp - 32) * 5/9).toFixed(2)} °C | ${((temp - 32) * 5/9 + 273.15).toFixed(2)} K`;
    } 
    else if (unit === 'K') {
        result = `${(temp - 273.15).toFixed(2)} °C | ${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F`;
    }

    document.getElementById('result').innerHTML = result;
}
