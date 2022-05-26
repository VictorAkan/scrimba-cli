import React from "react";
import logo from "./logo.svg";

function Navbar() {
    return (
        <div className="navbar">
            <nav className="first-nav">
                <header className="nav-head">
                    <img className="nav-img" src={logo} />
                    <h1 className="nav-logo">ReactFacts</h1>
                </header>
                <ul className="nav-ul">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar