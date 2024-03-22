import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { FaPencilAlt } from 'react-icons/fa';
import '../Style/Sidebar.css';

function Sidebar() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div className="hamburger" onClick={toggleSidebar}>
        <div style={{ position: 'relative' }} className={`bar ${isVisible ? 'open' : ''}`}></div>
        <div className={`bar ${isVisible ? 'open' : ''}`}></div>
        <div className={`bar ${isVisible ? 'open' : ''}`}></div>
      </div>
      <div className={`sidebar ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="sidebar-content">
          <ul>
            <li style={{ display: 'flex', gap: '9px' }}>

              <div className='icon' style={{ color: 'white', fontSize: '1.2em' }}>
                <AiOutlineHome />
              </div>
              Dashboard
            </li>
            <li style={{ display: 'flex', gap: '9px' }}>
              <div className='icon'>
                <FaPencilAlt />
              </div>
              Blog
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
