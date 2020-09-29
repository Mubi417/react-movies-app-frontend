import React from 'react'
import "./Header.css"
import logo from "../images/El-Mubarak Logo.png"
import HomeIcon from "@material-ui/icons/Home"
import FlashOnIcon from "@material-ui/icons/FlashOn"
import LiveTvIcon from "@material-ui/icons/LiveTv"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import SearchIcon from "@material-ui/icons/Search"
import PersonOutlineIcon from "@material-ui/icons/PersonOutline"

const Header = () => {
    return (
        <div className="header">
            <div className="header-icons">
                <div className="header-icon header-icon-active">
                    <HomeIcon />
                    <p>Home</p>
                </div>
                <div className="header-icon">
                    <FlashOnIcon />
                    <p>Trending</p>
                </div>
                <div className="header-icon">
                    <LiveTvIcon />
                    <p>Verified</p>
                </div>
                <div className="header-icon">
                    <VideoLibraryIcon />
                    <p>Collections</p>
                </div>
                <div className="header-icon">
                    <SearchIcon />
                    <p>Search</p>
                </div>
                <div className="header-icon">
                    <PersonOutlineIcon />
                    <p>Account</p>
                </div>
            </div>
            <img alt="logo" src={logo} />
        </div>
    )
}

export default Header
