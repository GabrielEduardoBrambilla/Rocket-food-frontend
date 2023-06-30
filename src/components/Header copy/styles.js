import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 56px 28px 24px;
  background-color: ${({ theme }) => theme.COLORS.DARK[700]};

  img {
    cursor: pointer;
  }

  .userImg {
    height: 42px;
    width: 42px;
    object-fit: cover;
    border-radius: 90%;
  }
  .hideMobile {
    display: none;
  }
  @media (min-width: 768px) {
    align-items: center;
    justify-content: space-between;
    .hideMobile {
      display: none;
    }
    padding: 24px 123px;
    height: 104;
  }
`
