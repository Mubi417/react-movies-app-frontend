import React from 'react'
import './Nav.css'
import url from '../services/request'

const Nav = ({setSelectedGenre}) => {

    const handleNavClick = (select, e) => {
        const navChildren = document.querySelector('.nav').children
        for (const child of navChildren) {
            child.style.opacity = '0.7'
            child.style.transform = 'scale(1.0)'
            child.addEventListener('mouseover', (e) => {
                e.target.style.opacity = '1'
                e.target.style.transform = 'scale(1.2)'
            })
            child.addEventListener('mouseleave', (e) => {
                e.target.style.opacity = '0.7'
                e.target.style.transform = 'scale(1.0)'
            })
        }
        setSelectedGenre(select)
        e.target.style.opacity = '1'
        e.target.style.transform = 'scale(1.2)'
        e.target.addEventListener('mouseleave', (e) => {
            e.target.style.opacity = '1'
            e.target.style.transform = 'scale(1.2)'
        })
    }

    return (
        <div className="nav">
            <h2 onClick={(e) => handleNavClick(url.trendingMovies, e)}>Trending</h2>
            <h2 onClick={(e) => handleNavClick(url.topRatedMovies, e)}>Top Rated</h2>
            <h2 onClick={(e) => handleNavClick(url.actionMovies, e)}>Action</h2>
            <h2 onClick={(e) => handleNavClick(url.comedyMovies, e)}>Comedy</h2>
            <h2 onClick={(e) => handleNavClick(url.thrillerMovies, e)}>Thriller</h2>
            <h2 onClick={(e) => handleNavClick(url.romanceMovies, e)}>Romance</h2>
            <h2 onClick={(e) => handleNavClick(url.mysteryMovies, e)}>Mystery</h2>
            <h2 onClick={(e) => handleNavClick(url.sciFiMovies, e)}>Sci-Fi</h2>
            <h2 onClick={(e) => handleNavClick(url.dramaMovies, e)}>Drama</h2>
            <h2 onClick={(e) => handleNavClick(url.TVMovies, e)}>TV movies</h2>
            <h2 onClick={(e) => handleNavClick(url.animationMovies, e)}>Animation</h2>
        </div>
    )
}

export default Nav
