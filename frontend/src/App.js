import "./App.css";
import { Routes, Route, useNavigate } from "react-router";
import BSTVisualizer from "./components/BSTVisualizer";
import SortingVisualizer from "./components/SortingVisualizer";

import PathFinder from "./components/Dijsktra";
import SieveVisualizer from "./components/PrimeNumber";
import HomePage from "./pages/HomePage";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pathfinder" element={<PathFinder />} />
        <Route path="/bst" element={<BSTVisualizer />} />
        <Route path="/seive" element={<SieveVisualizer />} />
        <Route path="/sorting" element={<SortingVisualizer />} />
      </Routes>
    </div>
  );
}

export default App;
