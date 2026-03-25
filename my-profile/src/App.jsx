import {useState} from "react"
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  const [cout, setCount] = useState(0)
  return (
    <>
      <h1>hola mundo</h1>
      <Navbar>
        <Hero />
      </Navbar>
    </>
  );
}

export default App;