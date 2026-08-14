//to do (vaguely sorted by intended order of opperations)

//get the inputs from the html form and put them into the arrays
//get the results of the math and put them back in the outputs section
//the labels need to wrap to a different line because right now they are obscured in a smaller viewing window
//something something max width + wrapping?? figure it out Do I need <p>s?
//actually write something in the README
//make sure all the pages have real text instead of placeholders
//reevaluate the buttons
//finish making it pretty/figure out random minor issues if there is time
//figure out how to make the webpage header use the fancy font

//li = line item

// const liWages = [];
// const liIncomeOther = [];

// const income = [liWages,liIncomeOther];

// const liHousing = [];
// const liFood = [];
// const liTranspo = [];
// const liHealth = [];
// const liLifestyle = [];
// const liEducation = [];
// const liFinancial = [];

// const expenses = [liHousing, liFood, liTranspo, liHealth, liLifestyle, liEducation, liFinancial];

// function sumArray(array) {
//     let sum = 0;
//     for (i = 0; i < array.length; i++) {
//         //error to make sure the array is a number
//         sum = sum + array[i];
//     };
//     return sum;
//     //the line items that fall within certain categories go into an array for the category
//     //this would provide the sum total of the array for a category
//     //Hopefully one day I will come back and add more detailed line item options
//     //and hopefully this will reduce how much I need to revise formulas in the future. We'll see???
//     //go look up how to find the sum of an array
// };

// sumArray(liHousing);

// function add() {
//     //a+b=sum
//     //seems like it might be helpful to have a version that doesn't involve an array necessarily??? idk
// };

// function subtract() {
//     //a-d=difference
//     //go check how to do this
// };

// let totalWages = sumArray(liWages);
// let totalIncomeOther = sumArray(liIncomeOther)
// let totalIncome = sumArray(income);

// let totalHousing = sumArray(liHousing);
// let totalFood = sumArray(liTranspo);
// let totalTranspo = sumArray(liHealth);
// let totalHealth = sumArray(liHealth);
// let totalLifestyle = sumArray(liEducation);
// let totalFinancial = sumArray(liFinancial);
// let totalExpenses = sumArray(expenses);

// ******************NEW CODE MICHAEL*************************
//user goes to wages after taxes field and enters a number
//the number goes into a storage thing so I can do math later
//(wages after taxes) + (other income) = income total (in the output form section)

//reads the number out of an input box, and treats a blank box as 0
function valueOrZero(box) {
  const value = box.valueAsNumber;

  if (isNaN(value) || value < 0) {
    return 0;
  }
  return value;
}

//income subcategory method
const form = document.getElementById("input-form");
const inWages = form.elements["in-wages"];
const inOther = form.elements["in-other"];
const totalIncome = form.elements["out-income-summary"];

function updateIncomeResult() {
  const wageValue = valueOrZero(inWages);
  const otherIncomeValue = valueOrZero(inOther);
  console.log("updating income");

  totalIncome.value = wageValue + otherIncomeValue;
}

form.addEventListener("input", updateIncomeResult);

updateIncomeResult();

//Housing
const inRent = form.elements["in-house-rent-mort"];
const inInsurance = form.elements["in-house-insur"];
const inUtilities = form.elements["in-house-util"];
const inInternet = form.elements["in-house-comms"];
const inHouseOther = form.elements["in-house-other"];

const totalHousingExpenses = form.elements["out-house-total"];

function updateResultHousing() {
  const rentMortValue = valueOrZero(inRent);
  const houseInsuranceValue = valueOrZero(inInsurance);
  const utilitiesValue = valueOrZero(inUtilities);
  const commsValue = valueOrZero(inInternet);
  const houseOtherValue = valueOrZero(inHouseOther);
  console.log("updating housing total");

  totalHousingExpenses.value =
    rentMortValue +
    houseInsuranceValue +
    utilitiesValue +
    commsValue +
    houseOtherValue;
}

form.addEventListener("input", updateResultHousing);

updateResultHousing();
// Food options
const inGroceries = form.elements["in-food-groceries"];
const inResturants = form.elements["in-food-resturant"];
const inFoodOther = form.elements["in-food-other"];

const totalFoodExpenses = form.elements["out-food-total"];

function updateResultFood() {
  const groceriesValue = valueOrZero(inGroceries);
  const resturantValue = valueOrZero(inResturants);
  const foodOtherValue = valueOrZero(inFoodOther);
  console.log("updating food total");

  totalFoodExpenses.value = groceriesValue + resturantValue + foodOtherValue;
}
form.addEventListener("input", updateResultFood);

updateResultFood();

// Transportation
const inParking = form.elements["in-transpo-pub"];
const inRides = form.elements["in-transpo-ride"];
const inGas = form.elements["in-transpo-fuel"];
const inCarMaint = form.elements["in-transpo-maint"];
const inCarInsurance = form.elements["in-transpo-insur"];
const inCarDebt = form.elements["in-transpo-debt"];
const inCarOther = form.elements["in-transpo-other"];

const totalTranspoExpenses = form.elements["out-transpo-total"];

function updateResultTranspo() {
  const parkingValue = valueOrZero(inParking);
  const ridesValue = valueOrZero(inRides);
  const gasValue = valueOrZero(inGas);
  const carMaintValue = valueOrZero(inCarMaint);
  const carInsuranceValue = valueOrZero(inCarInsurance);
  const carDebtValue = valueOrZero(inCarDebt);
  const carOtherValue = valueOrZero(inCarOther);
  console.log("updating transportation total");

  totalTranspoExpenses.value =
    parkingValue +
    ridesValue +
    gasValue +
    carMaintValue +
    carInsuranceValue +
    carDebtValue +
    carOtherValue;
}
form.addEventListener("input", updateResultTranspo);

updateResultTranspo();

// Health
const inHealthInsur = form.elements["in-hlth-insur"];
const inMeds = form.elements["in-hlth-meds"];
const inCopay = form.elements["in-hlth-copay"];
const inHealthOther = form.elements["in-hlth-other"];

const totalHealthExpenses = form.elements["out-hlth-total"];

function updateResultHealth() {
  const healthInsurValue = valueOrZero(inHealthInsur);
  const medsValue = valueOrZero(inMeds);
  const copayValue = valueOrZero(inCopay);
  const healthOtherValue = valueOrZero(inHealthOther);
  console.log("updateing health total");

  totalHealthExpenses.value =
    healthInsurValue + medsValue + copayValue + healthOtherValue;
}
form.addEventListener("input", updateResultHealth);
updateResultHealth();

// Lifestyle
const inChildcare = form.elements["in-life-childcare"];
const inChildSupport = form.elements["in-life-chldsupp"];
const inFamilySupport = form.elements["in-life-famsupp"];
const inWardrobe = form.elements["in-life-wardrobe"];
const inGetFit = form.elements["in-life-getfit"];
const inPets = form.elements["in-life-doggo"];
const inFun = form.elements["in-life-fun"];
const inTravel = form.elements["in-life-travel"];
const inLifeOther = form.elements["in-life-other"];

const totalLifestyleExpenses = form.elements["out-life-total"];

function updateResultLifestyle() {
  const childcareValue = valueOrZero(inChildcare);
  const childSupportValue = valueOrZero(inChildSupport);
  const familySupportValue = valueOrZero(inFamilySupport);
  const wardrobeValue = valueOrZero(inWardrobe);
  const getFitValue = valueOrZero(inGetFit);
  const petsValue = valueOrZero(inPets);
  const funValue = valueOrZero(inFun);
  const travelValue = valueOrZero(inTravel);
  const lifestyleOtherValue = valueOrZero(inLifeOther);
  console.log("updating lifestyle total");

  totalLifestyleExpenses.value =
    childcareValue +
    childSupportValue +
    familySupportValue +
    wardrobeValue +
    getFitValue +
    petsValue +
    funValue +
    travelValue +
    lifestyleOtherValue;
}
form.addEventListener("input", updateResultLifestyle);
updateResultLifestyle();

// Education
const inStudentLoans = form.elements["in-edu-stdntlns"];
const inTutition = form.elements["in-edu-tuition"];
const inSupplies = form.elements["in-edu-supplies"];
const inEduFees = form.elements["in-edu-fees"];

const totalEduExpenses = form.elements["out-edu-total"];

function updateResultEdu() {
  const studentLoanValue = valueOrZero(inStudentLoans);
  const tuitionValue = valueOrZero(inTutition);
  const suppliesValue = valueOrZero(inSupplies);
  const eduFeesValue = valueOrZero(inEduFees);
  console.log("updating education total");

  totalEduExpenses.value =
    studentLoanValue + tuitionValue + suppliesValue + eduFeesValue;
}
form.addEventListener("input", updateResultEdu);
updateResultEdu();

// Financial
const inFinFees = form.elements["in-fin-fees"];
const inFinDebt = form.elements["in-fin-debt"];
const inSavings = form.elements["in-fin-savings"];
const inStonks = form.elements["in-fin-stonks"];
const inFinOther = form.elements["in-fin-other"];

const totalFinExpenses = form.elements["out-fin-total"];

function updateResultFinancial() {
  const finFeesValue = valueOrZero(inFinFees);
  const finDebtValue = valueOrZero(inFinDebt);
  const savingsValue = valueOrZero(inSavings);
  const stonksValue = valueOrZero(inStonks);
  const finOtherValue = valueOrZero(inFinOther);
  console.log("updating financial health total");

  totalFinExpenses.value =
    finFeesValue + finDebtValue + savingsValue + stonksValue + finOtherValue;
}
form.addEventListener("input", updateResultFinancial);
updateResultFinancial();
//total Expenses
const totalExpenses = form.elements["out-expense-summary"];

function updateResultExpenses() {
  const totalHousing = Number(totalHousingExpenses.value);
  const totalFood = Number(totalFoodExpenses.value);
  const totalTranspo = Number(totalTranspoExpenses.value);
  const totalHealth = Number(totalHealthExpenses.value);
  const totalLifestyle = Number(totalLifestyleExpenses.value);
  const totalEducation = Number(totalEduExpenses.value);
  const totalFinancial = Number(totalFinExpenses.value);
  console.log("updating expenses");
  console.log(totalHousing);
  console.log(totalFood);
  console.log(totalTranspo);
  console.log(totalHealth);
  console.log(totalLifestyle);
  console.log(totalEducation);
  console.log(totalFinancial);

  totalExpenses.value =
    totalHousing +
    totalFood +
    totalTranspo +
    totalHealth +
    totalLifestyle +
    totalEducation +
    totalFinancial;

  console.log(totalExpenses);
}
form.addEventListener("input", updateResultExpenses);
updateResultExpenses();

let income = form.elements["out-income-overall"];
let expenses = form.elements["out-expense-overall"];
const overallDifference = form.elements["out-difference"];
const overallVerdict = form.elements["out-verdict"];

//takes two numbers and decides what to say about them
function budgetVerdict(incomeTotal, expenseTotal) {
  if (incomeTotal === 0) {
    return "Enter your income to get started";
  }
  if (expenseTotal > incomeTotal) {
    return "Spending more than you earn";
  }
  if (expenseTotal === incomeTotal) {
    return "Breaking even";
  }
  return "You have money left over";
}
function updateResultOverall() {
  const incomeTotal = Number(totalIncome.value);
  const expenseTotal = Number(totalExpenses.value);
  console.log("updating overall total");

  income.value = incomeTotal;
  expenses.value = expenseTotal;
  overallDifference.value = incomeTotal - expenseTotal;
  overallVerdict.value = budgetVerdict(incomeTotal, expenseTotal);
}
form.addEventListener("input", updateResultOverall);
updateResultOverall();

const expenseChart = new Chart(document.getElementById("myChart"), {
  type: "doughnut",
  data: {
    labels: [
      "Housing",
      "Food & Cleaning",
      "Transportation",
      "Health",
      "Personal, Family, & Lifestyle",
      "Education & Professional",
      "Financial Health & Other Expenses",
    ],
    datasets: [
      {
        label: "Expenses",
        data: [],
        backgroundColor: [
          "#2A78D6", // blue - housing
          "#EB6834", // orange - food
          "#1BAF7A", // aqua - transportation
          "#EDA100", // yellow - health
          "#E87BA4", // magenta - lifestyle
          "#008300", // green - education
          "#4A3AA7", // violet - financial
        ],
        borderWidth: 2,
        borderColor: "#fff",
      },
    ],
  },
  options: {},
});

function updateChart() {
  console.log("updating chart");

  expenseChart.data.datasets[0].data = [
    Number(totalHousingExpenses.value),
    Number(totalFoodExpenses.value),
    Number(totalTranspoExpenses.value),
    Number(totalHealthExpenses.value),
    Number(totalLifestyleExpenses.value),
    Number(totalEduExpenses.value),
    Number(totalFinExpenses.value),
  ];
  expenseChart.update();
}
form.addEventListener("input", updateChart);
updateChart();
// Input validation
const inputWarning = document.getElementById("input-warning");

function loadChartColors() {
  //a random hex color, so the scheme is different on every reload
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
  const url =
    "https://www.thecolorapi.com/scheme?hex=" +
    randomColor +
    "&mode=quad&count=7";

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (scheme) {
      console.log("got colors from the color api");

      expenseChart.data.datasets[0].backgroundColor = scheme.colors.map(
        function (color) {
          return color.hex.value;
        },
      );
      expenseChart.update();
    })
    .catch(function (error) {
      console.log("could not reach the color api, keeping the default colors");
      console.log(error);
    });
}
loadChartColors();

function checkInputs() {
  let badCount = 0;

  for (const box of form.querySelectorAll("input[type=number]")) {
    if (box.valueAsNumber < 0) {
      box.classList.add("input-box-error");
      badCount = badCount + 1;
    } else {
      box.classList.remove("input-box-error");
    }
  }

  if (badCount > 0) {
    inputWarning.textContent =
      "Please enter amounts of zero or more. Negative entries are highlighted and are not being counted.";
  } else {
    inputWarning.textContent = "";
  }
}
form.addEventListener("input", checkInputs);
checkInputs();
