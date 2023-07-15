const url = "https://api.freecurrencyapi.com/v1/latest";
const apiKey = "YOUR_API_TOKEN";

export async function makeAPIRequest(baseCurrency, secondSelected, amount) {
  const base_currency = `&base_currency=${baseCurrency}`;
  const response = await fetch(`${url}?apikey=${apiKey}${base_currency}`);
  const responseData = await response.json();
  const data = responseData.data;
  const requestedValue = data[secondSelected];

  const result = amount * requestedValue;
  return result;
}