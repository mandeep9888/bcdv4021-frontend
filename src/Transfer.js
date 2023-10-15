import { useState } from "react";
import "./transfer.css";

function TransferComp({ openReceipt }) {
  const from = "0x876wfrihofd67b311EC15003820fE854a024E11F01c";
  const to = "0x0834skjkfd311EC15003820fE854a024E11F01c";
  const [amount, setAmount] = useState("");
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    openReceipt({ amount, from, to });
    alert(`This will render a new Component`);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2> from : {from}</h2>
        <h2> to : {to}</h2>
        <input
          type="text"
          name={amount}
          placeholder="Enter Amount"
          onChange={handleAmountChange}
        />

        <button type="submit"> Submit</button>
      </form>
    </>
  );
}
export default TransferComp;
