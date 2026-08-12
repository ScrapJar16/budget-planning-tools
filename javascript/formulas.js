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

const liWages = [];
const liIncomeOther = [];

const income = [liWages,liIncomeOther];

const liHousing = [];
const liFood = [];
const liTranspo = [];
const liHealth = [];
const liLifestyle = [];
const liEducation = [];
const liFinancial = [];

const expenses = [liHousing, liFood, liTranspo, liHealth, liLifestyle, liEducation, liFinancial];

function sumArray(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        //error to make sure the array is a number
        sum = sum + array[i];
    };
    return sum;
    //the line items that fall within certain categories go into an array for the category
    //this would provide the sum total of the array for a category
    //Hopefully one day I will come back and add more detailed line item options
    //and hopefully this will reduce how much I need to revise formulas in the future. We'll see???
    //go look up how to find the sum of an array
};

sumArray(liHousing);

function add() {
    //a+b=sum
    //seems like it might be helpful to have a version that doesn't involve an array necessarily??? idk
};

function subtract() {
    //a-d=difference
    //go check how to do this
};

let totalWages = sumCategory(liWages);
let totalIncomeOther = sumCategory(liIncomeOther)
let totalIncome = sumCategory(income);

let totalHousing = sumCategory(liHousing);
let totalFood = sumCategory(liTranspo);
let totalTranspo = sumCategory(liHealth);
let totalHealth = sumCategory(liHealth);
let totalLifestyle = sumCategory(liEducation);
let totalFinancial = sumCategory(liFinancial);
let totalExpenses = sumCategory(expenses);



const form = document.getElementById('input-form');
let formData = {};

const calculatedBudget = {
  calculatedIncome: 0,
  otherCalulatedField: 12,
  alsoCalculatedField: 34
};

const detuctExpenseHandler = (expense) => {
  calculatedBudget.incomeAfterExpenses = calculatedBudget.incomeAfterExpenses - parseInt(expense);
}

const addSupplimentalIncomeHandler = (expense) => {
  calculatedBudget.incomeAfterExpenses = calculatedBudget.incomeAfterExpenses + parseInt(expense);
}

const dataHandler = (data) => {
  calculatedBudget.incomeAfterExpenses = parseInt(data.wage_after_taxes);
  
  addSupplimentalIncomeHandler(data.supplimental_income);
  detuctExpenseHandler(data.expense);
  // otherHandler();
  // otherHandler(); 
  // etc
  
  return calculatedBudget;
}

const populateResultOnPage = (calcBudget) => {
  const resultDiv = document.getElementById('result');
  resultDiv.innerText = ""; //ensure div is empty before adding stuff to it
  
  Object.keys(calcBudget).forEach((key) => {
    const p = document.createElement('p');
    p.innerText = `${key}: ${calcBudget[key]}`;
    resultDiv.appendChild(p);
  })
}

form.addEventListener("submit", (e) => {
  // Prevent the refresh of the page and/or the redirect that occurs on form submission
  e.preventDefault();

  const data = new FormData(form);
  
  for (const [key,value] of data) {
    // console.log(`Adding ${key} with value of ${value} to form data...`);
    formData[key] = value;
  }
  
  calcuatedResults = dataHandler(formData);
  populateResultOnPage(calcuatedResults);
  
  // reset formData so continued operations don't get weird
  formData = {};
})
