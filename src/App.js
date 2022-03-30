import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let [mode, setMode] = useState("light");
  let [btnText, setBtnText] = useState("Enable Dark Mode");

  const togglebtn = () =>{
    if(mode === "light"){
      setMode("dark");
      setBtnText("Enable Light Mode");
      document.body.style.backgroundColor = "grey";
    
    }else{
      setMode("light");
      setBtnText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <Router>
      <div>
        <Navbar mode={mode} btnText={btnText} togglebtn={togglebtn} />

        <Routes>
          <Route path="/"
            element={<Textform title="Enter Text Here" mode={mode}/>}
          />

          <Route path="/about"
            element={<About mode={mode}/>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;