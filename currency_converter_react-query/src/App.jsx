import { useState } from "react";
import { currencyConverter } from "./api/postApi";
import "./App.css";
import { useQuery } from "@tanstack/react-query";

const App = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");

  const {
    data: convertedAmount,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["currency"],
    queryFn: () => currencyConverter(fromCurrency, toCurrency, amount),
    enabled: false,
  });
  const handleConvertCurrency = async () => {
    if (amount > 0) refetch();
  };

  const Currency = () => {
    const currencies = ["USD", "EUR", "INR", "GBP", "AUD"];
    return currencies.map((currency) => (
      <option key={currency} value={currency}>
        {currency}
      </option>
    ));
  };

  return (
    <section className="currency-converter">
      <div className="currency-div">
        <h1>Currency Converter</h1>
        <div>
          <label htmlFor="currency_amount">
            Amount :
            <input
              type="number"
              id="currency_amount"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </label>
        </div>

        <div className="currency-selector">
          <div>
            <label htmlFor="">
              From :
              <select
                value={fromCurrency}
                onChange={(e) => {
                  setFromCurrency(e.target.value);
                }}
              >
                <Currency />
              </select>
            </label>
          </div>

          <div>
            <label htmlFor="">
              To :
              <select
                value={toCurrency}
                onChange={(e) => {
                  convertedAmount(null);
                  setToCurrency(e.target.value);
                }}
              >
                <Currency />
              </select>
            </label>
          </div>
        </div>

        <button
          disabled={isLoading || amount <= 0}
          onClick={handleConvertCurrency}
        >
          {isLoading ? "converting..." : "Convert"}
        </button>

        <hr />
        {convertedAmount && (
          <h2>
            {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
          </h2>
        )}

        {error && <p>Error : {error.message}</p>}
      </div>
    </section>
  );
};

export default App;
