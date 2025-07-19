import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { routes } from "./route.jsx";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>

        <footer>
          © {new Date().getFullYear()} Syed Komail Abbas Naqvi. All rights
          reserved.
        </footer>
      </div>
    </Router>
  );
};

export default App;
