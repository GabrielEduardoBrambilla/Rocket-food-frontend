import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK[400]};

  .ingredient {
    display: flex;
    flex-wrap: wrap; /* Allow items to wrap to a new line */
    background-color: ${({ theme }) => theme.COLORS.DARK[800]};
    border-radius: 8px;
    justify-content: flex-start; /* Start align items from the beginning */
    align-items: center; /* Vertically center align items */
    gap: 8px;
    padding: 8px;

    > .ingredientItem {
      height: 1px;
      background-color: red;
    }
  }

  @media (min-width: 320px) {
    .ingredient > * {
      flex-basis: calc(50% - 8px); /* Two items per row with 8px gap */
    }
  }

  @media (min-width: 480px) {
    .ingredient > * {
      flex-basis: calc(33.33% - 8px); /* Three items per row with 8px gap */
    }
  }

  /* Add more media queries as needed for different breakpoints */
  select {
    background-color: ${({ theme }) => theme.COLORS.DARK[900]};
    color: ${({ theme }) => theme.COLORS.LIGHT[500]};

    border: 0;
    border-radius: 15px;
    border-radius: 10px;
    height: 56px;
    padding: 12px;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 364px;
  justify-content: center;
  margin: 10px auto 55px;

  .back-btn {
    display: flex;
    align-items: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16.5459px;
    line-height: 140%;
    gap: 3px;
    > img {
      width: 22px;
      height: 22px;
    }
  }

  > h2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
  }

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT[400]};
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
  }
`
