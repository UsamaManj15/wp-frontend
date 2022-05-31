import H1 from "./components/H1";
import Logo from "./components/Logo";
import Notepad from "./components/Notepad";
import Predictions from "./components/Predictions";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Logo />
      <H1 value="Word Predictor" />
      <Notepad placeholder="Start typing..." />
      <Predictions depth={3} />
    </div>
  );
}

export default App;
