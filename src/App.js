import './App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import Cart from "./Cart/Cart";
import Logs from "./Logs/Logs";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import React from "react";
import {MAIN, CART, LOGS} from "./Configs/constant";

function App() {
  return (
    <div>
        <Header/>
      <Routes>
        <Route exact path={MAIN} element={<MainPage/>}/>
        <Route exact path={CART} element={<Cart/>}/>
        <Route exact path={LOGS} element={<Logs/>}/>
      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
