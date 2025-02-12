import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router";
import Footer from "./components/Footer";
import CouponContext from "./contexts/CouponContext";

function App() {
  const [theme, setTheme] = useState("light");
  const [coupons, setCoupons] = useState();

  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    fetch("coupon.json")
      .then((res) => res.json())
      .then((data) => setCoupons(data));
  }, []);

  return (
    <CouponContext.Provider value={coupons}>
      <div data-theme={theme} className="min-h-screen text-base-content">
        <Navbar switchTheme={switchTheme} theme={theme} />
        <Outlet />
        <Footer />
      </div>
    </CouponContext.Provider>
  );
}

export default App;
