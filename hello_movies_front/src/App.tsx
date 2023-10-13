import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux"

import LoadingIcon from "./assets/loading animated svg/loadin.svg"

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import List from './components/List/List';
import MovieDetails from "./components/MovieDetails/MovieDetails";

import './App.css';
import "./assets/css/custom.scss"

function App() {

  const isFetching = useSelector((state: any) => state.movie.isFetching, shallowEqual)

  return (
    <>
      <div className="App">
        <Header />
        <div className="content-wrapper">
          <Router>
            <Routes>
              <Route path="/" Component={List} />
              <Route path="/detail/:id" Component={MovieDetails} />
            </Routes>
          </Router>
        </div>
        <Footer />
      </div>
      {
        isFetching && (<div className="loading"><img src={LoadingIcon} alt="loading_icon" /></div>)
      }
    </>
  );
}

export default App;
