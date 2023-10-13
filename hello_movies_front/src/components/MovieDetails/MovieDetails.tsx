import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';


import { MovieInfo } from "../../helpers/interfaces";
import { fetchMovie, clearMovie } from "../../helpers/state/movieSlice";

import "./MovieDetails.scss"

import StarIcon from "../../assets/icons/star.svg"

const MovieDetails: React.FC = () => {

    const dispatch: any = useDispatch();
    const navigate = useNavigate();

    const { id } = useParams();

    let movie: MovieInfo | null = useSelector((state: any) => state.movie.movie, shallowEqual)

    const [genres, setGenres] = useState<Array<string>>([])
    const [actors, setActors] = useState<Array<string>>([])
    const [directors, setDirectors] = useState<Array<string>>([])

    const handleReturnToResults = () => {
        dispatch(clearMovie())
        navigate('/');
    }

    useEffect(() => {
        if (!movie && id) {
            dispatch(fetchMovie(parseInt(id)))
        }
    }, [movie, id, dispatch])

    useEffect(() => {
        if (!!movie) {
            setGenres(movie.genres.split(','))
            setActors(movie.actors.split(','))
            setDirectors(movie.director.split(','))
        }
    }, [movie])

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
                            <div className="item__duration">{movie?.duration} min</div>
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
            <button className="btn" onClick={handleReturnToResults}>&larr; Back To Results</button>
        </div>
    )
}

export default MovieDetails