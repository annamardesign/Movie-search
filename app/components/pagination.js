'use client';

export default function Pagination({ onPrevPage, onNextPage, pagination }) {
  return (
    <div className='pagination'>
      <button
        className='pageBtn'
        onClick={onPrevPage}
        disabled={pagination.page <= 1}
      >
        Back
      </button>
      <p>Page {pagination.page || ''}</p>
      <button
        className='pageBtn'
        disabled={pagination.page === pagination.totalPages}
        onClick={onNextPage}
      >
        Next
      </button>
    </div>
  );
}
