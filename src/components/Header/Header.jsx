import React from 'react';
import { Menu } from '../../components';

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
                    src={this.props.logo}
                    />
                </div>
                <h1 className="Header__title">II OPENATHON Custom Open Cloud</h1>
                <Menu />
            </div>
        );
    }
}

export default Header;