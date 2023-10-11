import "./styles/index.scss";
import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

const App = () => {

  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames("app", {theme}, [])}>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <button onClick={() => toggleTheme()}>Toggle</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
