import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ShareFile from "./pages/ShareFile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sharefile/:id" element={<ShareFile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
