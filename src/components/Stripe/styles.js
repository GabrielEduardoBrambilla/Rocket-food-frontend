import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 350px;
  .pay-btn {
    margin-top: 15px;
  }
  @media (min-width: 1300px) {
    width: 530px;
  }
`
