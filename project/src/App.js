import Home from './Home.jsx';
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Header/Authorization/Login/Login.jsx';
import Registration from './Header/Authorization/Registration/Registration.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/registration" element={<Registration />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
