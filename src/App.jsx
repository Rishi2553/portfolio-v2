import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ScrollToTop from "./components/ScrollToTop";


import Sidebar from "./components/Sidebar";
import HomePage from "./pages/home/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import BusTrackPlusPage from "./pages/projects/bus-track-plus/BusTrackPlusPage";
import PortfolioV1Page from "./pages/projects/portfolio-v1/PortfolioV1Page";
import DriveLedgerPage from "./pages/projects/driveledger/DriveLedgerPage";

import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <button
        className="menu-btn"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? (
          <FaTimes className="menu-icon" />
        ) : (
          <FaBars className="menu-icon" />
        )}
      </button>

      <div className="app-layout">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <main className="content">
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />
            <Route
              path="/projects"
              element={<ProjectsPage />}
            />
            <Route
              path="/projects/bus-track-plus"
              element={<BusTrackPlusPage />}
            />
            <Route
              path="/projects/portfolio-v1"
              element={<PortfolioV1Page />}
            />
            <Route
              path="/projects/driveledger"
              element={<DriveLedgerPage />}
            />

          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;