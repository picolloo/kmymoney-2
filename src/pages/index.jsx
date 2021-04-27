import Image from 'next/image';
import Link from 'next/link';

import { Sidebar } from '../components';
import GlobalStyle from '../styles/global';

import {
  FlexContainer, MainContainer, Label, Button, LabelContainer,
} from '../styles/styles';

export default function Home() {
  return (
    <FlexContainer>
      <GlobalStyle />
      <Sidebar />

      <MainContainer>
        <div>
          <LabelContainer>

            <Label>Contas</Label>
            <Button>
              <Link href="/create-account">
                Criar conta
              </Link>
            </Button>
          </LabelContainer>

          <LabelContainer>
            <Image
              src="/card1.svg"
              width={400}
              height={400}
            />
            <Image
              src="/card2.svg"
              width={400}
              height={400}
            />
          </LabelContainer>
        </div>

        <FlexContainer>
          <Label>Resumo</Label>
          <Image
            src="/chart.svg"
            width={800}
            height={400}
          />
        </FlexContainer>

      </MainContainer>
    </FlexContainer>
  );
}
