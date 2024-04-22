/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dailyRate = 35;
let selectedDays = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function handleDayClick(event) {
    const clickedDay = event.target;
    if (!clickedDay.classList.contains('clicked')) {
        clickedDay.classList.add('clicked');
        selectedDays++;
    }
    updateCost();
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function handleClearClick() {
    document.querySelectorAll('.day-selector .blue-hover').forEach(day => {
        day.classList.remove('clicked');
    });
    selectedDays = 0;
    updateCost();
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function handleRateChange(event) {
    const selectedRate = event.target.id;
    dailyRate = selectedRate === 'half' ? 20 : 35;
    document.getElementById(selectedRate).classList.add('clicked');
    document.getElementById(selectedRate === 'half' ? 'full' : 'half').classList.remove('clicked');
    updateCost();
}


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function updateCost() {
    const totalCost = dailyRate * selectedDays;
    document.getElementById('calculated-cost').textContent = totalCost.toFixed(2);
}