import React, { useState } from 'react';
import './Sidebar.css'; // Import CSS file
import 'boxicons'
function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <nav className={`sidebar ${isSidebarOpen ? '' : 'close'}`}>
      <header>
        <div className="image-text">
          <span className="image">
            {/* avatar */}
            <img src="" alt="" />
          </span>
          <div className="text logo-text">
            <span className="name">Simran</span>
            <span className="profession">Eduquest</span>
          </div>
        </div>
        
      </header>

      <div className="menu-bar">
        <div className="menu">
          <li className="search-box">
            <i className='bx bx-search icon'></i>
            <input type="text" placeholder="Search Games..." />
          </li>
          <ul className="menu-links">
            <li className="nav-link">
              <a href="#">
                <i className='bx bx-home-alt icon'></i>
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className='bx bx-bar-chart-alt-2 icon'></i>
                <span className="text nav-text">Create Test</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className='bx bx-pie-chart-alt icon'></i>
                <span className="text nav-text">Analytics</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className='bx bx-heart icon'></i>
                <span className="text nav-text">All Tests</span>
              </a>
            </li>
            
          </ul>
        </div>
        <div className="bottom-content">
          <li className="">
            <a href="#">
              <i className='bx bx-log-out icon'></i>
              <span className="text nav-text">Logout</span>
            </a>
          </li>
          <li className="mode" onClick={toggleDarkMode}>
            <div className="sun-moon">
              <i className={`bx ${isDarkMode ? 'bx-sun' : 'bx-moon'} icon`}></i>
            </div>
            <span className="mode-text text">{isDarkMode ? 'Light mode' : 'Dark mode'}</span>
            <div className="toggle-switch">
              <span className="switch"></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
