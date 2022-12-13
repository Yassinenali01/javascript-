/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected,  
//and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var costDay = 35;
var numberDaySelected = document.getElementsByTagName("li");

var calculationCost = document.getElementsById("calculated-cost");
var halfOption = document.getElementById("half");
var fullOption = document.getElementById("full");

var totalCost = 0;
let daynumber = document.querySelectorAll(".clicked").length-1;
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update 
//any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: 
//.classList.contains() might be helpful here!



for (var i in numberDaySelected) {
    i.addEventListener("click", colorChange);
    }
  
  function colorChange() {
    if (this.classList.contains("clicked")) {
      this.classList.remove("clicked");
    }
    else {
      this.classList.add("clicked");
    }
    recalculate();
}
/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
var clearButton = document.getElementsById("clear-button");
function clear() {
    for (let i in numberDaySelected) {
        if (numberDaySelected.hasOwnProperty(i)){
            numberDaySelected[i].classList.remove("clicked");
            calculationCost.innerHTML = 0;
        }
    }
}clearButton.addEventListener("click", clear);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfOption.addEventListener("click", halfRate);
function halfRate(){
    costDay = 20;
    // if (fullOption.classList.contains("clicked")) {
    halfOption.classList.add("clicked");
    fullOption.classList.remove("clicked");
    recalculate();   
}


//halfOption.addEventListener("click", halfRate)



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fullRate(){
    costDay = 35;
    fullOption.classList.add("clicked");
    halfOption.classList.remove("clicked");
    
    recalculate();
}

halfOption.addEventListener("click", fullRate);



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


function recalculate(){
    totalCost = daynumber*costDay;
    calculationCost.innerHTML = totalCost;
}