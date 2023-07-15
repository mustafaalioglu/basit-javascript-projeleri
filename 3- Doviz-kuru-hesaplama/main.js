import { makeAPIRequest } from "./apiRequest.js";

const convertButton = document.getElementById("convertButton");
const resultInput = document.getElementById("resultInput");
const firstSelect = document.getElementById("firstSelect");
const secondSelect = document.getElementById("secondSelect");
const amountInput = document.getElementById("convertInput");

convertButton.addEventListener("click", async function () {
  const baseCurrency = firstSelect.value;
  const secondSelected = secondSelect.value;
  const amount = amountInput.value.trim();

  const result = await makeAPIRequest(baseCurrency, secondSelected, amount);

  resultInput.value = result;
});
