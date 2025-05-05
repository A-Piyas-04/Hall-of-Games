import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Wishlist from "./pages/Wishlist";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          {/* <Route path="/" element={<Wishlist />} />
          <Route path="/homeeeeee" element={<Home />} /> */}
        </Routes>
      </main>
    </>
  );
}

export default App;