import { combineReducers } from "@reduxjs/toolkit"
import movieReducer from "./movieSlice"

//combine all reducers here
const rootReducer = combineReducers({
	movie: movieReducer
})

export default rootReducer
