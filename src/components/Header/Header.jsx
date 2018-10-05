import React from 'react';

/**
 * Header Component of the app
 * 
 * @author j.v.torres.fernandez
 * @version 1.0
 */
class Header extends React.Component {
    /**
     * Renders the logo, the title and the menu of the App
     */
    render() {
        return (
            <div className="Header">
                <div className="Header__logo">
                    <img alt="Accenture Logo"
                    src="https://www.accenture.com/t20180820T081710Z__w__/us-en/_acnmedia/Accenture/Dev/Redesign/Acc_Logo_Black_Purple_RGB.PNG"
                    />
                </div>
                <h1 className="Header__title">II OPENATHON Custom Open Cloud</h1>
                <div className="Header__menu">
                    <nav>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#innovation"></a>Innovation</li>
                            <li><a href="#guestbook">Guestbook</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header;