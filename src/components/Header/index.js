import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './index.css';

export default function Header() {
    const location = useLocation().pathname;
    
    return (
        <header>
            <img className="logo" src="icons/logo.svg" alt="Logo"/>
            <Link to="/" style={
                {color: location === "/" ? "var(--black)" : "var(--grey)"}
            }>Home</Link>
            <Link to="/about" style={
                {color: location === "/about" ? "var(--black)" : "var(--grey)"}
            }>Sobre</Link>
            <Link to="/contact" style={
                {color: location === "/contact" ? "var(--black)" : "var(--grey)"}
            }>Contato</Link>
            <Link to="/signup">
                <button type="button" className="">
                    Registre-se
                </button>
            </Link>
        </header>
    );
}
