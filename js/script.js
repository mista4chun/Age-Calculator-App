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
  if (isValid) {
    let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
    const birthdayObj = new Date(birthday);

    ageDiffMill = Date.now() - birthdayObj;
    const ageDate = new Date(ageDiffMill);
    const ageYears = ageDate.getFullYear() - 1970;
    const ageMonth = ageDate.getMonth();
    const ageDay = ageDate.getDay();
    outputDays.textContent = ageDay;
    outputMonths.textContent = ageMonth;
    outputYears.textContent = ageYears;
  } else {
    alert('Input a valid Date');
  }
}

