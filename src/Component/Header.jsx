import React, { useState } from 'react';
import '../Style/Header.css';
import { FaUser } from 'react-icons/fa';
import { MdLocalHospital } from 'react-icons/md';



function Header() {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };

    const handleLogout = () => {
        // Add logout logic here
        console.log("Logged out!");
    };

    return (
        <header className="dashboard-header">
            <h1 style={{display:'flex',alignItems:'center',gap:'0.4em'}}><MdLocalHospital />Aryan</h1>
            <div className="user-dropdown">
                <div className="user-icon" onClick={handleDropdownToggle}>
                    <FaUser />
                </div>
                {showDropdown && (
                    <div className="dropdown-content">
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
