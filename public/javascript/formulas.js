//to do (vaguely sorted by intended order of opperations)

//get the inputs from the html form and put them into the arrays
//get the results of the math and put them back in the outputs section
//go read more abou this https://www.w3schools.com/html/html5_webworkers.asp and figure out if it would fulfil the requirement
    //mentor feedback would be especially helpful about this^^
//go actually do a media query for mobile responsiveness
    //the labels need to wrap to a different line because right now they are obscured in a smaller viewing window
        //something something max width + wrapping?? figure it out Do I need <p>s?
//add a readme
//make sure all the pages have real text instead of placeholders
//make sure the form validates user input/double check if I've already done that??
    //reevaluate the buttons
//finish making it pretty/figure out random minor issues if there is time
    //figure out how to make the webpage header use the 
    //why isn't the image reference in the stylesheet working but the inline html is??
    //make the buttons grey

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


