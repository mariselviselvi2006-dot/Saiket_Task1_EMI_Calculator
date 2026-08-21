const loanAmount = document.getElementById("loanAmount");
const tenure = document.getElementById("tenure");
const interest = document.getElementById("interest");

const loanAmountValue = document.getElementById("loanAmountValue");
const tenureValue = document.getElementById("tenureValue");
const interestValue = document.getElementById("interestValue");


// Loan amount slider

loanAmount.addEventListener("input", function () {

    loanAmountValue.textContent =
        Number(this.value).toLocaleString("en-IN");

});


// Tenure slider

tenure.addEventListener("input", function () {

    tenureValue.textContent = this.value;

});


// Interest slider

interest.addEventListener("input", function () {

    interestValue.textContent = this.value;

});


// EMI Calculation

function calculateEMI() {

    let principal = Number(loanAmount.value);

    let annualRate = Number(interest.value);

    let years = Number(tenure.value);

    let months = years * 12;

    let monthlyRate = annualRate / 12 / 100;

    let emi;


    // 0% interest

    if (monthlyRate === 0) {

        emi = principal / months;

    } else {

        emi =
            (principal *
            monthlyRate *
            Math.pow(1 + monthlyRate, months)) /
            (Math.pow(1 + monthlyRate, months) - 1);

    }


    // Total payment

    let totalPayment = emi * months;

    let totalInterest = totalPayment - principal;


    // Display EMI

    document.getElementById("result").textContent =
        "₹" + emi.toLocaleString("en-IN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });


    // Display values

    document.getElementById("displayPrincipal").textContent =
        "₹" + principal.toLocaleString("en-IN");


    document.getElementById("displayInterest").textContent =
        "₹" + totalInterest.toLocaleString("en-IN", {
            maximumFractionDigits: 2
        });


    document.getElementById("displayTotal").textContent =
        "₹" + totalPayment.toLocaleString("en-IN", {
            maximumFractionDigits: 2
        });


    // Payment breakdown

    let principalPercentage =
        (principal / totalPayment) * 100;

    document.getElementById("principalBar").style.width =
        principalPercentage + "%";
}