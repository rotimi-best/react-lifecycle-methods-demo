import React from "react";
import MostlyUsed from "./components/MostlyUsed";
import RarelyUsed from "./components/RarelyUsed";
import PracticeTask from "./components/PracticeTask";
import "./App.css";

function Header({ setStep }) {
  const handleClick = step => {
    setStep(step)
  };

  return (
    <nav>
      <ul>
        <li onClick={() => handleClick(1)}>Most Used Method</li>
        <li onClick={() => handleClick(2)}>Rarely Used Method</li>
        <li onClick={() => handleClick(3)}>Practice task</li>
      </ul>
    </nav>
  )
}

function App() {
  const [step, setStep] = React.useState(1);

  const renderRightComponent = () => {
    switch (step) {
      case 1:
        return <MostlyUsed />;
      case 2:
        return <RarelyUsed />;
      default:
        return <PracticeTask />;
    }
  }

  console.clear();
  return (
    <div className="App">
      <Header setStep={setStep} />
      {renderRightComponent()}
    </div>
  );
}

export default App;
