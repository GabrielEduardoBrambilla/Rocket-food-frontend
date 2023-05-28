import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 581px;

  background-color: ${({ theme }) => theme.COLORS.DARK[900]};
  color: ${({ theme }) => theme.COLORS.LIGHT[500]};

  border-radius: 15px;
  border-radius: 10px;

  > input {
    width: 100%;
    height: 56px;

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
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.DARK[900]};
    color: ${({ theme }) => theme.COLORS.LIGHT[500]};

    border-radius: 8px;

    > input {
      width: 100%;
      height: 56px;

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
