import { Route, Routes } from "react-router-dom";
import Header from "./Shared/Header/Header";
import Footer from "./Shared/Footer/Footer";
import Home from "./Pages/Home/Home";

import './App.css'
import About from "./Pages/Home/About/About";
import Services from "./Pages/Home/Services/Services";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes >
        <Route path="/" element={<Home></Home>}>
        </Route>
        <Route index element={<Home></Home>}></Route>
        {/* <Route path="/home" element={<Home></Home>}></Route> */}
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="about" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
