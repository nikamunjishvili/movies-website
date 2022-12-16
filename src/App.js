import './App.css';
import { HashRouter as Router, Routes, Route, HashRouter } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/Home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';

function App() {
  return (
    <div className="App">
      <HashRouter> 
        <Router>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<Home />}></Route>
            </Routes>
        </Router>
      </HashRouter>
       
    </div>
  );
}

export default App;
