import "./App.css";
import Header from "./components/Header";
import StepCard from "./components/StepCard";

function App() {
  const steps = [
    {
      number: 1,
      title: "Install Node.js",
      description: "Download and install the latest LTS version of Node.js.",
    },
    {
      number: 2,
      title: "Create React App",
      description: "Run npm create vite@latest and choose React + TypeScript.",
    },
    {
      number: 3,
      title: "Install Dependencies",
      description: "Run npm install to install all required packages.",
    },
    {
      number: 4,
      title: "Run the App",
      description: "Start the development server using npm run dev.",
    },
  ];

  return (
    <div className="container">
      <Header title="React Learning Roadmap" />

      <div className="cards">
        {steps.map((step) => (
          <StepCard
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;