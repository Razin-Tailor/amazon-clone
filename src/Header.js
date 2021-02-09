import React from 'react'
import './Header.css'
import amazonLogo from './assets/images/amazon-logo-white.png';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <div className="header__leftLogo">
                    <img src={amazonLogo} alt="Amazon Logo"/>
                    <p>.in</p>
                </div>
                
                <div className="header__leftAddress">
                    <LocationOnOutlinedIcon className="header__leftAddressIcon"/>
                    <div className="header__leftAddressDetail">
                        <p className="header__leftAddressGreeting">Hello</p>
                        <p className="header__leftAddressSelect">Select your address</p>
                    </div>
                    
                </div>
            </div>
            <div className="header__center">
                <div className="header__centerLeftButton">
                    <p>All</p>
                    <ArrowDropDownIcon/>
                </div>
                <input type="text"/>
                <div className="header_center_SearchContainer">
                    <SearchIcon className="header__centerSearchIcon"/>
                </div>
                
                
            </div>
            <div className="header__right">
                Header Right
            </div>
        </div>
    )
}

export default Header
