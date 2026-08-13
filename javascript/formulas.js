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

//income subcategory method
const form = document.getElementById("input-form");
const inWages = form.elements["in-wages"];
const inOther = form.elements["in-other"];
const totalIncome = form.elements["out-income-summary"];

function updateIncomeResult() {
  const wageValue = inWages.valueAsNumber;
  const otherIncomeValue = inOther.valueAsNumber;
  console.log("updating income")

  totalIncome.value = wageValue + otherIncomeValue;
};

form.addEventListener("input", updateIncomeResult);

updateIncomeResult();

//Housing 
const inRent = form.elements["in-house-rent-mort"];
const inInsurance = form.elements["in-house-insur"];
const inUtilities = form.elements["in-house-util"]
const inInternet = form.elements["in-house-comms"]
const inHouseOther = form.elements["in-house-other"]

const totalHousingExpenses = form.elements["out-house-total"];

function updateResultHousing() {
  const rentMortValue = inRent.valueAsNumber;
  const houseInsuranceValue = inInsurance.valueAsNumber;
  const utilitiesValue = inUtilities.valueAsNumber;
  const commsValue = inInternet.valueAsNumber;
  const houseOtherValue = inHouseOther.valueAsNumber;
  console.log("updating housing total")

  totalHousingExpenses.value = rentMortValue + houseInsuranceValue + utilitiesValue + commsValue + houseOtherValue;
};

form.addEventListener("input", updateResultHousing);

updateResultHousing();
// Food options
const inGroceries = form.elements["in-food-groceries"];
const inResturants = form.elements["in-food-resturant"];
const inFoodOther = form.elements["in-food-other"];

const totalFoodExpenses = form.elements["out-food-total"];

function updateResultFood() {
    const groceriesValue = inGroceries.valueAsNumber;
    const resturantValue = inResturants.valueAsNumber;
    const foodOtherValue = inFoodOther.valueAsNumber;
    console.log("updating food total")

    totalFoodExpenses.value = groceriesValue + resturantValue + foodOtherValue;
};
form.addEventListener("input", updateResultFood);

updateResultFood();

// Transportation
const inParking = form.elements["in-transpo-pub"];
const inRides = form.elements["in-transpo-ride"];
const inGas = form.elements["in-transpo-fuel"];
const inCarMaint = form.elements["in-transpo-maint"]
const inCarInsurance = form.elements["in-transpo-insur"];
const inCarDebt = form.elements["in-transpo-debt"];
const inCarOther = form.elements["in-transpo-other"];

const totalTranspoExpenses = form.elements["out-transpo-total"];

function updateResultTranspo() {
    const parkingValue = inParking.valueAsNumber;
    const ridesValue = inRides.valueAsNumber;
    const gasValue = inGas.valueAsNumber;
    const carMaintValue = inCarMaint.valueAsNumber;
    const carInsuranceValue = inCarInsurance.valueAsNumber;
    const carDebtValue = inCarDebt.valueAsNumber;
    const carOtherValue = inCarOther.valueAsNumber;
    console.log("updating transportation total")

    totalTranspoExpenses.value = parkingValue + ridesValue + gasValue + carMaintValue + carInsuranceValue + carDebtValue + carOtherValue;
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
    const healthInsurValue = inHealthInsur.valueAsNumber;
    const medsValue = inMeds.valueAsNumber;
    const copayValue = inCopay.valueAsNumber;
    const healthOtherValue = inHealthOther.valueAsNumber;
    console.log("updateing health total");

    totalHealthExpenses.value = healthInsurValue + medsValue + copayValue + healthOtherValue;
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
    const childcareValue = inChildcare.valueAsNumber;
    const childSupportValue = inChildSupport.valueAsNumber;
    const familySupportValue = inFamilySupport.valueAsNumber;
    const wardrobeValue = inWardrobe.valueAsNumber;
    const getFitValue = inGetFit.valueAsNumber;
    const petsValue = inPets.valueAsNumber;
    const funValue = inFun.valueAsNumber;
    const travelValue = inTravel.valueAsNumber;
    const lifestyleOtherValue = inLifeOther.valueAsNumber;
    console.log("updating lifestyle total")

    totalLifestyleExpenses.value = childcareValue + childSupportValue + familySupportValue + wardrobeValue + getFitValue + petsValue + funValue + travelValue + lifestyleOtherValue;
};
form.addEventListener("input", updateResultLifestyle);
updateResultLifestyle();

// Education
const inStudentLoans = form.elements["in-edu-stdntlns"];
const inTutition = form.elements["in-edu-tuition"];
const inSupplies = form.elements["in-edu-supplies"];
const inEduFees = form.elements["in-edu-fees"];

const totalEduExpenses = form.elements["out-edu-total"];

function updateResultEdu() {
    const studentLoanValue = inStudentLoans.valueAsNumber;
    const tuitionValue = inTutition.valueAsNumber;
    const suppliesValue = inSupplies.valueAsNumber;
    const eduFeesValue = inEduFees.valueAsNumber;
    console.log("updating education total")

    totalEduExpenses.value = studentLoanValue + tuitionValue + suppliesValue + eduFeesValue;
}
form.addEventListener("input", updateResultEdu);
updateResultEdu();

// Financial
const inFinFees = form.elements["in-fin-fees"];
const inFinDebt = form.elements["in-fin-debt"];
const inSavings = form.elements["in-fin-savings"];
const inStonks = form.elements["in-fin-stonks"];
const inFinOther = form.elements["in-fin-other"];

const totalFinExpenses = form.elements["out-fin-total"]

function updateResultFinancial() {
    const finFeesValue = inFinFees.valueAsNumber;
    const finDebtValue = inFinDebt.valueAsNumber;
    const savingsValue = inSavings.valueAsNumber;
    const stonksValue = inStonks.valueAsNumber;
    const finOtherValue = inFinOther.valueAsNumber;
    console.log("updating financial health total")

    totalFinExpenses.value = finFeesValue + finDebtValue + savingsValue + stonksValue + finOtherValue;
}
form.addEventListener("input", updateResultFinancial);
updateResultFinancial();
//total Expenses
const totalExpenses = form.elements["out-expense-summary"]

function updateResultExpenses() {
    
    const totalHousing = totalHousingExpenses.valueAsNumber;
    const totalFood = totalFoodExpenses.valueAsNumber;
    const totalTranspo = totalTranspoExpenses.valueAsNumber;
    const totalHealth = totalHealthExpenses.valueAsNumber;
    const totalLifestyle = totalLifestyleExpenses.valueAsNumber;
    const totalEducation = totalEduExpenses.valueAsNumber;
    const totalFinancial = totalFinExpenses.valueAsNumber;
    console.log("updating expenses")
    console.log(totalHousing);
    console.log(totalFood);
    console.log(totalTranspo);
    console.log(totalHealth);
    console.log(totalLifestyle);
    console.log(totalEducation);
    console.log(totalFinancial);

    totalExpenses.value = totalHousing + totalFood + totalTranspo + totalHealth + totalLifestyle + totalEducation + totalFinancial;

    console.log(totalExpenses)
}
form.addEventListener("input", updateResultExpenses);
updateResultExpenses();

let income = form.elements["out-income-overall"];
let expenses = form.elements["out-expenses-overall"];
const overallDifference = form.elements["out-difference"];

function updateResultOverall() {
    income.value = totalIncome.valueAsNumber;
    expenses.value = totalExpenses.valueAsNumber;
    console.log("updating overall total")

    overallDifference.value = income - expenses;
}
form.addEventListener("input", updateResultOverall);
updateResultOverall();