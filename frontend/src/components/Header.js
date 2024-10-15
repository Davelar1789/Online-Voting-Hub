import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);  // Create a ref for the menu
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

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

  // Function to handle navigation to /login
  const handleLoginClick = () => {
    navigate('/login');
  };

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
            ref={menuRef}  // Attach ref to the Menu component
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <MenuItem href="#">Home</MenuItem>
            <MenuItem href="#">About</MenuItem>
            <MenuItem href="#">Contact Us</MenuItem>
            <MenuItem onClick={handleLoginClick}>Login</MenuItem> {/* Add onClick for login */}
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
  top: 0;
  left: -20px;
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
  cursor: pointer;
  &:hover {
    color: #87CEEB;
  }
`;

export default Header;
