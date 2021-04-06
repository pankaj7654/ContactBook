import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar shadow bg-primary fixed-top navbar">
            <div className="container">
            <Link to="/" className="navbar-brand text-light">
                Contact Book
            </Link>
            </div>
            <div>
                <Link to="/contacts/add" className="btn btn-light ml-auto">
                    Create Contact
                </Link>
            </div>
        </nav>
        
    )
}

export default Navbar;


