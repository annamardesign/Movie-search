'use client';
import styled, { keyframes } from 'styled-components';
const spin = keyframes`
 100% {
      transform: rotate(360deg);
    }
`;
const Container = styled.div`
  position: absolute;
  margin: 0 auto;
  top: 50%;
  width: 30rem;
  @media screen and (max-width: 580px) {
    width: 15rem;
  }
`;
const LoadingMessage = styled.p`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Spinner = styled.div`
  border-width: 0.5rem;
  border-style: solid;
  border-color: var(--green) var(--green) var(--green) var(--green);
  width: 3.625rem;
  height: 3.625rem;
  border-radius: 50%;
  position: relative;
  -webkit-animation: ${spin} 2s infinite;
  animation: ${spin} 2s infinite;

  &:before,
  &:after {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: orange;
    position: absolute;
    left: 0.125rem;
  }

  &:before {
    top: 0.063rem;
  }

  &:after {
    bottom: 0.063rem;
  }
`;
export default function Loader() {
  return (
    <Container>
      <LoadingMessage>
        Get your popcorn, your movie search is loading ...
      </LoadingMessage>
      <Spinner></Spinner>
    </Container>
  );
}
