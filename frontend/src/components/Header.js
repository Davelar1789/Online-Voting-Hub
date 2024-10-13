// src/components/Header.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderContainer scrolled={scrolled}>
      <Nav>
      <Logo>
        <MenuButton onClick={toggleMenu}>
          <FaBars />
          <MenuText>Menu</MenuText>
        </MenuButton>
      </Logo>
      {menuOpen && (
        <Menu
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <MenuItem href="#">Home</MenuItem>
          <MenuItem href="#">About</MenuItem>
          <MenuItem href="#">Candidates</MenuItem>
          <MenuItem href="#">Contact</MenuItem>
        </Menu>
      )}
    </Nav>
    </HeaderContainer>
  );
};

// Header container with dynamic background color
const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  top: 50;
  left: -10;
  display: flex;
  align-items: center;
  padding: 30px 20px;
  z-index: 100;
  transition: background-color 0.3s ease;

  background-color: ${({ scrolled }) => (scrolled ? '#1f2833' : 'transparent')};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: fixed;
  width: 100%;
  z-index: 100;
`;

const Logo = styled.div`
  color: #87CEEB;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #87CEEB;
  font-size: 24px;
`;

const MenuText = styled.span`
  color: #c5c6c7;
  margin-left: 10px;
`;

const Menu = styled(motion.div)`
  position: absolute;
  top: 60px;
  left: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.a`
  color: #c5c6c7;
  text-decoration: none;
  font-size: 18px;
  margin-bottom: 15px;
  &:hover {
    color: #66fcf1;
  }
`;



export default Header;

