import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK[400]};
  min-height: 78.6rem;
  font-family: Poppins;

  .slogan-banner {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    width: 37.6rem;
    height: 12rem;
    margin: 4.4rem auto 4.7rem auto;
    background: var(
      --gradients-200,
      linear-gradient(180deg, #091e26 0%, #00131c 100%)
    );

    .slogan-text {
      display: flex;
      flex-direction: column;
      gap: 0.2em;
      margin: 3.6rem 0 2.2rem 15.3rem;

      .slogan-title {
        color: ${({ theme }) => theme.COLORS.LIGHT[300]};
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 140%;
      }

      .slogan-description {
        color: ${({ theme }) => theme.COLORS.LIGHT[300]};
        font-size: 1.2rem;

        font-family: Poppins;
        line-height: 140%;
      }
    }
    > img {
      display: flex;
      /* object-fit: contain; */
      position: absolute;
      top: -3rem;
      left: -3rem;
      width: 19.1rem;
      height: 14.9rem;
      flex-shrink: 0;
    }
  }
  .type-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .type-title {
      color: var(--light-light-300, #e1e1e6);
      font-size: 1.8rem;
      font-weight: 500;
      line-height: 140%;
      width: 38rem;
      margin: 0.2rem auto;
      margin: 1.5rem auto 0 auto;
    }
  }
  .swiper-container {
    display: flex;
    width: 38rem;
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
    height: 0.8rem;
  }

  .type-wrapper::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.COLORS.DARK[700]};
  }

  .type-wrapper::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 0.4rem;
  }

  .type-wrapper::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  @media (min-width: 768px) {
    .swiper-container {
      width: 120rem;
    }
    .type-wrapper {
      > div {
        padding: 2rem;
      }
      .type-title {
        font-size: 3.2rem;
        width: 120rem;
        margin: auto;
      }
    }
    .slogan-banner {
      width: 112rem;
      height: 26rem;
      margin: 16.4rem auto 6.2rem;

      .slogan-text {
        margin: 8.8rem 10rem 9.2rem 59.8rem;
        .slogan-title {
          font-size: 4rem;
          font-weight: 400;
        }
        .slogan-description {
          font-size: 1.6rem;
          width: auto;
        }
      }
      > img {
        width: 63.2rem;
        height: 40.6rem;
        top: -14.6rem;
        left: -6rem;
        flex-shrink: 0;
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
