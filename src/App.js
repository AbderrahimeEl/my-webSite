import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer />
        Learn React
      </header>
    </div>
  );
}
export default App;
