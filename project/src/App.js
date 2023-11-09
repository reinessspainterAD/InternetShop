import Header from "../src/Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "../src/Footer/Footer.jsx";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authorization from '../src/Header/Authorization/Authorization.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Header/>
          <Routes>
            <Route path="authorization" element={<Authorization/>}/>
          </Routes>
        </header>
        <Main />
        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
