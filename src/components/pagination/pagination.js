import React from 'react';
import "./pagination.scss";
import clsx from 'clsx';
import { getPages} from "services/pager/pager";

const Pagination = () => {
  const maxPage = 10;
  const currentPage = 5;
  const pages = getPages(currentPage, maxPage);

  return (
    <div className="pagination">
      <ul className="pagination-list">        
        {pages.map((page) => {
          return <li key={page} className={clsx({active: page === currentPage})}><a href="/">{page}</a></li>
        })}
      </ul>
    </div>
  )
}

export default Pagination;