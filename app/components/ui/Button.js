import styled, { css } from 'styled-components';
const Button = styled.button`
  ${(props) =>
    props.type === 'submit' &&
    css`
      background-color: var(--green);
      border-radius: 0.1rem;
      color: #fff;
      border-color: transparent;
      width: 7.9rem;
      height: 2.2rem;
      margin: 1rem;
      justify-self: end;
      cursor: pointer;
      -webkit-transition-duration: 0.4s;
      transition-duration: 0.4s;

      &:hover {
        box-shadow: 0 10px 14px 0 rgba(0, 0, 0, 0.24),
          0 17px 50px 0 rgba(0, 0, 0, 0.19);
      }
      @media screen and (max-width: 650px) {
        width: 5.9rem;
      }
    `};
  ${(props) =>
    props.type === 'pageBtn' &&
    css`
      padding: 1rem;
      border: 0.5rem solid;
      border-image: linear-gradient(60deg, var(--green) 50%, #f6531d 0) 20;
      background: transparent;
      justify-self: center;
      align-self: center;
      cursor: pointer;
    `};
`;
export default Button;
