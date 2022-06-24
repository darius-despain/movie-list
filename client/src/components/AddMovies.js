import {useState} from "react";
import styled from 'styled-components';


const AddMovies = () => {
  const [newTitle, setNewTitle] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    if( typeof newTitle !== 'string') {
      window.alert(`Error on submission! title: ${newTitle} must be of type string, instead got ${typeof newTitle}`)
    } else if(newTitle.length < 1) {
      window.alert(`Error on submission! title: ${newTitle} must be at least of length 1, instead got ${newTitle.length}`)
    } else {
      let body = {
        title: newTitle
      }
      let res = await fetch ('https://movie-list-ddespain.herokuapp.com/', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      if(res.status === 200){
        window.alert(`new movie, ${newTitle}, has been added`)
        setNewTitle('');
      } else {
        window.alert(`your movie, ${newTitle}, was rejected by the server`)
      }
    }
  }
  return (
    <StyledAddMovies>
      <h3>Add Movies:</h3>
      <form action="/" method="get" >
          <label htmlFor="add-movies">
              <span className="visually-hidden">Add Movies</span>
          </label>
          <input
              type="text"
              id="add-movies"
              placeholder="Enter a new movie title here"
              name="text"
              value={newTitle}
              onChange={e => {setNewTitle(e.target.value)}}
          />
          <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </StyledAddMovies>
  )

};

const StyledAddMovies = styled.div`
  padding: 100px
`
export default AddMovies;