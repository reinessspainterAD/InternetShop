import Home from './Home.jsx';
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Header/Authorization/Login/Login.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
