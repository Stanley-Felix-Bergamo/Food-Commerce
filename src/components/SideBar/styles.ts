import styled from 'styled-components';

interface ContainerProps {
  isMenuOpen: boolean;
}

export const Container = styled.aside<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.red};
  width:${(Props) => (Props.isMenuOpen ? '7.75rem' : '16.3rem')}  ;
  padding: 2rem 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    background: none;
    width: 100%;
    border: none;
  }

  nav {
    flex: 1;
    width: 100%;
    height: 100%;

    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.5rem;
    }

    li {
      a {
          width: fit-content;
          position:relative;
          padding-left:1.875rem;
          padding-right:1.875rem;
          display:flex;
          align-items:center;
          gap:2rem;

          svg {
            fill: ${(Props) => Props.theme.colors.white}
            width: 4rem;
            height: 4rem;
            transition: fill 0.3;
          }

          span {
            font-size:1rem;
              font-weight:500;
              trasition: color 0.3s;
          }

          &.active{
            &::after{
              content:"";
              position: absolute;
              left: 0px;
              top:50%;
              bottom:0;
              transform:translateY(-50%);
              background-color:${(props) => props.theme.colors.yellow};
              width: 5px;
              height: calc(100% + 10px);
              border-radius: 0 5px 5px 0;
            }

            svg {
              fill: ${(Props) => Props.theme.colors.yellow}
            }
            span {
              fill: ${(Props) => Props.theme.colors.yellow}
            }
          }
      }
    }
  }
`;
