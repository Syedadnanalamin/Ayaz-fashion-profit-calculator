function calculate() {
    const amount = Number(document.getElementById("amount").value);
    const percent = Number(document.getElementById("percentage").value);
    const resultDiv = document.getElementById("result");

    if (!amount || amount <= 0) {
        resultDiv.style.color = "red";
        resultDiv.innerText = "Please enter a valid amount";
        return;
    }

    const profit = amount * percent / 100;
    const total = amount + profit;

    resultDiv.style.color = "green";
    resultDiv.innerHTML = `
        Profit (${percent}%): ${profit.toFixed(2)} <br>
        Total Amount: ${total.toFixed(2)}
    `;
}
