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
  align-items: center;
  gap: 2rem;
  padding: 0;

  li {
    color: #70D179;
    background: #FFFFFF;
    padding: .5rem 1rem;
    border-radius: 10px;
    font-weight: 500;
    cursor: pointer;
    text-align: center;
    align-self:stretch;

    &:hover {
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }

    * {
      cursor: pointer;
    }
  }
`;
export const RightsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
