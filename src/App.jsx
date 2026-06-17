import { useState } from 'react'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import { FaBars, FaTimes } from 'react-icons/fa'

// import './index.css'


import './App.css'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <button
        className="menu-btn"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FaTimes className="menu-icon" /> : <FaBars className="menu-icon" />}
      </button>
      <div className="app-layout">

        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <MainContent />

      </div>
    </>
  )
}

export default App