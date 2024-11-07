import Card from './card';

function List({ movies }) {
  return (
    <ul className='movieList'>
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
    </ul>
  );
}
export default List;
