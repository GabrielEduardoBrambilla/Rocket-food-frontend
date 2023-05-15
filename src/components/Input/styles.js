import styled from 'styled-components'

export const Container = styled.div`
  width: 581px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.DARK[900]};
  color: ${({ theme }) => theme.COLORS.LIGHT[500]};

  border-radius: 10px;

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.LIGHT[100]};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT[100]};
    }
  }
  > img {
    margin-left: 16px;
    color: ${({ theme }) => theme.COLORS.LIGHT[400]};
  }
  /* destopk class */
  @media (max-width: 768px) {
    width: 316px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.DARK[900]};
    color: ${({ theme }) => theme.COLORS.LIGHT[500]};

    border-radius: 8px;

    > input {
      height: 56px;
      width: 100%;

      padding: 12px;

      color: ${({ theme }) => theme.COLORS.LIGHT[100]};
      background: transparent;
      border: 0;

      &:placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT[100]};
      }
    }
    > img {
      margin-left: 16px;
      color: ${({ theme }) => theme.COLORS.LIGHT[400]};
    }
  }
`
