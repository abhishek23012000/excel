
import './App.css';
import Home from "./component/Home";
import Add from "./component/Add";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactForm from './component/ContactForm';
import Navbar from "./component/Navbar";
// "homepage": "https://abhishek23012000.github.io/excel",
function App() {
  return (
    <div className="App">
<Navbar />
<BrowserRouter>
      <Routes>
      <Route  path="*" element={<Home />} />
          <Route  path="/home" element={<Home />} />
          <Route  path="/contact" element={<ContactForm />} />
          <Route  path="/add" element={<Add />} />
          {/* <Route path="search" element={<Search />} /> */}
      </Routes> 
      </BrowserRouter> 
    </div>
    
  );
}
// https://git.heroku.com/excelabhi.git
export default App;
