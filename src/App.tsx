import ControlPanel from "./components/ControlPanel/ControlPanel";
import "./App.css";
import Body from "./components/Body/Body";

function App() {
  return (
    <div className="App">
      <ControlPanel />
      <main>
        <Body />
      </main>
    </div>
  );
}

export default App;
