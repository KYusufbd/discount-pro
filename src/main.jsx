import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import LoginReg from "./components/LoginReg.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Brands from "./components/Brands.jsx";
import Profile from "./components/Profile.jsx";
import About from "./components/About.jsx";
import Coupon from "./components/Coupon.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginReg />} />
          <Route path="/brand/:id" element={<Coupon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
