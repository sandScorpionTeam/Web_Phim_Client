import React, {useState} from 'react';
import "./search-bar.scss";

const SearchBar = () => {
  const categories = ["Movie", "TVShow", "Cast", "News"];
  const [selectedCategory, setSelectedCategory] = useState("Movie");
  const [keyword, setKeyword] = useState("");
  return (
    <div className="search-bar">
      <form action="/search">
        <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
          {categories.map((val, ind) => {            
            return <option value={val} key={ind}>{val}</option>
          })}
        </select>
        <input value={keyword} 
          placeholder="Search movie"
          onChange={e => setKeyword(e.target.value)} />
      </form>
    </div>
  )
}

export default SearchBar;