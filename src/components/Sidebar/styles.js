import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK[500]};

  position: fixed;
  height: 100%;
  top: 0px;

  right: ${props => (props.view === 'desktop' ? '0' : '')};
  left: ${props => (props.view === 'mobile' ? '0' : '')};
  padding: 56px 0px 28px 24px;

  width: 300px;
  /* left: ${props => (props.sidebar ? '' : '100%')}; */
  left: ${props => (props.sidebar ? '' : '100%')};
  animation: showSidebar 0.4s;
  z-index: 1000;
  .close-btn {
    color: ${({ theme }) => theme.COLORS.LIGHT[100]};
  }
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    font-weight: 200;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
  @media (min-width: 1300px) {
    .mobile {
      display: none;
    }
  }
`

export const Content = styled.div`
  margin-top: 75px;
`
