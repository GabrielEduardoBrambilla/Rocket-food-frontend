import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK[400]};
  height: 100%;
  min-height: 786px;
  font-family: Poppins;

  .type-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > div {
      padding: 20px;
    }
    .type-title {
      color: var(--light-light-300, #e1e1e6);
      font-size: 32px;
      font-weight: 500;
      line-height: 140%;
      margin-bottom: 22px;
    }
  }
  .swiper-container {
    display: flex;
    width: 1200px;
    align-items: stretch;

    justify-content: center;
    text-align: center;
    flex-direction: row;
    background-color: lightcoral;
  }

  .type-wrapper::-webkit-scrollbar {
    height: 8px;
  }

  .type-wrapper::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.COLORS.DARK[700]};
  }

  .type-wrapper::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  .type-wrapper::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`
