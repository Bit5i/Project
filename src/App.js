import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Reviews from "./components/Reviews";

function App() {
  return (
    <>
       <div className="App">
        <Header/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
        {/* <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Home/>}/> */}

        
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
