import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Auth from "./components/auth/Auth";
import Hero from "./components/hero/Hero";
import ItemContainer from "./components/item/ItemContainer";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";


const App = () => {

  const [user, setUser] = useState({ username: ""});
  const [userCart, setUserCart] = useState ([])
  const [isLoginPop, setIsLoginPop] = useState(false)
  
  const [itemArr, setItemArr] = useState([])
  const [filter, setFilter] = useState ([""])

  // const [shoe, setShoe] = useState ([])
  // const [collectible, setCollectible] = useState ([])
  // const [electronic, setElectronic] = useState ({})

  useEffect(() => {
    let token = localStorage.getItem("jwt")
    if (token && !user.username){
      fetch("http://127.0.0.1:3000/profile", {
        headers: {
          token: token,
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.json())
      .then ((data) => {
        setUser({
          username:data.username,
        });
      });
    }
  }, []);

  function makePopup() {
    setIsLoginPop(isLoginPop => !isLoginPop)
  }

 

  return (
    <div className="App">
      {isLoginPop&& <Auth setIsLoginPop={setIsLoginPop} isLoginPop={isLoginPop} user={user} setUser={setUser} />}
      <Navbar makePopup={makePopup} setIsLoginPop={setIsLoginPop} isLoginPop={isLoginPop} user={user} setUser={setUser} userCart={userCart} setUserCart={setUserCart} />
      <Hero />
      <ItemContainer filter={filter} setFilter={setFilter} user={user} userCart={userCart} setUserCart={setUserCart} />
      <Contact />
      <Footer />
      </div>
  );
}

export default App;
