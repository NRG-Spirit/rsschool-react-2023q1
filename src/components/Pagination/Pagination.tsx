import React, { useState } from 'react';
import './Pagination.css';

interface IProps {
  page: number;
  pages: number;
  handlePage: (search: string) => Promise<void>;
}

export default function SearchBar(props: IProps) {
  const [value, setValue] = useState('');

  return (
    <div className="pagination">
      {props.page > 1 ?? <div className="pagination__prew">previous page</div>}
      {props.pages > props.page ?? <div className="pagination__next">next page</div>}
    </div>
  );
}
