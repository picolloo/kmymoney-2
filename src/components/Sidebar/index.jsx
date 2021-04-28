import Image from 'next/image';
import Link from 'next/link';

import {
  Container, ButtonList, RightsContainer,
} from './styles';

function Sidebar() {
  return (
    <Container>
      {/* <Link href="/"> */}
      <Image src="/logo.svg" width={200} height={30} />
      {/* </Link> */}

      <ButtonList>
        <li>
          <Link href="/">
            Contas
          </Link>
        </li>
        <li>
          <Link href="/transactions">
            Transações
          </Link>
        </li>
        <li>
          <Link href="/error">
            Relatórios
          </Link>
        </li>
        <li>
          <Link href="/error">
            Configurações
          </Link>
        </li>
        <li>
          <Link href="/error">
            Ajuda
          </Link>
        </li>
        <li>
          <Link href="/error">
            Sair
          </Link>
        </li>
      </ButtonList>

      <RightsContainer>
        <span>Todos os direitos reservados</span>
        <span>2021</span>
      </RightsContainer>

    </Container>
  );
}

export default Sidebar;
