import React from 'react'
import { useHistory } from 'react-router';
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from './NavBarElements';
import Search from '../Search';

const Navbar = ({ query, setQuery, data, setData }) => {

  return (
      <Nav>
        <NavLink to="/">
          <h1>123Recipe</h1>
        </NavLink>
        <Search 
          query={query} 
          setQuery={setQuery} 
          data={data} 
          setData={setData} 
          className="search"
          />
        <NavMenu>
          <NavLink to='/sign-up' activeStyle>Sign up</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
  )
}

export default Navbar
