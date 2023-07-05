import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK[400]};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .imgPrev {
    border-radius: 90%;
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

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

  .first-wrapper,
  .second-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .first-wrapper > label,
  .second-wrapper > label {
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
  /* CSS just for the description  */
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

  .third-wrapper {
    display: flex;
    flex-direction: row;
    align-items: space-between;
    padding: 0px;
    gap: 32px;

    width: 364px;
    height: 48px;

    .IncludeButton {
      flex: 1 1 172px;
    }
  }
  .deleteButton {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    padding: 12px 24px;
    gap: 8px;

    width: 160px;
    height: 48px;
    background: #0d161b;
    border-radius: 5px;

    font-family: Poppins, sans-serif;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;

    flex: none;
    order: 0;
    flex-grow: 0;

    &:hover {
      opacity: 0.8;
    }
  }

  > h2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    margin: 10px auto 55px;
    width: 1120px;

    .imgPrev {
      border-radius: 90%;
      width: 100px;
      height: 100px;
      object-fit: cover;
    }

    .back-btn {
      cursor: pointer;
      margin-top: 40px;
      font-size: 24px;
      font-weight: 700;
    }

    .first-wrapper {
      display: flex;
      flex-direction: row;
      padding: 0px;
      gap: 32px;
      align-items: end;

      > label {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .imgUpload {
        width: 229px;
      }
      .name {
        width: 463px;
      }
      .category {
        display: flex;
        flex-direction: column;
        width: 364px;
      }
    }

    .second-wrapper {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      padding: 0px;
      width: 1120px;
      gap: 32px;
      > label:nth-child(1) {
        display: flex;
        flex-direction: column;
        padding: 0px;
        gap: 16px;
        /* background-color: rebeccapurple; */
        width: 837px;
      }
      > label:nth-child(2) {
        display: flex;
        flex-direction: column;
        padding: 0px;
        gap: 16px;
        width: 251px;
      }
    }

    .third-wrapper {
      justify-content: end;
      padding: 0px;
      gap: 32px;

      width: 100%;
      height: 48px;

      .IncludeButton {
        flex: 0 1 172px;
      }
    }
    .deleteButton {
      display: flex;
      flex-direction: row;
      justify-content: center;
      text-align: center;
      padding: 12px 24px;
      gap: 8px;

      width: 160px;
      height: 48px;
      background: #0d161b;
      border-radius: 5px;

      font-family: Poppins, sans-serif;
      font-weight: 500;
      font-size: 14px;
      cursor: pointer;

      flex: none;
      order: 0;
      flex-grow: 0;
    }
  }
`
