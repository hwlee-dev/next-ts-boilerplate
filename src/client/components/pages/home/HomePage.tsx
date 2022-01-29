import React, { FC } from 'react';
import styled from 'styled-components';

const HomePage: FC = () => {
  return (
    <Container>
      hello world!
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  font-size: 100px;
`;