import React, { useState } from "react"

import ReactPaginate from "react-paginate"

import ListItem from "../ListItem/ListItem"
import { MovieInfo } from "../../helpers/interfaces"

import "./ListItems.scss"

const ITEMS_PER_PAGE = 5; // Number of items to display per page

const ListItems: React.FC = () => {

    let items: MovieInfo[] = [
        {id: 1, title: "Tulsa King", image: "https://m.media-amazon.com/images/I/71Wkv0+rqpL.jpg", director: "", genres: "Crime, Drama", duration: 128, score: 7.2, rating: 7.2, overview: "", year: 2022, actors: "" },
        {id: 2, title: "The Woman King", image: "https://upload.wikimedia.org/wikipedia/en/3/34/The_Woman_King_%28film%29.jpg", director: "", genres: "Action, Drama, History", duration: 135, score: 6.7, rating: 6.7, overview: "", year: 2022, actors: "" },
        {id: 3, title: "The Woman King", image: "https://upload.wikimedia.org/wikipedia/en/3/34/The_Woman_King_%28film%29.jpg", director: "", genres: "Action, Drama, History", duration: 135, score: 6.7, rating: 6.7, overview: "", year: 2022, actors: "" },
        {id: 4, title: "Tulsa King", image: "https://m.media-amazon.com/images/I/71Wkv0+rqpL.jpg", director: "", genres: "Crime, Drama", duration: 128, score: 7.2, rating: 7.2, overview: "", year: 2022, actors: "" },
        {id: 5, title: "Tulsa King", image: "https://m.media-amazon.com/images/I/71Wkv0+rqpL.jpg", director: "", genres: "Crime, Drama", duration: 128, score: 7.2, rating: 7.2, overview: "", year: 2022, actors: "" }
    ]

    let [ layout, setLayout ] = useState<string>("vertical")
    const [currentPage, setCurrentPage] = useState<number>(0);

    const handlePageChange = (selectedItem: { selected: number }) => {
        setCurrentPage(selectedItem.selected);
    };

    const pageCount = Math.ceil(items.length / ITEMS_PER_PAGE);
    const startIndex = currentPage * ITEMS_PER_PAGE;
    const endIndex = (currentPage + 1) * ITEMS_PER_PAGE;

    // let [searchValue, setSearchValue] = useState<string>("")

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setSearchValue(e.target.value);
    // };

    return (
        <div className="list-items">
            {
                items.map( (item, index) => <ListItem layout={layout} data={item} key={index} /> )
            }
            <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                pageCount={pageCount}
                onPageChange={handlePageChange}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
        </div>
    )
}

export default ListItems