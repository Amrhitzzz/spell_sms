import React from 'react';
let mainLogoName = "Spell SMS"

function Nav() {
    return (
        <div className = "home_header">
            <div className = "logo">  
                <img alt="spell_logo" />
                <h3>{ mainLogoName }</h3>
            </div>
            
            <div className = "nav_items">
                <li>Home</li>
                <li>Services</li>
                <li>Resources</li>
                <li>Partner With Us</li>
                <li>Contact Us</li>
                <li>Login</li>
            </div>
        </div>
    )
}

export default Nav
