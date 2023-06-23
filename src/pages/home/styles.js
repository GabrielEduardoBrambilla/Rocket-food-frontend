import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK[700]};
  height: 100%;

  .type-wrapper {
    display: flex;
    justify-content: center;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    margin: auto;
    padding: 20px;

    > div {
      padding: 20px;
    }
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
