import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';

import StarIcon from "../../assets/icons/star.svg"

import { MovieInfo } from "../../helpers/interfaces";

import "./MovieDetails.scss"

const MovieDetails: React.FC = () => {

    const movie = {
        id: 3, 
        title: "The Woman King", 
        image: "https://upload.wikimedia.org/wikipedia/en/3/34/The_Woman_King_%28film%29.jpg", 
        director: "Peter Jackson", 
        genres: "Action,Drama,History", 
        duration: 135, 
        score: 6.7, 
        rating: 6.7, 
        overview: "A greedy film producer assembles a team of moviemakers and sets out for the infamous Skull Island, where they find more than just cannibalistic natives.", 
        year: 2022, 
        actors: "Christian Bale,Heath Ledger,Aaron Eckhart,Michael Caine" 
    };

    const genres = movie.genres.split(',')
    const actors = movie.actors.split(',')
    const directors = movie.director.split(',')
    

    return (
        <div className="movie-overview-page">
            <div className="details">
                <div className="first-half">
                    <div className="item__poster__image" style={{ backgroundImage: `url(${movie?.image})`}}></div>
                    <div className="item__year">{movie?.year}</div>
                </div>
                <div className="second-half">
                    <div className="item__title">{movie?.title}</div>
                    <div className="item__overview">{movie?.overview}</div>
                    <div className="row">
                        <div className="item__desc">
                            { 
                                genres.map( (genre, idx) => ( <div className="item__genre" key={idx}>{genre}</div> ) )
                            }
                            <div className="item__duration">{movie.duration} min</div>
                        </div>
                        <div className="item__rating">
                            <span>IMDb:</span>
                            <img src={StarIcon} alt="star" className="star" />
                            <span className="item__score">{movie?.score}</span>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="item__directors">
                        <span>Director: </span>
                        <span>
                            {
                                directors.map( (director, idx) => ( <div className="item__director" key={idx}>{director}</div> ) )   
                            }
                        </span>
                    </div>
                    <div className="item__actors">
                        <span>Actors: </span>
                        <span>
                            {
                                actors.map( (actor, idx) => ( <div className="item__actor" key={idx}>{actor}</div> ) )   
                            }
                        </span>
                    </div>
                </div>
            </div>
            <button className="btn">&larr; Back To Results</button>
        </div>
    )
}

export default MovieDetails