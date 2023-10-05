import "./styles/index.scss";
import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { useTheme } from "./theme/useTheme";

const App = () => {

  const {theme, toggleTheme} = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <button onClick={() => toggleTheme()}>Toggle</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
