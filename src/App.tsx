import "./styles/index.scss"
import { Suspense } from "react"
import { Routes, Route, Link } from "react-router-dom";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";

const App = () => {
  return (
    <div className="app">
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/about" element={<AboutPageAsync />}/>
            <Route path="/" element={<MainPageAsync />}/>
          </Routes>
        </Suspense>
       
    </div>
  )
};

export default App;
