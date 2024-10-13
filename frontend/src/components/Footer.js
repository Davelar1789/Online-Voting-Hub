// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>© 2024 Online Voting System. All Rights Reserved.</FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  padding: 20px;
  background-color: #1f2833;
  text-align: center;
`;

const FooterContent = styled.p`
  color: #c5c6c7;
`;

export default Footer;
