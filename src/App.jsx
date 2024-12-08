import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Blogs } from "./pages/Blogs";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen dark:text-white">
      <BrowserRouter>
        <div className="sticky top-0 bg:blur-sm">
          <Navbar />
        </div>
        <div className="max-w-3xl mx-auto flex justify-between items-center px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="/Blogs" element={<Blogs />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
