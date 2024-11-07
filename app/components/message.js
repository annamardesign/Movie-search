export default function Message({ totalResults, searchQuery }) {
  return (
    <h2 className='showing'>
      Showing 3 of {totalResults} results for {searchQuery}
    </h2>
  );
}
