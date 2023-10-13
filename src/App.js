// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
// import MyComponent from "./MyComponent";
// import HelloWorld from "./HelloWorld";

function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\n Email: ${email}`);
  };
  return (
    <div className="App">
      <h1>React input Events and forms </h1>
      <form onSubmit={handleSubmit}>
        <label>
          name :
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChanges}
          />
        </label>
        <br />
        <label>
          Email :
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChanges}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      {/* <input
        type="text"
        placeholder="Enter your text"
        value={name}
        onChange={handleInputChanges}
      />
      <p> hello, {name} !!</p> */}
      {/* <MyComponent />
      <HelloWorld /> */}
    </div>
  );
}

export default App;
