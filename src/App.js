import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Products } from "./pages/Products";
import { Contact } from "./pages/Contact";
import { Error } from "./pages/Error";


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
          <Route path="*" element={<Error />}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
