import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from './pages/Pricing'
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./Components/Footer";

const App = () =>  {
  return (
    <div className="relative min-h-screen bg-black">
    {/* Navbar */}
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
          <Route path="/pricing" element={<Pricing />} />
          <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
      

    
    
  </div>

  );
}

export default App;
