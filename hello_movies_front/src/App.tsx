import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import List from './components/List/List';
import MovieDetails from "./components/MovieDetails/MovieDetails";

import './App.css';
import "./assets/css/custom.scss"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-wrapper">
        <Router>
          <Routes>
            <Route path="/" Component={List} />
            <Route path="/:id" Component={MovieDetails} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
