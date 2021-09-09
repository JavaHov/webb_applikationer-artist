'use strict';

const form = document.querySelector("#recordsForm");
const selectMenu = document.querySelector("#records");
const termsCheckbox = document.querySelector("#terms");
const submitButton = document.querySelector("#order");
const outputLabel = document.querySelector("#presentation");

function orderRecord(event) {

    if(termsCheckbox.checked) {

        outputLabel.textContent = "";
        let chosenRecord = selectMenu.value;
        outputLabel.innerHTML = "<h3> Grattis, du har beställt " + chosenRecord + "!</h3>";

    } else {

        outputLabel.textContent = "";
        outputLabel.innerHTML = "<h4> Du måste godkänna köpvillkoren!</h4>";
    }


    event.preventDefault();
}

submitButton.addEventListener("click", orderRecord, false);