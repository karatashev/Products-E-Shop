import { Route, Routes } from "react-router-dom";
import "./App.css";
import CardContainer from "./components/CardContainer/CardContainer";
import CardDetail from "./components/CardDetail/CardDetail.jsx";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/HomePage/HomePage"
import Login from "./components/Login/Login"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/products" element={<CardContainer />}/>
      <Route path="/products/:ProductId" element={<CardDetail />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
