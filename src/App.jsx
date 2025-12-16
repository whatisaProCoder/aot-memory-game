import "./App.css";
import GamePage from "./pages/GamePage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/easy-mode" element={<GamePage levelID={0} />} />
          <Route path="/medium-mode" element={<GamePage levelID={1} />} />
          <Route path="/hard-mode" element={<GamePage levelID={2} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
