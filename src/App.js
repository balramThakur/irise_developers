import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import ContactPage from './Pages/ContactPage';
import VijayDurg from './Pages/VijayDurg';
import UsaKiran from './Pages/UsaKiran';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contactUs" element={<ContactPage/>} />
        <Route path="/vijaydurg" element={<VijayDurg/>} />
        <Route path="/usakiran" element={<UsaKiran/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
