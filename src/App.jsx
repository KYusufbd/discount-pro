import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "./components/Footer";
import CouponContext from "./contexts/CouponContext";
import AuthProvider from "./firebase/AuthProvider";

function App() {
  const [theme, setTheme] = useState("light");
  const [coupons, setCoupons] = useState([]);
  const [brands, setBrands] = useState([]);

  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  // Code for finding all coupon data:
  useEffect(() => {
    fetch("/coupon.json")
      .then((res) => res.json())
      .then((data) => {
        setCoupons(data);
      });
  }, []);

  // Code for finding brands:
  useEffect(() => {
    const b = [];
    coupons.map((e) => b.includes(e.brand_name) || b.push(e.brand_name));
    setBrands(b);
  }, [coupons]);

  // This code is to scroll to top when the route is changed.
  const location = useLocation();
  useEffect(() => {
    scrollTo(0, 0);
  }, [location]);

  return (
    <CouponContext.Provider value={{ coupons, brands }}>
      <AuthProvider>
        <div data-theme={theme} className="w-full text-base-content box-border">
          <Navbar switchTheme={switchTheme} theme={theme} />
          <Outlet />
          <Footer />
        </div>
      </AuthProvider>
    </CouponContext.Provider>
  );
}

export default App;
