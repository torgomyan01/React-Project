import React, { Component } from 'react';
import './navbar.css';




export default class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <div className="Logo">MNTN</div>
                <div className="menu">
                    <a href="#" className="menu-text">Equipment</a> 
                    <a href="#" className="menu-text">About us</a> 
                    <a href="#" className="menu-text">Blog</a> 
                </div>
                <div className="accaunt-block">
                    <a href="#" className="acc-href">Account</a>
                </div>
            </div>
        )
    }
}
