import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/"
            element={<Textform title="Enter Text Here" />}
          />

          <Route path="/about"
            element={<About />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;