import "./Button.css";
import { useState, useEffect } from "react";

function Button() {
  const [darkMode, setDarkMode] = useState(true); // Dark mode is the default.

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);

  return (
    <div>
      <label className="switch">
        <input
          type="checkbox"
          checked={darkMode} 
          onChange={toggleTheme}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default Button;
