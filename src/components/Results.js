import React, { useState, useEffect } from 'react'
import './Results.css'
import VideoCard from './VideoCard'
import axios from '../services/axios'
import FlipMove from 'react-flip-move'

const Results = ({ selectedGenre }) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(selectedGenre).then(result => {
            setMovies(result.data.results)
        }).catch(() => {
            setMovies(undefined)
        })
    }, [selectedGenre])

    return (
        <div className="results">
            <FlipMove>
                {movies ? movies.map(movie => <VideoCard key={movie.id} movie={movie}/>
                ) : <p>No Movie Found, Check Your Internet Connection.</p>}
            </FlipMove>
        </div>
    )
}

export default Results
