import AgeCalculatorForm from "./components/AgeCalculatorForm";
import AgeResult from "./components/AgeResult";

function App() {
  return (
    <>
      <h1 className="text-3xl text-red-700">Age Calculator</h1>
      <AgeCalculatorForm />
      <AgeResult />
    </>
  );
}

export default App;
