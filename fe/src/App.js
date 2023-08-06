import logo from "./logo.svg";
import "./App.css";
import Converter from "./Components/Converter";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Converter />
    </div>
  );
}

export default App;
