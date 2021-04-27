import {
  Container, ButtonList, Button, Logo,
} from './styles';

function Sidebar() {
  return (
    <Container>
      <Logo href="/">KMyMoney2</Logo>

      <ButtonList>
        <Button>Contas</Button>
        <Button>Transações</Button>
        <Button>Relatórios</Button>
        <Button>Configurações</Button>
        <Button>Ajuda</Button>
        <Button>Sair</Button>
      </ButtonList>

      <div>
        <span>Todos os direitos reservados</span>
        <span>2021</span>
      </div>

    </Container>
  );
}

export default Sidebar;
