import { useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import './SearchableList.css';

export default function SearchableList({ list }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredList = list.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <form>
      <label className="wrapper">
        <FaMagnifyingGlass className="icon" />
        <input
          className="inputStyle"
          type="text"
          placeholder="Search"
          name="search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </label>
      <ul>
        {filteredList.length === 0 ? (
          <p className="noItemsStyle">No items match the filter</p>
        ) : (
          filteredList.map((item, index) => (
            <li className="itemInListStyle" key={index}>
              {item}
            </li>
          ))
        )}
      </ul>
    </form>
  );
}
