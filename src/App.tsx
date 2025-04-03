import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import ContactPage from "./pages/contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
