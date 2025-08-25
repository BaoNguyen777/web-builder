// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectTemplatePage from "./pages/SelectTemplatePage";
import BuilderStepPage from "./pages/WebsiteCategory";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectTemplatePage />} />
        <Route path="/builder/:type" element={<BuilderStepPage />} />
      </Routes>
    </Router>
  );
}
