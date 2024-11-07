import styled from 'styled-components';
const Input = styled.input`
  height: 2.2rem;
  width: 24rem;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  &:focus {
    border: 1px solid var(--green);
    outline: none;
  }
  @media screen and (max-width: 650px) {
    width: 12rem;
  }
`;
export default Input;
