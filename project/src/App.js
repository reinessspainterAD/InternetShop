import Header from "../src/Header/Header.jsx";
import Body from "../src/Body/Body.jsx";
import Footer from "./Footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <Body />
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
