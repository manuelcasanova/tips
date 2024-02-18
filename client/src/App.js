
//Styles

import './App.css';

//Routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import ClosingAM from './components/ClosingAM';
import FrontPage from './components/FrontPage';
import ClosingPM from './components/ClosingPM';


function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<FrontPage />}></Route>
      <Route exact path="/am" element={<ClosingAM />}></Route>
      <Route exact path="/pm" element={<ClosingPM />}></Route>
    </Routes>
  </Router>
  );
}

export default App;
