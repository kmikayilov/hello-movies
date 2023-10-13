import React, { useEffect, useRef } from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"

import ListItem from "../ListItem/ListItem"
import { MovieInfo } from "../../helpers/interfaces"

import { setCurrentPage, setLayout } from "../../helpers/state/movieSlice"

import "./ListItems.scss"

const ListItems: React.FC = () => {

    const dispatch: any = useDispatch();
    
	const movies = useSelector((state: any) => state.movie.movies, shallowEqual)
	const moviesCount = useSelector((state: any) => state.movie.moviesCount, shallowEqual)
	const pageSize = useSelector((state: any) => state.movie.pageSize, shallowEqual)
	const currentPage = useSelector((state: any) => state.movie.currentPage, shallowEqual)
	const layout = useSelector((state: any) => state.movie.layout, shallowEqual)

    const startIndex = useRef(0);
    const endIndex = useRef(0);

    const handlePrevClick = () => {
        if (currentPage > 1) {
            dispatch(setCurrentPage(currentPage - 1));
        }
    };

    const handleNextClick = () => {
        if (currentPage < Math.ceil(moviesCount / pageSize)) {
            dispatch(setCurrentPage(currentPage + 1))                
        }
    };

    const handleLayoutChange = (layout: string) => {
        dispatch(setLayout(layout));
    }

    useEffect(() => {
        startIndex.current = (currentPage - 1) * pageSize + 1;
        endIndex.current = Math.min(currentPage * pageSize, moviesCount);
    }, [currentPage, pageSize, moviesCount])

    return (
        <>
            <div className="list-items-info">
                <div className="list-items-info-count">Found <span className="count">{moviesCount}</span> Movies</div>
                <div className="list-items-layout">
                    <span>layout:</span>
                    <button className={`btn vertical-layout ${layout === "vertical" ? 'active' : ""}`} onClick={ () => handleLayoutChange("vertical") }>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                            <path d="M2 0a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H2Zm6-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V2Zm0 8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2Z" fillRule="evenodd"/>
                        </svg>
                    </button>
                    <button className={`btn horizontal-layout ${layout === "horizontal" ? 'active' : ""}`} onClick={ () => handleLayoutChange("horizontal") }>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                            <path d="M14.857 0C15.488 0 16 .448 16 1v2c0 .552-.512 1-1.143 1H1.143C.512 4 0 3.552 0 3V1c0-.552.512-1 1.143-1h13.714Zm0 6C15.488 6 16 6.448 16 7v2c0 .552-.512 1-1.143 1H1.143C.512 10 0 9.552 0 9V7c0-.552.512-1 1.143-1h13.714ZM16 13c0-.552-.512-1-1.143-1H1.143C.512 12 0 12.448 0 13v2c0 .552.512 1 1.143 1h13.714c.631 0 1.143-.448 1.143-1v-2Z" fillRule="evenodd"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="list-items">
                {
                    movies.map( (item: MovieInfo, index: number) => <ListItem layout={layout} data={item} key={index} /> )
                }
            </div>
            {
                moviesCount > pageSize && (
                    <div className="list-items-paginate">
                        <div className="list-items-paginate-info">Showing {startIndex.current} to {endIndex.current} of <span className="count">{moviesCount}</span> results</div>
                        <div className="list-items-paginate-btns">
                            <button className={`btn btn-previous ${ currentPage === 1 ? "disabled" : "" }`} onClick={handlePrevClick} disabled={currentPage === 1}>Previous</button>
                            <button className={`btn btn-next ${ currentPage >= Math.ceil(moviesCount / pageSize) ? "disabled" : "" }`} onClick={handleNextClick} disabled={currentPage >= Math.ceil(moviesCount / pageSize)}>Next</button>
                        </div>
                    </div>
                )
            }
            
        </>
    )
}

export default ListItems