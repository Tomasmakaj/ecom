import React, { useState, useEffect } from "react";
import Navbar from './components/navbar/Navbar'
import Hero from "./components/hero/Hero";
import ItemContainer from "./components/item/ItemContainer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ItemContainer />
    </>
  );
}

export default App;
