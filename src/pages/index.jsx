import styled from 'styled-components';

import { Sidebar } from '../components';
import GlobalStyle from '../styles/global';

const Container = styled.div`
  display: flex;
`;

export default function Home() {
  return (
    <Container>
      <GlobalStyle />
      <Sidebar />
    </Container>
  );
}
