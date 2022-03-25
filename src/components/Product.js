import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const StyledCard = styled(Card)`
  min-height: 60vh;
  background-color: ${({ theme }) => theme.colors.greyblue};
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.boxShadow};
  transition: ${({ theme }) => theme.transitions.slow};
  a {
    overflow: hidden;
    img {
      transition: ${({ theme }) => theme.transitions.quick};
    }
  }
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.boxShadowHover};
    img {
      transform: scale(1.1);
    }
  }
`;

const Product = ({ product }) => {
  return (
    <StyledCard className='rounded pb-3 my-2' key={product._id}>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>{product.name}</Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating rate={product.rating} numReviews={product.numReviews} />
        </Card.Text>
        <Card.Text as='h4'> {product.price}$</Card.Text>
      </Card.Body>
    </StyledCard>
  );
};

export default Product;
