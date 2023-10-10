import React, { useState } from "react"

import ListItems from "../ListItems/ListItems"

import "./List.scss"

import SearchIcon from "../../assets/icons/search.svg"
import MoviesIcon from "../../assets/icons/movie.svg"
import TVIcon from "../../assets/icons/tv.svg"


const List: React.FC = () => {

    let [searchValue, setSearchValue] = useState<string>("")

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

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