import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Row, Col, Container, ListGroup, Card } from "react-bootstrap";

const StyledRow = styled(Row)`
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.grey};
`;

const Footer = () => {
  return (
    <footer className='mt-5 text-center'>
      <Container fluid>
        <article>
          <Row>
            <Col md={6} lg={4}>
              <h4 className='my-5'>Informacje</h4>
              <ListGroup variant='flush' className='mt-5'>
                <Link to='/about'>
                  <ListGroup.Item>O firmie</ListGroup.Item>
                </Link>
                <ListGroup.Item>Jak trafić?</ListGroup.Item>
                <ListGroup.Item>Polityka prywatności</ListGroup.Item>
                <ListGroup.Item>Regulamin</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={6} lg={4}>
              <h4 className='my-5'>Zakupy</h4>
              <ListGroup variant='flush' className='mt-5'>
                <ListGroup.Item>Wysyłka</ListGroup.Item>
                <ListGroup.Item>Status zamówienia</ListGroup.Item>
                <ListGroup.Item>Zwroty</ListGroup.Item>
                <ListGroup.Item>Reklamacje</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={12} lg={4}>
              <h4 className='my-5'>Moje konto</h4>
              <ListGroup variant='flush' className='mt-5'>
                <ListGroup.Item>Zarejestruj się</ListGroup.Item>
                <ListGroup.Item>Koszyk</ListGroup.Item>
                <ListGroup.Item>Moje ulubione</ListGroup.Item>
                <ListGroup.Item>Karta stałego klienta</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={12}>
              <h4 className='my-5'>Kontakt</h4>
              <Card className='text-center my-5'>
                <Card.Body>
                  <Card.Title>Zapraszamy do naszej pracowni</Card.Title>
                  <Card.Text>Plac Grunwaldzki 44/1</Card.Text>
                  <Card.Text>60-684 Poznań</Card.Text>
                </Card.Body>
                <Card.Footer className='text-muted'>
                  <Card.Text> +48 22 264 770 800 </Card.Text>
                  <Card.Text> info@przebralasiemiarka.pl </Card.Text>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </article>
        <StyledRow className='px-5 py-3'>
          <span>Wszelkie prawa zastrzeżone. &copy; 2021.</span>
          <a
            href='https://www.pexels.com/pl-pl/@pavel-danilyuk'
            target='_blank'
            rel='noreferrer'
          >
            <span>Video by Pavel Danilyuk from Pexels</span>
          </a>
        </StyledRow>
      </Container>
    </footer>
  );
};

export default Footer;
