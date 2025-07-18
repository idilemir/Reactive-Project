import React, { useState } from "react"; 

export default function Navbar () {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">
                <img src="/logo.png" alt="Logo" />
            </div>
            <i 
            className="fa-solid fa-bars menu-hmbrgr"
            onClick={() => setMenuOpen(!menuOpen)}
            ></i>
            <ul className={menuOpen ? "show" : ""}>
              <li><a href="#home">Home</a></li>
              <li><a href="#classes">Classes</a></li>
              <li><a href="#trainers">Trainers</a></li>
              <li><a href="#purchase">Purchase</a></li>
              <li><a href="#review">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#sign-up">Sign Up</a></li>
            </ul>
        </nav>
    );
}