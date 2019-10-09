import React from 'react';
import "./wrapper.scss";
import Movies from 'components/movies/movies-list';
import Pagination from 'components/pagination/pagination';

const Wrapper = () => {
  return (
    <main className="page-content">      
      <Movies />
      <Pagination />
    </main>
  )
}

export default Wrapper