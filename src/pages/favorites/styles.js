import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK[400]};
  .fav-list {
    display: flex;
    flex-direction: column;
    width: 350px;
    margin: auto;
    margin-bottom: 50px;
    gap: 32px;
    .fav-display {
      display: flex;
      flex-direction: column;
      width: 350px;
      margin: auto;
      margin-bottom: 50px;
      gap: 32px;
    }
    > h2 {
      color: ${({ theme }) => theme.COLORS.LIGHT[300]};
      font-size: 32px;
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
    }
  }

  @media (min-width: 1300px) {
    flex-direction: column;

    background-color: ${({ theme }) => theme.COLORS.DARK[400]};
    color: ${({ theme }) => theme.COLORS.LIGHT[400]};

    .fav-list {
      margin: auto;
      padding: 50px;
      width: 100vw;
      .fav-display {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 90%;
        gap: 32px;
      }
      .fav-item {
        width: calc(50% - 16rem);
      }
    }
  }
`
