import Image from 'next/image';
import Link from 'next/link';

import {
  Container, ButtonList, Button, RightsContainer,
} from './styles';

function Sidebar() {
  return (
    <Container>
      <Link href="/">
        <Image src="/logo.svg" width={200} height={30} />
      </Link>

      <ButtonList>
        <Button>Contas</Button>
        <Button>Transações</Button>
        <Button>Relatórios</Button>
        <Button>Configurações</Button>
        <Button>Ajuda</Button>
        <Button>Sair</Button>
      </ButtonList>

      <RightsContainer>
        <span>Todos os direitos reservados</span>
        <span>2021</span>
      </RightsContainer>

    </Container>
  );
}

export default Sidebar;
