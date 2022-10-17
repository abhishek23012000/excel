
import './App.css';
import Home from "./component/Home";
import Add from "./component/Add";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactForm from './component/ContactForm';
function App() {
  return (
    <div className="App">
<BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/contact" element={<ContactForm />} />
          <Route exact path="/add" element={<Add />} />
          {/* <Route path="search" element={<Search />} /> */}
      </Routes>
    </BrowserRouter>   
    </div>
  );
}
// https://git.heroku.com/excelabhi.git
export default App;
