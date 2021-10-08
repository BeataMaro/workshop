import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header />
      <Container>
        <Link to='/'>
          <Button variant='light' className='p-0 py-2'>
            Wstecz
          </Button>
        </Link>
        <section className='my-5'>
          <h2>O firmie</h2>
          <Row>
            <Col lg={6}>
              <Card className='d-flex flex-row'>
                <Col xs={6}>
                  <Card.Img
                    src='/images/pexels-michael-burrows-workshop.jpg'
                    alt=''
                  />
                  <Card.Img src='/images/pexels-sam-lion-5709661.jpg' alt='' />
                </Col>
                <Col xs={6}>
                  <Card.Body>
                    <Card.Title> Nasza pracownia</Card.Title>
                    <Card.Text>
                      Laboris aute ipsum est aute. Laboris aute ipsum est
                      aute.Laboris aute ipsum est aute. Laboris aute ipsum est
                      aute.Laboris aute ipsum est aute.Laboris aute ipsum est
                      aute.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Card>
            </Col>
            <Col lg={6}>
              <Card className='d-flex flex-row'>
                <Col xs={6}>
                  <Card.Body>
                    <Card.Title className='text-center'>
                      Kreatywność od dwóch pokoleń
                    </Card.Title>
                    <Card.Text className='text-center'>
                      Laboris aute ipsum est aute.Laboris aute ipsum est
                      aute.Laboris aute ipsum est aute. Laboris aute ipsum
                      estaute. Laboris aute ipsum est aute. Laboris aute
                      ipsumest aute.Laboris aute ipsum est aute. Laboris
                      auteipsum est aute.
                    </Card.Text>
                  </Card.Body>
                </Col>
                <Col xs={6}>
                  <Card.Img
                    src='/images/pexels-michael-burrows-7147954.jpg'
                    alt=''
                  />
                  <Card.Img
                    src='/images/pexels-andrea-piacquadio-sew-machine.jpg'
                    alt=''
                  />
                  <Card.Img
                    src='/images/pexels-cottonbro-young-woman.jpg'
                    alt=''
                  />
                </Col>
              </Card>
            </Col>
          </Row>
          <Row className='d-flex align-items-center'>
            <Card className='d-flex flex-row'>
              <Col md={6}>
                <Card.Img
                  src='/images/alexander-andrews-black-machine-unsplash.jpg'
                  alt=''
                />
              </Col>
              <Col md={6}>
                <Card.Img src='/images/pexels-cottonbro-measure.jpg' alt='' />
              </Col>
            </Card>
          </Row>
        </section>
      </Container>
    </>
  );
};

export default About;
