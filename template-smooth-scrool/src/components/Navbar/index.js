import React from 'react';
import {FaBars} from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  NavbarLogo,
  MobileIcon,
  NavbarMenu,
  NavbarItem,
  NavbarLinks,
} from './NavbarStyle';
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavbarLogo to='/'>Zokko</NavbarLogo>
          {/* Mobile */}
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavbarMenu>
            <NavbarItem>
              <NavbarLinks to='about'>About</NavbarLinks>
            </NavbarItem>
          </NavbarMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
