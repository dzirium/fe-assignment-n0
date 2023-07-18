import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ContactUs from "./views/ContactUs";
import AboutUS from "./views/AboutUs";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Card from "./components/Card";
import NoMatch from "./views/NoMatch";
import ProductDetailsCard from "./components/ProductDetailsCard";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" exact element={<AboutUS />}></Route>
        <Route
          path="product/:perfumeId"
          exact
          element={<ProductDetailsCard />}
        ></Route>
        <Route path="contactus" exact element={<ContactUs />}></Route>
        <Route path="card" exact element={<Card />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </>
  );
}

export default App;
