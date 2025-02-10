import { useState } from "react"
import Navbar from "./components/Navbar"
import { Outlet } from "react-router";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState('light')
  const switchTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <div data-theme={theme} className="min-h-screen text-base-content">
      <Navbar switchTheme={switchTheme} theme={theme}/>
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
