function convertToDecimal() {
    const input = document.getElementById("binaryInput").value.trim();
    const resultElement = document.getElementById("result");
    let number = 0;
    let count = 0;

    // Validate input
    if (!/^[01]+$/.test(input)) {
        resultElement.textContent = "Invalid input. Please enter a binary number.";
        resultElement.style.color = "red";
        return;
    }

    // Convert binary to decimal
    for (let i = input.length - 1; i >= 0; i--) {
        if (input[i] === '1') {
            number += Math.pow(2, count);
        }
        count++;
    }

    // Display result
    resultElement.textContent = `The decimal equivalent is: ${number}`;
    resultElement.style.color = "#007bff";
}
