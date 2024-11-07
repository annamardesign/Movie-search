import styled from 'styled-components';
const Tile = styled.div`
  width: 18rem;
  height: 26rem;
  border: 1px, var(--grey);
  border-radius: 6px;
  box-shadow: 0 4px 5px 0 rgba(123, 124, 129, 0.05);
  background-color: #fff;
  margin-top: 2rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 12rem auto 1fr;
  overflow: hidden;

  :&hover  {
    cursor: pointer;
  }
  &:hover .cardImage {
    filter: contrast(100%);
    cursor: pointer;
  }
  .cardImage {
    filter: contrast(70%);
    overflow: hidden;
    transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
    background-color: grey;
    position: relative;
    max-height: 31rem;
    font-size: 3rem;
    line-height: 3.1rem;
    text-align: center;
  }
  .cardText {
    overflow: hidden;
  }
  .image {
    width: auto;
    object-fit: cover;
  }
`;
export default Tile;
