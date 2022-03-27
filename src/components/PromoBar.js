import React from 'react';
import styled from "styled-components";

const StyledPromoBar = styled.div`
width: 100%;
background-color: ${({theme}) => theme.colors.main};
position: sticky;
top: 0;
padding: 1rem;
text-align: center;
z-index: 200;

    strong {
        color: ${({theme}) => theme.colors.white};
    }
`

const PromoBar = () => {
  return (
    <StyledPromoBar>Użyj kodu <strong>PROMO-25</strong> i zyskaj 25% zniżki na cały koszyk!</StyledPromoBar>
  )
}

export default PromoBar