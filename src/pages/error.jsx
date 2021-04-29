import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { MdSentimentVeryDissatisfied } from 'react-icons/md';

import { Sidebar } from '../components';
import GlobalStyle from '../styles/global';

import {
  FlexContainer,
} from '../styles/styles';

export default function Home() {
  return (
    <FlexContainer>
      <GlobalStyle />
      <Sidebar />

      <MainContainer>

        <MdSentimentVeryDissatisfied size={64} color="#70D179" />
        <h2>Esta funcionalidade ainda não foi implementada.</h2>

        <Button>
          <Link href="/">
            Voltar ao início
          </Link>
        </Button>
      </MainContainer>
    </FlexContainer>
  );
}

const Button = styled.button`
  background:none;
  border: none;
  background-color:#70D179;
  color: white;
  padding: .5rem 1rem;
  border-radius: 10px;

  &:hover {
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }

    &, > * {
      cursor: pointer;
    }
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1rem;

  h2 {
    color: #70D179;
  }
  `;
