import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 1.8rem;
  background-color: teal;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 500;
`;

export const Anuncio = () => {
  return (
    <Container>
      Super oferta!!! Frete gratis em pedidos acima de R$150
    </Container>
  );
};
