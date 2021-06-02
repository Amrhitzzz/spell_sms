import React from 'react';
import "../css/nav.css";
let mainLogoName = "Spell SMS"

function Navbar() {
    return (
        <>
            <div className="home_header">
                <div className="home_logo">
                    <img alt="spell_logo" />
                    <h3>{mainLogoName}</h3>
                </div>

                <div className="home_navitems">
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Resources</li>
                        <li>Partner With Us</li>
                        <li>Contact Us</li>
                        <li>Login</li>
                    </ul>
                </div>
            </div>
        </>



    )
}

export default Navbar;
