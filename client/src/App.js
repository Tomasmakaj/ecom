import React, { useState, useEffect } from "react";
import Navbar from './components/navbar/Navbar'
import Hero from "./components/hero/Hero";
import ItemContainer from "./components/item/ItemContainer";

function App() {

  const [user, setUser] = useState({ username: ""});
  
  const [userCart, setUserCart] = useState ([])

  const [filter, setFilter] = useState ([""])

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

  return (
    <>
      <Navbar user={user} setUser={setUser} userCart={userCart} setUserCart={setUserCart} />
      <Hero />
      <ItemContainer filter={filter} setFilter={setFilter} user={user} userCart={userCart} setUserCart={setUserCart} />
    </>
  );
}

export default App;
