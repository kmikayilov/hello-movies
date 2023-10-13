import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit"
import api from "../api"
import { MovieInfo } from "../interfaces"

interface State {
	isFetching: boolean,
	error: Object | null,
	moviesCount: number,
	movies: MovieInfo[] | null,
	movie: MovieInfo | null,
	currentPage: number,
	filterValue: string,
	pageSize: number,
	layout: string
}

const initialState: State = {
	isFetching: false,
	error: null,
	moviesCount: 0,
	movies: [],
	movie: null,
	currentPage: 1,
	filterValue: "",
	pageSize: 12,
	layout: "vertical"
}

export const filterMovies = createAsyncThunk("list/", async (query: string, thunkAPI: any) => {
	const response = await api.MovieAPI.filterMovies(query)
	if (!!response.error) return thunkAPI.rejectWithValue(response.error.Errors || response.error)
	return response
})

export const fetchMovie = createAsyncThunk("detail/", async (id: number, thunkAPI: any) => {
	const response = await api.MovieAPI.fetchMovie(id)
	if (!!response.error) return thunkAPI.rejectWithValue(response.error.Errors || response.error)
	return { movie: response }
})

export const setCurrentPage = createAction<number>('setCurrentPage');
export const setLayout = createAction<string>('setLayout');

const movieSlice = createSlice({
	name: "movie",
	initialState: initialState,
	reducers: {
		clearMovie(state: any) {
			state.movie = null
		},
		clearErrors(state: any) {
			state.error = null
		},
		setFilterData(state: any, action: any) {
			state.filterValue = action.payload
		},
		clearFilterData(state: any) {
			state.filterValue = initialState.filterValue
			state.currentPage = initialState.currentPage
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(filterMovies.pending, (state, action) => {
				state.isFetching = true
			})
			.addCase(filterMovies.fulfilled, (state, action) => {
				state.isFetching = false
				state.movies = action.payload.results
				state.moviesCount = action.payload.count
				state.error = null
			})
			.addCase(filterMovies.rejected, (state, action) => {
				state.isFetching = false
				state.error = action.payload || action.error
			})
			.addCase(fetchMovie.pending, (state, action) => {
				state.isFetching = true
			})
			.addCase(fetchMovie.fulfilled, (state, action) => {
				state.isFetching = false
				state.movie = action.payload.movie
				state.error = null
			})
			.addCase(fetchMovie.rejected, (state, action) => {
				state.isFetching = false
				state.error = action.payload || action.error
			})
			.addCase(setCurrentPage, (state, action) => {
				state.currentPage = action.payload
			})
			.addCase(setLayout, (state, action) => {
				state.layout = action.payload
			})
	},
})

export const { clearMovie, clearErrors, setFilterData, clearFilterData } = movieSlice.actions
export default movieSlice.reducer
