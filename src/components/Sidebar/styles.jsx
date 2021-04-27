import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #70D179;
  color: white;
  padding: 2rem 1rem;
`;

export const Logo = styled(Link)`
  font-size: 20px;
`;

export const ButtonList = styled.ul`
  list-style:none;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 0;
`;

export const Button = styled.li`
  color: #70D179;
  background: #FFFFFF;
  font-weight: 500;
  border-radius: 10px;
  padding: .5rem 1rem;
  cursor: pointer;
  text-align: center;

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const RightsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
