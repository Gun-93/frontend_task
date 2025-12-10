import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModernWomenHome from "./components/ModernWomenHome";
import SpotlightSection from "./components/SpotlightSection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<ModernWomenHome />} />

        {/* SPOTLIGHT PAGE */}
        <Route path="/spotlight" element={<SpotlightSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




