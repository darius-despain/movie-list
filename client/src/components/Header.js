import SearchBar from "./SearchBar.js"
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import NavBar from './NavBar';

const Header = () => {
  return (
    <StyledHeader className="App-header">
      <Link to={'/'} >{<h1>Movie-List App</h1>}</Link>
      <SearchBar className='search'/>
      <NavBar />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  a {
    text-decoration: none;
    color: white;
  }
  .search {

  }
`

export default Header;