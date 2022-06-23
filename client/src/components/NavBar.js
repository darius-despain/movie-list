import {Link} from 'react-router-dom'
import styled from 'styled-components'


const NavBar = () => {
  return (
    <StyledNavBar className="upper">
      <Link to={'/add'}>{<h4>Add a movie!</h4>}</Link>
      <Link to={'/watched'}>{<h4>Watched</h4>}</Link>
      <Link to={'/to-watch'}>{<h4>To Watch</h4>}</Link>
    </StyledNavBar>
  )
}

const StyledNavBar = styled.header`
  a {
    text-decoration: none;
    color: white;
  }
  .upper {
    margin: 30px;
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 80px;
    border: 1px gray solid;
    padding: 5px;
  }

  .upper > h4 {
    flex: 1 1 auto;
    border: 1px red solid;
    text-align: center;

    margin: 5px;  /* and that, will result in a 10px gap */
  }



`

export default NavBar;