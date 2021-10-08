import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { Form, Button } from "react-bootstrap";

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.gold};
`;

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    keyword.trim() ? history.push(`/search/${keyword}`) : history.push("/shop");
  };
  return (
    <Form onSubmit={submitHandler} className='d-flex m-3 m-lg-0'>
      <Form.Control
        type='text'
        name='search'
        placeholder='Szukaj produktu...'
        onChange={(e) => setKeyword(e.target.value)}
        className='me-sm-1 ms-sm-3'
      ></Form.Control>
      <StyledButton type='submit' size='md' className='me-5'>
        <FontAwesomeIcon icon={faSearch} className='align-self-center' />
      </StyledButton>
    </Form>
  );
};

export default SearchBox;
