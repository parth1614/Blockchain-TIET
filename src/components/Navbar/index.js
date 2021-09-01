import React from 'react';
import {Nav,NavbarContainer,MobileIcon,NavLogo,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from './NavbarElements';
import {FaBars} from 'react-icons/fa'
import './Navbar.css'

const Navbar = ({toggle}) => {
  return(
    <div className="navbarr">
  <Nav>
  <NavbarContainer>
  <NavLogo to="/">
  BlockTiet
  </NavLogo>
  <MobileIcon onClick={toggle}>
  <FaBars />
  </MobileIcon>
  <NavMenu>
  <NavItem>
  <NavLinks to="about">About</NavLinks>
  </NavItem>
  <NavItem>
  <NavLinks to="discover">Discover</NavLinks>
  </NavItem>
   <NavItem>
  <NavLinks to="services">Team</NavLinks>
  </NavItem>
   <NavItem>
  <NavLinks to="signup">Collaborate!</NavLinks>
  </NavItem>
  </NavMenu>
  <NavBtn>
  <NavBtnLink to="/signin">Research</NavBtnLink>
  </NavBtn>
  </NavbarContainer>
  </Nav>
  </div>
  );
}

export default Navbar;