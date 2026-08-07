
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

function sumCategory() {
    //the line items that fall within certain categories go into an array for the category
    //this would provide the sum total of the array for a category
    //Hopefully one day I will come back and add more detailed line item options
    //and hopefully this will reduce how much I need to revise formulas in the future. We'll see???
    //go look up how to find the sum of an array
};

function add() {
    //a+b=sum
    // seems like it might be helpful to have a version that doesn't involve an array necessarily??? idk
};

function subtract() {
    //a-d=difference
    // go check how to do this
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

