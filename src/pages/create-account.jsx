import Link from 'next/link';
import styled from 'styled-components';

import GlobalStyle from '../styles/global';
import { Sidebar } from '../components';

export default function CreateAccount() {
  return (
    <Container>
      <GlobalStyle />
      <Sidebar />

      <MainContainer>
        <Label>Criar nova conta</Label>

        <Form action="/">
          <InputContainer>
            <label>Instituição</label>

            <Select name="intitutions" id="intitutions">
              <option value="" selected disabled hidden>Selecione uma opção</option>
              <option value="nubank">Nubank</option>
              <option value="inter">Inter</option>
              <option value="itau">Itau</option>
            </Select>
          </InputContainer>

          <InputContainer>
            <label>Nome</label>
            <Input type="text" required />
            <span>Insira um nome para identificar a conta</span>
          </InputContainer>

          <InputContainer>
            <label>Saldo inicial</label>
            <Input type="number" required min={0} />
            <span>Para valores negativos utiliza o símbolo "-"</span>

          </InputContainer>

          <ButtonContainer>
            <SubmitButton type="submit">Confirmar</SubmitButton>
            <CancelButton href="/">Cancelar</CancelButton>
          </ButtonContainer>
        </Form>
      </MainContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 2rem;
`;

const Label = styled.span`
  font-weight: 500;
  font-size: 24px;
  color: #607D8B;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .4rem;
`;

const Input = styled.input`
  padding:.5rem;
`;

const Select = styled.select`
  padding:.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: #607D8B;
  gap: 1.3rem;
  max-width: 600px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const SubmitButton = styled.button`
  border: none;
  padding: .5rem 1rem;
  cursor: pointer;
  border-radius: 10px;
  background-color: #70D179;
  color: white;


  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
`;

const CancelButton = styled(Link)`
  color: #607D8B;
  cursor: pointer;
`;
