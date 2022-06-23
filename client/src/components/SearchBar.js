import {useState} from "react";
import styled from 'styled-components';

const SearchBar = () => {

  const [query, setQuery] = useState('')


  return (
    <StyledSearchBar>
      <form action="/" method="get" >
          <label htmlFor="header-search">
              <span className="visually-hidden">Search movies</span>
          </label>
          <input
              type="text"
              id="header-search"
              placeholder="Search movies"
              name="search"
              value={query}
              onChange={e => {setQuery(e.target.value)}}
          />
          <button type="submit" >Search</button>
      </form>
    </StyledSearchBar>
  )

};

const StyledSearchBar = styled.div`
  padding: 20px
  justify-content: right;
`

export default SearchBar;