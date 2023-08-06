import logo from "./logo.svg";
import "./App.css";
import Converter from "./Components/Converter";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Divider } from "@chakra-ui/react";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Divider
        borderWidth="1px"
        boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 12px"}
      />
      <Converter />

      <Footer />
    </div>
  );
}

export default App;
