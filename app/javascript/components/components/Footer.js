import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Footer extends Component {
    render() {
        const {
            logged_in
        } = this.props
        return (
            <footer >
                <ul>
                    <NavLink to='/'>&copy; 2021 Apartment World</NavLink>
                </ul>
                <ul>
                    <NavLink to='/apartmentindex'>Apartments For Rent</NavLink>
                </ul>
                <ul>
                    {logged_in && 
                        <a href='/userapts'>My Listings</a>
                    }
                </ul>
            </footer>
        );
    }
}

export default Footer;