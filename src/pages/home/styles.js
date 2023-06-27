import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK[400]};
  min-height: 786px;
  font-family: Poppins;

  .type-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .type-title {
      color: var(--light-light-300, #e1e1e6);
      font-size: 18px;
      font-weight: 500;
      line-height: 140%;
      width: 380px;
      margin: 2px auto;
      margin: 15px auto 0 auto;
    }
  }
  .swiper-container {
    display: flex;
    width: 380px;
    align-items: center;

    justify-content: center;
    text-align: center;
    flex-direction: row;
  }
  .swiper-slide {
    /* background-color: darkblue; */
    display: flex;
    align-items: center;
    flex-grow: 1;
    flex-grow: inherit;
  }
  .swiper-wrapper {
    display: flex;
    align-items: center;
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

  @media (min-width: 768px) {
    .swiper-container {
      width: 1200px;
    }
    .type-wrapper {
      > div {
        padding: 20px;
      }
      .type-title {
        font-size: 32px;
        width: 1200px;
        margin: auto;
      }
    }
  }
  @media (max-width: 768px) {
    .swiper-button-next,
    .swiper-button-prev {
      display: none !important;
    }
  }
`
