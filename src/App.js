import { useState } from "react";
import "./App.css";

function App() {
  const [bill, setBill] = useState(100);
  const [percentageYou, setPercentageYou] = useState(5);
  const [percentageFriend, setPercentageFriend] = useState(5);

  const avgPercent = (percentageYou + percentageFriend) / 2;

  function handleReset() {
    setBill(0);
    setPercentageYou(0);
    setPercentageFriend(0);
  }
  return (
    <div className="App">
      <EnterBill
        billValue={bill}
        handleOnChangeBill={(e) => setBill(Number(e.target.value))}
      />
      <SelectPercentage
        percentVal={percentageYou}
        handleOnChangePercent={(e) => setPercentageYou(Number(e.target.value))}
      >
        How did you like the service?
      </SelectPercentage>

      <SelectPercentage
        percentVal={percentageFriend}
        handleOnChangePercent={(e) =>
          setPercentageFriend(Number(e.target.value))
        }
      >
        How did your friend like the service?
      </SelectPercentage>
      <Result bill={bill} percentageTip={avgPercent} />
      <Reset handleOnClickReset={handleReset} />
    </div>
  );
}

export default App;

function EnterBill({ billValue, handleOnChangeBill }) {
  return (
    <div>
      <label htmlFor="bill">How much was the bill?</label>
      <input
        type="number"
        id="bill"
        value={billValue}
        onChange={handleOnChangeBill}
      ></input>
    </div>
  );
}

function SelectPercentage({ children, percentVal, handleOnChangePercent }) {
  return (
    <div>
      <label>{children}</label>
      <select value={percentVal} onChange={handleOnChangePercent}>
        <option value="0"> Dissatisfied (0%)</option>
        <option value="5"> It was okay (5%)</option>
        <option value="10"> It was good (10%)</option>
        <option value="20"> Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Result({ bill, percentageTip }) {
  const tip = (bill * percentageTip) / 100;
  const result = bill + tip;

  return (
    <p>
      You pay ${result} (${bill} + ${tip} tip)
    </p>
  );
}

function Reset({ handleOnClickReset }) {
  return <button onClick={handleOnClickReset}>Reset</button>;
}
