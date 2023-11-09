import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Users from './Components/Users';
import AddUser from './Components/AddUser';
import Login from './Components/Login';
import Register from './Components/Register'
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Cart from './Components/Cart';
import OwnerMenu from './Components/OwnerMenu';
import ChefMenu from './Components/ChefMenu';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/OwnerMenu" element={<OwnerMenu />} />
          <Route path="/ChefMenu" element={<ChefMenu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
