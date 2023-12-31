import React from "react"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"

import { MovieInfo } from "../../helpers/interfaces"
import { fetchMovie } from "../../helpers/state/movieSlice";

import "./ListItem.scss"

import StarIcon from "../../assets/icons/star.svg"

interface ListItemProps {
    layout: string,
    data: MovieInfo
}

const ListItem: React.FC<ListItemProps> = ({ layout, data }) => {
    
    const dispatch: any = useDispatch();

    const navigate = useNavigate();

    const handleMovieClick = () => {
        dispatch(fetchMovie(data.id))
        navigate(`/detail/${data.id}`);
    }

    return (
        <div className={`list-item ${layout}`} onClick={handleMovieClick}>
            {
                layout === "vertical" ? (
                    <>
                        <div className="item__poster">
                            <div className="item__poster__image" style={{ backgroundImage: `url(${data.image})`}}></div>
                            <div className="item__year">{data.year}</div>
                        </div>
                        <div className="item__title">{data.title}</div>
                        <div className="item__desc">
                            <span className="item__genres">{data.genres}</span>
                            <span className="item__dot">·</span>
                            <span className="item__duration">{data.duration} min</span>
                        </div>
                        <div className="item__rating">
                            <span className="imdb-title">IMDb:</span>
                            <img src={StarIcon} alt="star" className="star" />
                            <span className="item__score">{data.score}</span>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="first-half">
                            <div className="item__poster__image" style={{ backgroundImage: `url(${data.image})`}}></div>
                        </div>
                        <div className="second-half">
                            <div className="first-row">
                                <div className="item__year">{data.year}</div>
                                <div className="item__rating">
                                    <span className="imdb-title">IMDb:</span>
                                    <img src={StarIcon} alt="star" className="star" />
                                    <span className="item__score">{data.score}</span>
                                </div>
                            </div>
                            <div className="item__title">{data.title}</div>
                            <div className="item__desc">
                                <span className="item__genres">{data.genres}</span>
                                <span className="item__dot">·</span>
                                <span className="item__duration">{data.duration} min</span>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default ListItem