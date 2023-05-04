"use strict";

window.onload = function () {
  const totalCostBtnEl = document.getElementById("totalCostBtn");
  totalCostBtnEl.onclick = onTotalCostClick;
};

//inputs
//const rentDaysEl = +document.getElementById("rentDays").value;

//output
function onTotalCostClick() {
  const rentDaysEl = +document.getElementById("rentDays").value;

  const rentalOptions = document.querySelectorAll("input:checked");

  let extraPerDay = 0;
  if (document.getElementById("tollTag").checked) {
    extraPerDay += 3.95;
  }
  if (document.getElementById("gps").checked) {
    extraPerDay += 2.95;
  }
  if (document.getElementById("roadsideHelp").checked) {
    extraPerDay += 2.95;
  }

  const rentalAge = document.querySelector("input[name='rentAge']:checked");

  let rentPay = 0;
  if (document.getElementById("under25").checked) {
    rentPay += 0;
  } else if (document.getElementById("over25").checked) {
    rentPay += 30;
  }

  const basicRental = rentDaysEl * 29.99;
  const agePrice = (rentPay / 100) * basicRental;
  const optionsPrice = extraPerDay * rentDaysEl;
  const totalDue = basicRental + optionsPrice + agePrice;

  const carRentalEl = document.getElementById("carRental");
  carRentalEl.innerHTML = `Car Rental: $${basicRental}`;

  const optChoiceEl = document.getElementById("optChoice");
  optChoiceEl.innerHTML = `Options: $${extraPerDay.toFixed(2)}`;

  const areYou25El = document.getElementById("areYou25");
  areYou25El.innerHTML = `Under 25 surcharge: $${agePrice.toFixed(2)}`;

  const dueAmountEl = document.getElementById("dueAmount");
  dueAmountEl.innerHTML = `Total due: $${totalDue.toFixed(2)}`;
}
