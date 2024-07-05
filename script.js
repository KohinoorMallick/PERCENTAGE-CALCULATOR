document.getElementById('percentage-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const number = parseFloat(document.getElementById('number').value);
    const percentage = parseFloat(document.getElementById('percentage').value);
    const operation = document.getElementById('operation').value;

    let result;

    if (isNaN(number) || isNaN(percentage)) {
        result = 'Please enter valid numbers.';
    } else {
        switch (operation) {
            case 'percentageOf':
                result = `${percentage}% of ${number} is ${(number * percentage / 100).toFixed(2)}`;
                break;
            case 'addPercentage':
                result = `${number} + ${percentage}% is ${(number + (number * percentage / 100)).toFixed(2)}`;
                break;
            case 'subtractPercentage':
                result = `${number} - ${percentage}% is ${(number - (number * percentage / 100)).toFixed(2)}`;
                break;
            default:
                result = 'Invalid operation.';
        }
    }

    document.getElementById('result').textContent = result;
});
