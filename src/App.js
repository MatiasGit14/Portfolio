import React from "react";
import "../src/assets/css/App.css";
//import Router from "./Router";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Slider from "./components/Slider";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>

      <div className="clearfix"></div>

      <section>
        <Slider></Slider>
      </section>

      <div className="clearfix"></div>

      <div className="fatherClass">
        <article>
          <Cards></Cards>
        </article>

        <aside className="aside">
          <Form></Form>
        </aside>
      </div>

      <div className="clearfix"></div>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
