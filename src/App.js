import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home"
import { Products } from "./pages/Products"
import { Services } from "./pages/Services"
import { Contact } from "./pages/Contact"

function App() {
  return (
    <BrowserRouter >
      <Sidebar>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/inicio" element={<Home/>} ></Route>
          <Route path="/productos" element={<Products/>} ></Route>
          <Route path="/servicios" element={<Services/>} ></Route>
          <Route path="/contacto" element={<Contact/>} ></Route>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
