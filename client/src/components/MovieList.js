import {useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react';
import { FcCheckmark } from 'react-icons/fc'

const MovieList = () => {
  const params = new URLSearchParams(useLocation().search);
  const path = useLocation().pathname;
  console.log(`path: ${path}`)
  const query = params.get('search');


  //gets initial list of movies from the API and filters them or stores all of them
  const [movies, setMovies] = useState([])
  useEffect ( () => {
    fetch ('https://movie-list-ddespain.herokuapp.com/')
    .then (res => res.json())
    .then (data => {
      if(query) {
        // console.log(`movies before filter: `, data)
        // console.log('query: ', query)
        setMovies(data.filter(element => element.title.includes(query)))
        // console.log(`movies after filter: `, data)
      } else if(path === '/to-watch') {
        setMovies(data.filter(element => !element.watched))
      } else if(path === '/watched') {
        setMovies(data.filter(element => element.watched))
      } else {
        setMovies(data)
      }
    })
  },[query, path])

      // handles delete
      const [movieToDelete, setMovieToDelete] = useState({
        id: 0,
        title: ''
      })

  useEffect( () => {
    if(movieToDelete.id > 0) {
      console.log(`delete running on id: ${movieToDelete.id}`)
      fetch (`https://movie-list-ddespain.herokuapp.com/${movieToDelete.id}`, {
        method: "DELETE",
      })
      .then(res => {
        if(res.status === 200) {
          window.alert(`movie, ${movieToDelete.title}, has been deleted`)
          window.location.reload();
        } else {
          window.alert(`delete request for movie, ${movieToDelete.title}, has been rejected by the server`)
        }
      })
    }
  }, [movieToDelete])

  //handles watch toggle
  const [movieToToggleWatch, setMovieToToggleWatch] = useState({
    id: 0,
    title: ''
  })

  useEffect( () => {
    if(movieToToggleWatch.id > 0) {
      const currentWatchState = !!movieToToggleWatch.watched
      const body = {
        watched: !currentWatchState
      }
      console.log(`watch toggle running on id: ${movieToToggleWatch.id}`)
      console.log(`toggling watched from ${currentWatchState} to ${!currentWatchState} for ${movieToToggleWatch.title}`)
      fetch (`https://movie-list-ddespain.herokuapp.com/${movieToToggleWatch.id}`, {
        method: "PATCH",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      .then(res => {
        if(res.status === 200) {
          // window.alert(`movie, ${movieToToggleWatch.title}, has been toggled to watch`)
          window.location.reload();
          console.log(`movie watch toggled successfully`)
        } else {
          window.alert(`watch toggle request for movie, ${movieToToggleWatch.title}, has been rejected by the server`)
        }
      })
    }
  }, [movieToToggleWatch])


  return (
    <>
      <h2> {
        path === '/watched' ? "Movie Titles Watched:" :
        path === '/to-watch' ? "Movie Titles to Watch:" :
        query ? "Search Results:" : "All Movie Titles:"
              }
      </h2>
      {movies.length === 0 ? <h4>No movies to show, try adding some!</h4> : null}
      <ul>
        {movies.map((element) => {
          return (
            <li key={element.id}>
              {element.title}
              <button className="delete" onClick={() => setMovieToDelete(element)}>Delete</button>
              <button className="watched" onClick={() => setMovieToToggleWatch(element)}>Watched?</button>
              {element.watched ? <FcCheckmark /> : null}
            </li>
          )
          })}
      </ul>
    </>
  )



}

export default MovieList;