import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { useState } from 'react';

import {
  MdAdd, MdRemove, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdThumbUp, MdThumbDown,
} from 'react-icons/md';

import GlobalStyle from '../styles/global';
import { Sidebar } from '../components';

function Transaction({
  icon, name, institution, amount, paid,
}) {
  const [currentStatus, setCurrentStatus] = useState(paid);

  return (
    <TransactionContainer>
      <Image src={`/${icon}.png`} width={24} height={24} />

      <span>{name}</span>
      <span>{institution}</span>
      <span>{amount}</span>
      {currentStatus
        ? (
          <PaidButton>
            <MdThumbUp onClick={() => setCurrentStatus((status) => !status)} />
          </PaidButton>
        ) : (
          <UnpaidButton>
            <MdThumbDown onClick={() => setCurrentStatus((status) => !status)} />
          </UnpaidButton>
        )}
    </TransactionContainer>
  );
}

export default function CreateAccount({ transactions }) {
  const [currentMonth, setCurrentMonth] = useState(0);

  const handleIncreaseCurrentMonth = () => {
    setCurrentMonth((currentMonth + 1) % transactions.length);
  };
  const handleDecreaseCurrentMonth = () => {
    setCurrentMonth((currentMonth > 0 ? currentMonth : transactions.length) - 1);
  };

  return (
    <Container>
      <GlobalStyle />
      <Sidebar />

      <MainContainer>
        <LabelContainer>
          <Label>Transações</Label>

          <MonthSelect>
            <MdKeyboardArrowLeft size={32} color="607D8B" onClick={handleDecreaseCurrentMonth} />
          </MonthSelect>
          <Month>{transactions[currentMonth].month}</Month>
          <MonthSelect>
            <MdKeyboardArrowRight size={32} color="607D8B" onClick={handleIncreaseCurrentMonth} />
          </MonthSelect>

          <ButtonContainer>
            <AddButton>
              <Link href="/create-earning" passHref>
                <a>
                  <MdAdd />
                </a>
              </Link>
            </AddButton>
            <RemoveButton>
              <Link href="/create-expense" passHref>
                <a>
                  <MdRemove />
                </a>
              </Link>
            </RemoveButton>
          </ButtonContainer>
        </LabelContainer>

        <TransactionList>
          {transactions[currentMonth].data.map((t, id) => (
            <Transaction
              key={id}
              icon={t.icon}
              name={t.name}
              institution={t.institution}
              amount={t.amount.toFixed(2)}
              paid={t.paid}
            />
          ))}

          <HorizontalLine />
          <BalanceContainer>
            <span>Dúvidas sobre o saldo? Clique aqui</span>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <span>Saldo atual</span>
              <span style={{ color: '#625BE6' }}>
                R$
                {' '}
                {transactions[currentMonth].data.reduce((curr, next) => curr + next.amount, 0).toFixed(2) }
              </span>
            </div>
          </BalanceContainer>
        </TransactionList>

      </MainContainer>
    </Container>
  );
}

const HorizontalLine = styled.div`
  height: 1px;
  margin: .3rem 0;
  border: 1px solid #EBEBEB;
`;

const BalanceContainer = styled.div`
  display:flex;
  justify-content: space-between;
  width: 100%;
  background-color: #EBEBEB;
  color: #9DA0B4;
  padding: 1rem .8rem;
  border-radius: 10px;

  > span {
    color: #70D179;
    cursor: pointer;
  }
`;

const TransactionList = styled.div`
  display:flex;
  flex-direction: column;
  gap: .4rem;
  width: 100%;
  max-width: 600px;

`;

const TransactionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #EBEBEB;
  color: #9DA0B4;
  padding: .5rem .8rem;
  border-radius: 10px;

  span {
    width: 9rem;
  }
`;

const Container = styled.div`
  display: flex;
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 2rem;
  padding-top: 5rem;
`;

const LabelContainer = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 600px;
`;

const Label = styled.span`
  font-weight: 500;
  font-size: 24px;
  color: #607D8B;
`;

const Month = styled.span`
  font-size: 20px;
  color: #607D8B;
`;

const Button = styled.button`
  border-radius: 50px;
  border: none;
  width: 40px;
  height: 40px;
  font-size: 24px;
  background: none;

  &, * {
    display: flex;
    justify-content: center;
    align-items:center;
    cursor: pointer;  
  }
`;

const PaidButton = styled(Button)`
  color: #70D179;

`;

const UnpaidButton = styled(Button)`
  color: #ED7474;

`;

const ButtonContainer = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
gap: 1rem;
`;

const AddButton = styled(Button)`
  background-color: #70D179;
  color: white;
  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
`;

const RemoveButton = styled(Button)`
  background-color: #ED7474;
  color: white;
  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
`;

const MonthSelect = styled(Button)`
  cursor: pointer;
`;

export function getStaticProps() {
  const transactions = Object.freeze([
    {
      month: 'Maio',
      data: [
        {
          icon: 'bus',
          name: 'gasolina',
          institution: 'Banco Max',
          amount: -254.30,
          paid: true,
        },
        {
          icon: 'star',
          name: 'salário',
          institution: 'Banco Max',
          amount: 4400,
          paid: true,
        },
        {
          icon: 'pet',
          name: 'ração felina',
          institution: 'Banco Max',
          amount: -44.20,
          paid: true,
        },
        {
          icon: 'shop',
          name: 'ventilador',
          institution: 'Cartão de crédito',
          amount: -129.90,
          paid: true,
        },
        {
          icon: 'pc',
          name: 'internet',
          institution: 'Cartão de crédito',
          amount: -159.9,
          paid: true,
        },
        {
          icon: 'shop',
          name: 'netflix',
          institution: 'Cartão de crédito',
          amount: -34.9,
          paid: false,
        },
      ],
    },
    {
      month: 'Abril',
      data: [
        {
          icon: 'star',
          name: 'salário',
          institution: 'Banco Max',
          amount: 4400,
          paid: false,
        },
        {
          icon: 'shop',
          name: 'ventilador',
          institution: 'Cartão de crédito',
          amount: -129.90,
          paid: false,
        },
        {
          icon: 'pc',
          name: 'internet',
          institution: 'Cartão de crédito',
          amount: -159.9,
          paid: false,
        },
        {
          icon: 'shop',
          name: 'netflix',
          institution: 'Cartão de crédito',
          amount: -34.9,
          paid: false,
        },
      ],
    },
  ]);

  return {
    props: {
      transactions,
    },
  };
}
