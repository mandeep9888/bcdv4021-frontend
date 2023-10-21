// // import logo from "./logo.svg";
// import "./App.css";
// import React, { useState } from "react";
// import TransferComp from "./Transfer";

// function App() {
//   const [name, setName] = useState();
//   const [email, setEmail] = useState();

//   const handleInputChanges = (e) => {
//     const { name, value } = e.target;
//     if (name === "name") {
//       setName(value);
//     } else if (name === "email") {
//       setEmail(value);
//     }
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Name: ${name}\n Email: ${email}`);
//   };
//   return (
//     <div className="App">
//       {/* <h1>React input Events and forms </h1> */}
//       {/* <form onSubmit={handleSubmit}>
//         <label>
//           name :
//           <input
//             type="text"
//             name="name"
//             value={name}
//             onChange={handleInputChanges}
//           />
//         </label>
//         <br />
//         <label>
//           Email :
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={handleInputChanges}
//           />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//       <p>Name: {name}</p>
//       <p>Email: {email}</p> */}
//       {/* <input
//         type="text"
//         placeholder="Enter your text"
//         value={name}
//         onChange={handleInputChanges}
//       />
//       <p> hello, {name} !!</p> */}
//       {/* <MyComponent />
//       <HelloWorld /> */}
//       <TransferComp />
//     </div>
//   );
// }

// export default App;

// import "./App.css";
// import Transfer from "./Transfer";
// import Receipt from "./Reciept";
// import React, { useState } from "react";

// function App() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [transactionData, setTransactionData] = useState({});

//   const handleTransfer = ({ amount, from, to }) => {
//     if (amount < 0 || amount === 0 || amount === "") {
//       alert("Enter valid amount");
//       return;
//     }
//     setTransactionData({
//       amount,
//       from,
//       to,
//       transactionDate: new Date().toDateString(),
//       transactionID:
//         "0xb4bc263278d3f77a652a8d73a6bfd8ec0ba1a63923bbb4f38147fb8a943da26d",
//     });
//     setIsModalOpen(true);
//   };
//   return (
//     <div className="App">
//       <Transfer
//         openReceipt={({ amount, from, to }) =>
//           handleTransfer({ amount, from, to })
//         }
//       />
//       {isModalOpen && (
//         <Receipt
//           closeModal={() => {
//             setIsModalOpen(false);
//           }}
//           receiptData={transactionData}
//         />
//       )}
//     </div>
//   );
// }

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contract";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" exact Component={Home}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/contact" Component={Contact}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
