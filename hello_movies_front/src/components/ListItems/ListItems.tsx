import React, { useEffect, useState } from "react"

import ListItem from "../ListItem/ListItem"
import { MovieInfo } from "../../helpers/interfaces"

import "./ListItems.scss"


const ListItems: React.FC = () => {
    
    let items: MovieInfo[] = [
        {id: 1, title: "Tulsa King", image: "https://m.media-amazon.com/images/I/71Wkv0+rqpL.jpg", director: "", genres: "Crime, Drama", duration: 128, score: 7.2, rating: 7.2, overview: "", year: 2022, actors: "" },
        {id: 2, title: "The Woman King", image: "https://upload.wikimedia.org/wikipedia/en/3/34/The_Woman_King_%28film%29.jpg", director: "", genres: "Action, Drama, History", duration: 135, score: 6.7, rating: 6.7, overview: "", year: 2022, actors: "" },
        {id: 3, title: "The Woman King", image: "https://upload.wikimedia.org/wikipedia/en/3/34/The_Woman_King_%28film%29.jpg", director: "", genres: "Action, Drama, History", duration: 135, score: 6.7, rating: 6.7, overview: "", year: 2022, actors: "" },
        {id: 4, title: "Tulsa King", image: "https://m.media-amazon.com/images/I/71Wkv0+rqpL.jpg", director: "", genres: "Crime, Drama", duration: 128, score: 7.2, rating: 7.2, overview: "", year: 2022, actors: "" },
        {id: 5, title: "Tulsa King", image: "https://m.media-amazon.com/images/I/71Wkv0+rqpL.jpg", director: "", genres: "Crime, Drama", duration: 128, score: 7.2, rating: 7.2, overview: "", year: 2022, actors: "" }
    ]

    let [ layout, setLayout ] = useState<string>("vertical")
    const [currentPage, setCurrentPage] = useState<number>(1);
    
    const itemsPerPage = 3;
    const startIndex = (currentPage - 1) * itemsPerPage + 1;
    const endIndex = Math.min(currentPage * itemsPerPage, items.length);

    const handlePrevClick = () => {
        if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < Math.ceil(items.length / itemsPerPage)) {
        setCurrentPage(currentPage + 1);
        }
    };

    useEffect(() => {

    }, [])



    return (
        <>
            <div className="list-items-info">
                <div className="list-items-info-count">Found <span className="count">{items.length}</span> Movies</div>
                <div className="list-items-layout">
                    <span>layout:</span>
                    <button className={`btn vertical-layout ${layout === "vertical" ? 'active' : ""}`} onClick={ () => setLayout("vertical") }>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                            <path d="M2 0a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H2Zm6-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V2Zm0 8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2Z" fillRule="evenodd"/>
                        </svg>
                    </button>
                    <button className={`btn horizontal-layout ${layout === "horizontal" ? 'active' : ""}`} onClick={ () => setLayout("horizontal") }>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                            <path d="M14.857 0C15.488 0 16 .448 16 1v2c0 .552-.512 1-1.143 1H1.143C.512 4 0 3.552 0 3V1c0-.552.512-1 1.143-1h13.714Zm0 6C15.488 6 16 6.448 16 7v2c0 .552-.512 1-1.143 1H1.143C.512 10 0 9.552 0 9V7c0-.552.512-1 1.143-1h13.714ZM16 13c0-.552-.512-1-1.143-1H1.143C.512 12 0 12.448 0 13v2c0 .552.512 1 1.143 1h13.714c.631 0 1.143-.448 1.143-1v-2Z" fillRule="evenodd"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="list-items">
                {
                    items.map( (item, index) => <ListItem layout={layout} data={item} key={index} /> )
                }
            </div>
            {
                items.length > itemsPerPage && (
                    <div className="list-items-paginate">
                        <div className="list-items-paginate-info">Showing {startIndex} to {endIndex} of <span className="count">{items.length}</span> results</div>
                        <div className="list-items-paginate-btns">
                            <button className={`btn btn-previous ${ currentPage === 1 ? "disabled" : "" }`} onClick={handlePrevClick} disabled={currentPage === 1}>Previous</button>
                            <button className={`btn btn-next ${ currentPage >= Math.ceil(items.length / itemsPerPage) ? "disabled" : "" }`} onClick={handleNextClick} disabled={currentPage >= Math.ceil(items.length / itemsPerPage)}>Next</button>
                        </div>
                    </div>
                )
            }
            
        </>
    )
}

export default ListItems