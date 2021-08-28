import styled from 'styled-components'
import { NavLink as NLink } from 'react-router-dom'

export const Nav = styled.nav`
  background: #000;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem calc((100vh - 1000px) / 2);
  z-index: 10;
`;

export const NavLink = styled(NLink)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active{
    color: #15cdfc;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  } 
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const NavBtnLink = styled(NLink)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 20px;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: #010606;
  }
`;


