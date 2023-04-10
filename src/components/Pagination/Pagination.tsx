import React from 'react';
import './Pagination.css';

interface IProps {
  page: number;
  pages: number;
  handlePage: (page: number) => void;
}

export default function Pagination(props: IProps) {
  function handlePage(page: number) {
    props.handlePage(page);
  }

  return (
    <div className="pagination">
      {props.page > 1 && (
        <div className="pagination__prew" onClick={() => handlePage(props.page - 1)}>
          previous page
        </div>
      )}
      {(props.page > 1 || props.pages > props.page) && <div>{props.page}</div>}
      {props.pages > props.page && (
        <div className="pagination__next" onClick={() => handlePage(props.page + 1)}>
          next page
        </div>
      )}
    </div>
  );
}
