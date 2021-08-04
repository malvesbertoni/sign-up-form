import "./App.css";
import Information from "./components/Information";
import Form from "./components/Form";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundImage: "url(/bg-intro-desktop.png)" }}
    >
      <Information />
      <Form />
    </div>
  );
}

export default App;
