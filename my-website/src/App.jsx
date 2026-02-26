import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Work from "./components/Work";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<Work />} />
      </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;