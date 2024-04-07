import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import ContactPage from './Pages/ContactPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contactUs" element={<ContactPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
