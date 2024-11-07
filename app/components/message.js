export default function Message({ totalResults, searchQuery, results }) {
  return (
    <h2 className='message'>
      Showing {results.length} of {totalResults} results for {searchQuery}
    </h2>
  );
}
