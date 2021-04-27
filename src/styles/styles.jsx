import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 5rem;
  flex: 1;
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.span`
  font-weight: 500;
  font-size: 24px;
  color: #607D8B;
`;

export const Button = styled.button`
  color: #70D179;
  background-color: #fff;
  border: 1px solid #70D179;
  font-weight: 500;
  border-radius: 10px;
  padding: .5rem 1rem;
  cursor: pointer;
  text-align: center;

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
`;
