// List.js

import React, { useState, useEffect, Fragment } from "react";

const List = ({ list, removeItem }) => {
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setFiltered(list);
  }, [list]);

  const handleChange = e => {
    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {
      currentList = list;
      newList = currentList.filter(item => {
        const lc = item.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = list;
    }
    setFiltered(newList);
  };

  return (
    <Fragment>
      <input 
        type="text" 
        placeholder="Search..." 
        onChange={handleChange} 
      />
      <ul>
        {filtered.map((todo, i) => (
          <li key={`${todo}-${i}`}>
            {todo} &nbsp;
            <span onClick={() => removeItem(todo)}>x</span>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default List;