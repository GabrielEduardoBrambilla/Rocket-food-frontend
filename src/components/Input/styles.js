import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Poppins;
  width: 100%;
  max-width: 581px;
  background-color: ${({ theme }) => theme.COLORS.DARK[900]};
  color: ${({ theme }) => theme.COLORS.LIGHT[500]};

  border-radius: 15px;
  border-radius: 10px;

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    display: none;
  }

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
  .hideInput {
    display: none;
  }
  label {
    display: flex;
    align-items: center;
    padding: 10px;
    color: ${({ theme }) => theme.COLORS.LIGHT[100]};
    font-size: 16px;
    line-height: 24px;
    height: 56px;
  }
  > svg {
    margin-left: 16px;
    font-size: 24px;

    color: ${({ theme }) => theme.COLORS.LIGHT[400]};
  }
  /* destopk class */
  @media (max-width: 1300px) {
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
    > label {
      font-size: 16px;
    }
    > svg {
      font-size: 16px;
      margin-left: 16px;
      color: ${({ theme }) => theme.COLORS.LIGHT[400]};
    }
  }
`
