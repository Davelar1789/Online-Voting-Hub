// src/components/Header.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
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
  );
};

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
  color: #66fcf1;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #66fcf1;
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
