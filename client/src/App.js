import React,{useEffect,useState} from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import ItemContainer from "./components/item/ItemContainer";
import Contact from "./components/contact/Contact";
import Footer from './components/footer/Footer'

function App() {
  
  const [user, setUser] = useState({ username: ""});
  const [userCart, setUserCart] = useState([])
  
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
    <div>
      <Navbar user={user} setUser={setUser} userCart={userCart} setUserCart={setUserCart} />
      <Hero />
      <ItemContainer user={user} userCart={userCart} setUserCart={setUserCart} />
      <Contact />
      <Footer />
    </div>
    </>
  );
}
export default App;




























// import React, { createContext, useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
// import Navbar from './components/navbar/Navbar';
// import Login from "./components/login/Login";
// import Hero from "./components/hero/Hero";
// import ItemContainer from "./components/item/ItemContainer";
// import Contact from "./components/contact/Contact";
// import Footer from "./components/footer/Footer";


// const App = () => {

//   const [user, setUser] = useState({ username: ""});
//   const [userCart, setUserCart] = useState ([])
//   const [isLoginPop, setIsLoginPop] = useState(false)

//   // const [shoe, setShoe] = useState ([])
//   // const [collectible, setCollectible] = useState ([])
//   // const [electronic, setElectronic] = useState ({})
  
//   // const [itemArr, setItemArr] = useState([])
//   // const [search, setSearch] = useState ("")

//   // useEffect(() => {
//   //   fetch("http://127.0.0.1:3000/items")
//   //   .then((res) => res.json())
//   //   .then((data) => setItemArr(data))
//   // }, []);

//   // let filtered = itemArr.filter((item) =>
//   //   item.name.toLowerCase().includes(search.toLowerCase())
//   // );

//   useEffect(() => {
//     let token = localStorage.getItem("jwt")
//     if (token && !user.username){
//       fetch("http://127.0.0.1:3000/profile", {
//         headers: {
//           token: token,
//           "Content-Type": "application/json",
//         },
//       })
//       .then((res) => res.json())
//       .then ((data) => {
//         setUser({
//           username:data.username,
//         });
//       });
//     }
//   }, []);

//   function makePopup() {
//     setIsLoginPop(isLoginPop => !isLoginPop)
//   }

 

//   return (
//     <div className="App">
//       {isLoginPop&& <Login setIsLoginPop={setIsLoginPop} isLoginPop={isLoginPop} user={user} setUser={setUser} />}
//       <Navbar makePopup={makePopup} setIsLoginPop={setIsLoginPop} isLoginPop={isLoginPop} user={user} setUser={setUser} userCart={userCart} setUserCart={setUserCart} />
//       <Hero />
//       <ItemContainer user={user} userCart={userCart} setUserCart={setUserCart} />
//       <Contact />
//       <Footer />
//       </div>
//   );
// }

// export default App;