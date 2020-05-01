import React from "react";
import "../src/assets/css/App.css";
//import Router from "./Router";
import Header from "./components/Header";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <content>
        <Cards></Cards>
      </content>
    </div>
  );
}

export default App;
