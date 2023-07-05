import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK[900]};

  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.LIGHT[100]};
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 20px 15px 0px;

  > svg {
    margin: 0 20px;
  }

  &:hover {
    opacity: 0.8;
  }
`
