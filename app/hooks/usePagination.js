import { useMemo, useState } from 'react';

export default function usePagination(data, volume) {
  const totalPages = useMemo(
    () => Math.floor(data.length / volume),
    [volume, data.length]
  );
  const [page, setPage] = useState(1);

  const slicedData = useMemo(
    () => data.slice(page * volume, page * volume + volume),
    [volume, page, data.length]
  );

  return { data: slicedData, page, totalPages, setPage };
}
