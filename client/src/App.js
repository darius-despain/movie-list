import './App.css';
import MovieList from "./components/MovieList.js"
import Header from "./components/Header.js"
import AddMovies from "./components/AddMovies.js"
import {React} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {AppProvider} from './Context';


// const movies = [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ];

const App = () => {


  return (
    // <AppProvider>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<MovieList />}/>
            <Route path='/add' element={<AddMovies />}/>
            <Route path='/watched' element={<MovieList />}/>
            <Route path='/to-watch' element={<MovieList />}/>
          </Routes>
        </Router>
      </div>

    // </AppProvider>
  );
}

export default App;
