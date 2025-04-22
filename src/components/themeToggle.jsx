import React, { useContext } from 'react';
import ThemeContext from "./theme";

function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Current theme: <strong>{theme}</strong></p>
      <button
        className="mt-2 px-4 py-2 bg-lime-700 text-white rounded dark:bg-lime-200"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;
