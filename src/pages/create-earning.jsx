import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { useState } from 'react';

import GlobalStyle from '../styles/global';
import { Sidebar } from '../components';

function Menu() {
  const [currentOption, setCurrentOption] = useState();

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', marginTop: '1rem', gap: '0.5rem',
    }}
    >
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <input value="fixed" type="radio" name="repeat" id="fixed" onChange={(e) => setCurrentOption(e.target.value)} />
        <label htmlFor="fixed" style={{ cursor: 'pointer' }}>Receita Fixa</label>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <input value="instalment" type="radio" name="repeat" id="instalment" onChange={(e) => setCurrentOption(e.target.value)} />
        <label htmlFor="instalment" style={{ cursor: 'pointer' }}>Receita parcelada</label>
      </div>

      {currentOption === 'fixed' && (
        <Select name="mode" id="mode" defaultValue="DEFAULT" required>
          <option value="DEFAULT" disabled hidden>Selecione uma opção</option>
          <option value="anual">Anual</option>
          <option value="semestral">Semestral</option>
          <option value="mensal">Mensal</option>
          <option value="semanal">Semanal</option>
          <option value="diario">Diário</option>
        </Select>
      )}

      {currentOption === 'instalment' && (
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.4rem' }}>
        <Select name="times" id="times" defaultValue="DEFAULT" required>
          <option value="DEFAULT" disabled hidden>Selecione uma opção</option>
          {[...Array(100).keys()].map((opt) => (<option value={opt + 1}>{opt + 1}</option>))}
        </Select>

        <Select name="mode" id="mode" defaultValue="DEFAULT" required>
          <option value="DEFAULT" disabled hidden>Selecione uma opção</option>
          <option value="anos">Anos</option>
          <option value="semestres">Semestres</option>
          <option value="meses">Meses</option>
          <option value="semanas">Semanas</option>
          <option value="dias">Dias</option>
        </Select>
      </div>
      )}
    </div>
  );
}

export default function CreateEarning() {
  const [expandedMenu, setExpandedMenu] = useState(false);
  return (
    <Container>
      <GlobalStyle />
      <Sidebar />

      <MainContainer>
        <Label>Criar receita</Label>

        <Form action="/transactions">
          <InputContainer>
            <label>Descrição</label>
            <Input type="text" required />
          </InputContainer>

          <FormContainer>
            <InputContainer>
              <label>Valor</label>
              <Input type="number" placeholder="R$ 0,00" required min={0} />
            </InputContainer>
            <InputContainer>
              <label>Data</label>
              <Input type="date" required />
            </InputContainer>
          </FormContainer>

          <FormContainer>
            <InputContainer>
              <label>Conta/Cartão</label>

              <Select name="account" id="account" defaultValue="DEFAULT" required>
                <option value="DEFAULT" disabled hidden>Selecione uma opção</option>
                <option value="credito">Cartão de crédito</option>
                <option value="banco-max">Banco Max</option>
              </Select>
            </InputContainer>

            <InputContainer>
              <label>Categoria</label>

              <Select name="category" id="category" defaultValue="DEFAULT" required>
                <option value="DEFAULT" disabled hidden>Selecione uma opção</option>
                <option value="salario">Salário</option>
                <option value="investments">Investimentos</option>
                <option value="outros">Pitrps</option>
              </Select>
            </InputContainer>
          </FormContainer>

          <div>
            <RepeatButton
              src={`/${expandedMenu ? 'enabled' : 'disabled'}_repeat.png`}
              width={40}
              height={40}
              onClick={() => setExpandedMenu(!expandedMenu)}
            />

            {expandedMenu && <Menu />}
          </div>

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

const FormContainer = styled(Container)`
  gap: 1rem;

  > * {
    width: 200px !important;
  }
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
     ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }  
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

   > * {
    cursor: pointer;
  }
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


`;

const RepeatButton = styled(Image)`
  cursor: pointer;

`;
