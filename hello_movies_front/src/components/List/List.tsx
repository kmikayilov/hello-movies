import React, { useState, useEffect } from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"

import ListItems from "../ListItems/ListItems"

import "./List.scss"

import SearchIcon from "../../assets/icons/search.svg"
import MoviesIcon from "../../assets/icons/movie.svg"
import TVIcon from "../../assets/icons/tv.svg"

import { filterMovies } from "../../helpers/state/movieSlice"


const List: React.FC = () => {

    let typingTimer: NodeJS.Timeout | null = null;
    const typingDelay: number = 1500;

    const dispatch: any = useDispatch()

    let [searchValue, setSearchValue] = useState<string>("")
    let [filterValue, setFilterValue] = useState<string>("")

	const currentPage = useSelector((state: any) => state.movie.currentPage, shallowEqual)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        
        if (typingTimer) {
            clearTimeout(typingTimer);
        }
        
        typingTimer = setTimeout(() => {
            setFilterValue(e.target.value);
        }, typingDelay);
    };

    useEffect(() => {
        const query: any = {
            title: filterValue,
            page: currentPage
        }

        dispatch(filterMovies(query))
    }, [dispatch, filterValue, currentPage])

    return (
        <div className="list">
            <div className="list__search">
                <div className="list__search__question">Need help finding the next movie?</div>
                <div className="list__search__title">Search for your next movie through HelloMovie's huge movie library</div>
                <div className="list__search__input__wrapper">
                    <img src={SearchIcon} alt="list__search__input__icon" className="list__search__input__icon" />
                    <input type="text" id="search_input" className="list__search__input" placeholder="Search for you next movie" value={searchValue} onChange={handleInputChange} />
                </div>
                <div className="list__search__categories">
                    <div className="list__search__category">
                        <img src={MoviesIcon} alt="list__search__category__icon" className="list__search__category__icon" />
                        <span className="list__search__category__name">Movies</span>
                    </div>
                    <div className="list__search__category">
                        <img src={TVIcon} alt="list__search__category__icon" className="list__search__category__icon" />
                        <span className="list__search__category__name">TV Shows</span>
                    </div>
                </div>
            </div>
            <div className="list__results">
                <ListItems />
            </div>
        </div>
    )
}

export default List