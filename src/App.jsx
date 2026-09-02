import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import ScrollToTop from "./components/ScrollToTop";
import Sidebar from "./components/Sidebar";

import HomePage from "./pages/home/HomePage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import BusTrackPlusPage from "./pages/projects/bus-track-plus/BusTrackPlusPage";
import PortfolioV1Page from "./pages/projects/portfolio-v1/PortfolioV1Page";
import DriveLedgerPage from "./pages/projects/driveledger/DriveLedgerPage";
// import VamkhaConnectPage from "./pages/projects/vamkha-connect/VamkhaConnectPage";

import "./App.css";


function AppLayout() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const location = useLocation();

  const isProjectPage =
    location.pathname.startsWith("/projects/");

  return (

    <>

      {isProjectPage && (

        <button
          className="project-menu-btn"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Toggle navigation menu"
        >

          {isSidebarOpen ? (
            <FaTimes className="menu-icon" />
          ) : (
            <FaBars className="menu-icon" />
          )}

        </button>

      )}

      {!isProjectPage && (

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

      )}

      <div
        className={`app-layout ${isProjectPage ? "project-layout" : ""
          }`}
      >

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

            {/* <Route
              path="/projects/vamkha-connect"
              element={<VamkhaConnectPage />}
            /> */}

          </Routes>

        </main>

      </div>

    </>

  );
}


function App() {

  return (

    <BrowserRouter>

      <ScrollToTop />

      <AppLayout />

    </BrowserRouter>

  );

}

export default App;