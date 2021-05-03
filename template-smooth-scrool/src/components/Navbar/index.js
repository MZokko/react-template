import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib'
import {
  Nav,
  NavbarContainer,
  NavbarLogo,
  MobileIcon,
  NavbarMenu,
  NavbarItem,
  NavbarLinks,
  NavbarBtn,
  NavbarBtnLink,
} from './NavbarStyle';

const Navbar = ({ toggle }) => {
  const [scrollNav, setscrollNav] = useState(false);

  const changeNavColorOnScrollHandler = () => {
    if (window.scrollY >= 80) {
      setscrollNav(true);
    } else {
      setscrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavColorOnScrollHandler);
  }, []);

  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavbarLogo to='/'>Zokko</NavbarLogo>
          {/* Mobile */}
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavbarMenu>
            <NavbarItem>
              <NavbarLinks to='about'>About</NavbarLinks>
            </NavbarItem>
            <NavbarItem>
              <NavbarLinks to='discover'>Discover</NavbarLinks>
            </NavbarItem>
            <NavbarItem>
              <NavbarLinks to='services'>Services</NavbarLinks>
            </NavbarItem>
            <NavbarItem>
              <NavbarLinks to='signup'>Sign Up</NavbarLinks>
            </NavbarItem>
          </NavbarMenu>

          <NavbarBtn>
            <NavbarBtnLink to='/signin'>Sign In</NavbarBtnLink>
          </NavbarBtn>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
