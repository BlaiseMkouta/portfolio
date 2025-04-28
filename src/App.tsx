import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Home from "./pages/Home";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MainLayout from "./Layout/MainLayout";
const App: React.FC = () => {
  return (
    <Router>
      <div className="font-raleway">
        <main>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
            

              {/* <Route path="services" element={<Services />} />
              <Route path="a-propos" element={<About />} />
             
              <Route path="tarifs" element={<Pricing />} /> */}
            </Route>
   
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
