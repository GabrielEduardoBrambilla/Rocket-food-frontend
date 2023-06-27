import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK[400]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px 56px;
  gap: 16px;
  font-family: Poppins;
  .back-btn {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT[100]};
  }
  .left-section {
    > img {
      margin: auto;
      display: flex;
      width: 264px;
      height: 264px;
      flex-shrink: 0;
      object-fit: cover;
      border-radius: 90%;
    }
    .back-btn {
      display: flex;
      align-items: center;
      font-family: 'Poppins';
      font-style: normal;
      font-size: 24px;
      font-weight: 500;
      line-height: 140%;
      gap: 3px;
      > img {
        width: 22px;
        height: 22px;
      }
    }
  }
  .dishName {
    font-size: 27px;
    font-weight: 500;
    line-height: 140%;
    text-align: center;
  }
  .dishDescription {
    text-align: center;
    font-size: 16px;
    font-family: Poppins;
    line-height: 140%;
    margin: 24px 0;
    color: ${({ theme }) => theme.COLORS.LIGHT[300]};
  }
  .ingredients {
    display: inline-flex;
    width: 100%;
    flex-wrap: wrap; /* Added flex-wrap property */
    align-items: center;
    justify-content: center;
    gap: 24px;
    font-size: 14px;
    font-family: Poppins;
    font-weight: 500;
    line-height: 24px;
    color: ${({ theme }) => theme.COLORS.LIGHT[100]};
  }
  .counter {
    display: flex;
    justify-content: center;
    margin-top: 48px;
    > div {
      margin: 12px;
    }
  }

  @media (min-width: 768px) {
    min-height: 90vh;
    height: auto;
    flex-grow: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    text-align: left;

    .left-section {
      > img {
        display: flex;
        width: 390.105px;
        height: 389px;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
      }
      .back-btn {
        margin-bottom: 42px;
      }
    }
    .right-section {
      display: flex;
      flex-direction: column;
      align-items: left;
      width: 687px;
      justify-content: start;
      .dishName {
        text-align: left;
        font-size: 40px;
      }
      .dishDescription {
        text-align: left;
        font-size: 24px;
      }
      .ingredients {
        justify-content: left;
      }
    }
    .counter {
      justify-content: left;
    }
  }
`
