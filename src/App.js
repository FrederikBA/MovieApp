import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import MoviesList from './components/MoviesList';
import MoviesTable from './components/MoviesTable';
import AddMovie from './components/AddMovie';

function App({ apiFacade }) {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movies-list' element={<MoviesList apiFacade={apiFacade} />} />
        <Route path='movies-table' element={<MoviesTable apiFacade={apiFacade} />} />
        <Route path='add-movie' element={<AddMovie />} />
      </Routes>
    </div>
  )
}

export default App;
