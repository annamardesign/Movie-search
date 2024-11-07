import styled from 'styled-components';
const GridList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: min-content;
  padding: 0 15rem;
  list-style-type: none;
  @media screen and (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: max-content;
    padding: 2rem;
  }
  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
`;
export default GridList;
