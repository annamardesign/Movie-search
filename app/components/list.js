import Card from './card';
import GridList from './ui/GridList';

function List({ movies }) {
  return (
    <GridList>
      {movies &&
        movies?.map((movie, index) => (
          <li key={index + movie?.original_title}>
            <Card
              title={movie?.original_title}
              overview={movie?.overview}
              picture={`https://image.tmdb.org/t/p/w300/${movie?.poster_path}`}
            />
          </li>
        ))}
    </GridList>
  );
}
export default List;
