import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Terms from "./pages/terms/Terms";
import Privacy from "./pages/privacy/Privacy";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header options={{ showLogo: false }} />
                <Home />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Header options={{ showLogo: true }} />
                <About />
              </>
            }
          />
          <Route
            path="/terms"
            element={
              <>
                <Header options={{ showLogo: true, mode: "light" }} />
                <Terms />
              </>
            }
          />
          <Route
            path="/privacy"
            element={
              <>
                <Header options={{ showLogo: true, mode: "light" }} />
                <Privacy />
              </>
            }
          />
          {/* You can add a 404 Not Found page here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
