import React from "react";
import MostlyUsed from "./components/MostlyUsed";
import RarelyUsed from "./components/RarelyUsed";
import PracticeTask from "./components/PracticeTask";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Header() {
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/mostused">Most Used Method</Link>
        <Link to="/rarelyused">Rarely Used Method</Link>
        <Link to="/practicetask">Practice task</Link>
      </ul>
    </nav>
  );
}

function Home() {
  return (
    <div>
      <h2>Welcome home guys</h2>
    </div>
  );
}

function App() {
  console.clear();
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mostused" element={<MostlyUsed />} />
        <Route path="rarelyused" element={<RarelyUsed />} />
        <Route path="practicetask" element={<PracticeTask />} />
      </Routes>
    </div>
  );
}

export default App;
