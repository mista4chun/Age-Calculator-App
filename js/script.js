// Outputs Elements
const outputYears = document.querySelector('.output-years');
const outputMonths = document.querySelector('.output-months');
const outputDays = document.querySelector('.output-days');
const submitBtn = document.getElementById('submit-btn');

// Inputs Elements
let isValid = false;
const inputYear = document.getElementById('year');
const inputMonth = document.getElementById('month');
const inputDay = document.getElementById('day');

// Errors Elements
const errorYear = document.querySelector('.error-year');
const errorMonth = document.querySelector('.error-month');
const errorDay = document.querySelector('.error-day');

submitBtn.addEventListener('click', calculateAge);

inputDay.addEventListener('input', (e) => {
  if (+inputDay.value > 31) {
    errorDay.textContent = 'Must be a valid date';
    isValid = false;
    return;
  } else {
    isValid = true;
    errorDay.textContent = '';
  }
  if (+inputDay.value === 0) {
    errorDay.textContent = 'This field is required';
    isValid = false;
  } else {
    errorDay.textContent = '';
  }
});

inputMonth.addEventListener('input', (e) => {
  if (+inputMonth.value > 12) {
    errorMonth.textContent = 'Must be a valid Month';

    isValid = false;
    return;
  } else {
    isValid = true;
    errorMonth.textContent = '';
  }
  if (+inputMonth.value === 0) {
    errorMonth.textContent = 'This field is required';
    isValid = false;
  } else {
    errorMonth.textContent = '';
  }
});

inputYear.addEventListener('input', (e) => {
  if (+inputYear.value > 2024) {
    errorYear.textContent = 'Must be a valid Year';
    isValid = false;
    return;
  } else {
    isValid = true;
    errorYear.textContent = '';
  }
  if (+inputYear.value === 0) {
    errorYear.textContent = 'This field is required';
    isValid = false;
  } else {
    errorYear.textContent = '';
  }
});

function calculateAge() {
  // Parse the birthdate string into a Date object
  let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
  const birthDateObj = new Date(birthday);
  const now = new Date(); // Get the current date

  // Check if the birthdate is invalid (e.g., "Invalid Date" due to an invalid input)
  if (isNaN(birthDateObj)) {
    alert('Invalid birthdate');
  }

  // Calculate the difference in years
  let ageYears = now.getFullYear() - birthDateObj.getFullYear();
  let ageMonths = now.getMonth() - birthDateObj.getMonth();
  let ageDays = now.getDate() - birthDateObj.getDate();

  // Adjust the age if the current month and day haven't passed the birth month and day yet
  if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
    ageYears--; // Subtract 1 year if the birthday hasn't occurred yet this year
    ageMonths += 12; // Add 12 months to compensate for the negative difference
  }

  // Adjust the age months to be in the range of 0-11 (representing full months)
  if (ageMonths < 0) {
    ageMonths = 0;
  }

  // Adjust the age days to be positive
  if (ageDays < 0) {
    // Calculate the number of days in the previous month
    const prevMonthLastDay = new Date(
      now.getFullYear(),
      now.getMonth(),
      0
    ).getDate();
    ageDays = prevMonthLastDay + ageDays;
  }
  outputDays.textContent = ageDays;
  outputMonths.textContent = ageMonths;
  outputYears.textContent = ageYears;
}
