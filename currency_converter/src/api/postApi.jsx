import axios from "axios";

const api = axios.create({
  baseURL: `https://v6.exchangerate-api.com/v6/337a3848fd17a13f9aa65427`,
});

// we need to create a get request
export const currencyConverter = (fromCurrency, toCurrency, amount) => {
  return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
};
