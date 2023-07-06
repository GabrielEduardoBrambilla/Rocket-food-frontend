import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  padding: 0 47px 65px;
  gap: 72px;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.DARK[400]};

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* align-items: center; */
    gap: 32px;
    width: 100%;
    max-width: 581px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT[400]};

    label {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    a,
    &:visited {
      cursor: pointer;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: ${({ theme }) => theme.COLORS.LIGHT[400]};
      text-decoration: none;
      margin: auto;
    }
    .desktop-title {
      display: none;
    }
  }

  @media (min-width: 1300px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 47px 65px;
    gap: 300px;
    height: 100vh;
    background-color: ${({ theme }) => theme.COLORS.DARK[400]};

    form {
      display: flex;
      flex-direction: column;
      gap: 32px;
      width: 476px;
      height: 540px;
      padding: 64px;
      border-radius: 16px;

      background-color: ${({ theme }) => theme.COLORS.DARK[700]};
      color: ${({ theme }) => theme.COLORS.LIGHT[400]};

      label {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      a,
      &:visited {
        cursor: pointer;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: ${({ theme }) => theme.COLORS.LIGHT[400]};
        text-decoration: none;
        margin: auto;
      }
      .desktop-title {
        display: flex;
        width: 348px;
        height: 68.76px;

        /* Poppins/400-medium */

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 140%;
        /* or 45px */

        display: flex;
        align-items: center;
        text-align: center;

        /* Light/Light 100 */
        color: ${({ theme }) => theme.COLORS.LIGHT[100]};
      }
    }
  }
`
