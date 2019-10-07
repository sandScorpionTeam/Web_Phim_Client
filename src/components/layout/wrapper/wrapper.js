import React from 'react';
import "./wrapper.scss";
import SearchBar from 'components/search-bar/search-bar';
import Movies from 'components/movies/movies-list';
import Pagination from 'components/pagination/pagination';

const Wrapper = () => {
  return (
    <main className="page-content">
      <SearchBar />
      <Movies />
      <Pagination />
    </main>
  )
}

export default Wrapper