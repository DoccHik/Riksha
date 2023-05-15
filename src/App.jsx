import React from "react";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import Footer from "./Components/Footer/Footer";
import Sushi from "./pages/Sushi/Sushi";
import { Pizza } from "./pages/Pizza/Pizza";
import { Rolls } from "./pages/Rolls/Rolls";
import { Sets } from "./pages/Sets/Sets";
import { Wok } from "./pages/Wok/Wok";
import { Soups } from "./pages/Soups/Soups";
import { Salads } from "./pages/Salads/Salads";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/sushi" element={<Sushi />} />
        <Route path="/rolls" element={<Rolls />} />
        <Route path="/sets" element={<Sets />} />
        <Route path="/wok" element={<Wok />} />
        <Route path="/soups" element={<Soups />} />
        <Route path="/salads" element={<Salads />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
