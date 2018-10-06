import React from 'react';

/**
 * Menu Component of the app
 * 
 * @author j.v.torres.fernandez
 * @version 1.0
 */
class Menu extends React.Component {
    /**
     * Renders the menu of the App
     */
    render() {
        return (
        <div className="Menu">
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#innovation">Innovation</a></li>
                    <li><a href="#guestbook">Guestbook</a></li>
                </ul>
            </nav>
        </div>
        );
    }
}

export default Menu;