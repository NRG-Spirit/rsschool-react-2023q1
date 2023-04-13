import './Pagination.css';
import { setPageState } from '../../redux/searchReducer';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import React from 'react';

interface IProps {
  pages: number;
}

export default function Pagination(props: IProps) {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.search.page) || 1;

  function handlePage(page: number) {
    dispatch(setPageState(page));
  }

  return (
    <div className="pagination">
      {page > 1 && (
        <div className="pagination__prew" onClick={() => handlePage(page - 1)}>
          previous page
        </div>
      )}
      {(page > 1 || props.pages > page) && <div>{page}</div>}
      {props.pages > page && (
        <div className="pagination__next" onClick={() => handlePage(page + 1)}>
          next page
        </div>
      )}
    </div>
  );
}
