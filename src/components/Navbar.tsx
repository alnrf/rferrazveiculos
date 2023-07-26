import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import LogoImage from "../assets/Rferraz_Logo.png";
import Background from "../assets/yellow_background.png";

const slideIn = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0); }
`;

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-image: url(${Background});
  border-bottom-right-radius: 50px;
  background-size: cover;
  padding: 0 16px;
  margin: 0 16px 0 0;
  animation: ${slideIn} 1s ease-in-out forwards;
`;

const LogoContainer = styled.div`
  padding: 10px;
  opacity: 0;
  animation: ${fadeIn} 2s ease-in-out 1s forwards;
`;

const Logo = styled.img`
  height: 80px;
`;

const LinksContainer = styled.div`
  display: flex;
  opacity: 0;
  animation: ${fadeIn} 2s ease-in-out 1s forwards;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 15px;
  text-decoration: none;
  color: white;
  font-weight: bold;
`;

export const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <LogoContainer>
          <Logo src={LogoImage} alt="Logo" />
        </LogoContainer>
        <LinksContainer>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/estoque">Estoque</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </LinksContainer>
      </NavbarContainer>
    </>
  );
};
