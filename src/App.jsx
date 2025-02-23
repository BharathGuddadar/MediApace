import React from "react";
import {Routes, Route, Link } from "react-router-dom";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Home from "./Home/Home";
import Cart from "./components/Cart";
import History from "./components/History";
import Stores from "./components/Stores";
import TrackDelivery from "./components/TrackDelivery";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}>Cart</Route>
        <Route path="/track" element={<TrackDelivery/>}>Cart</Route>
        <Route path="/history" element={<History/>}>History</Route>
        <Route path="/stores" element={<Stores/>}>Stores</Route>
        <Route path="/" element={<Login />} /> {/* Default route */}
      </Routes>
    </>
  );
};

export default App;