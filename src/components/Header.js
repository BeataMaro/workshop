import React from "react";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faWaveSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faRedhat } from "@fortawesome/free-brands-svg-icons";

import SearchBox from "./SearchBox";

const StyledBrand = styled(Navbar.Brand)`
  font-size: 1.7rem;
  letter-spacing: 2px;
`;

const StyledNavLink = styled(Nav.Link)`
  font-size: 1.2rem;
`;

const Header = ({ shop }) => {
  return (
    <header>
      <Navbar bg='light' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <StyledBrand>Przebrała się miarka</StyledBrand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className='ms-auto' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              {shop && (
                <Route
                  render={({ history }) => <SearchBox history={history} />}
                />
              )}
              <LinkContainer to='/about'>
                <StyledNavLink>
                  <FontAwesomeIcon icon={faWaveSquare} className='me-1' />O nas
                </StyledNavLink>
              </LinkContainer>
              <LinkContainer to='/'>
                <StyledNavLink>
                  <FontAwesomeIcon icon={faRedhat} className='me-1' />
                  Blog
                </StyledNavLink>
              </LinkContainer>
              {shop && (
                <LinkContainer to='/cart'>
                  <StyledNavLink>
                    <FontAwesomeIcon icon={faShoppingCart} className='me-1' />
                    Koszyk
                  </StyledNavLink>
                </LinkContainer>
              )}

              {!shop && (
                <LinkContainer to='/shop'>
                  <StyledNavLink>
                    <FontAwesomeIcon icon={faShoppingCart} className='me-1' />
                    Sklep
                  </StyledNavLink>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
