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

function updateResult() {
  const wageValue = inWages.valueAsNumber;
  const otherIncomeValue = inOther.valueAsNumber;
  totalIncome.value = wageValue + otherIncomeValue;
};

form.addEventListener("out-income-summary", updateResult);

updateResult();

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

  totalHousingExpenses.value = rentMortValue + houseInsuranceValue + utilitiesValue + commsValue + houseOtherValue;
};

form.addEventListener("out-house-total", updateResultHousing);

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

    totalFoodExpenses.value = groceriesValue + resturantValue + foodOtherValue;
};
form.addEventListener("out-food-total", updateResultFood);

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

    totalTranspoExpenses.value = parkingValue + ridesValue + gasValue + carMaintValue + carInsuranceValue + carDebtValue + carOtherValue;
}
form.addEventListener("out-transpo-total", updateResultTranspo);

updateResultTranspo();

// Health

// Lifestyle

// Education

// Financial


//total Expenses

