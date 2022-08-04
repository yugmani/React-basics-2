import React from 'react';

function Person({ person }) {
  const { id, name, age, skill } = person;
  let primary = id % 2 === 0 ? 'even' : 'odd';
  
  return (
    <li className={primary}>
      My name is {name} and {age} years old. I am learning {skill}.
    </li>
  );
}

export default Person;

//when to use index as a key?
// ***************************

// 1. The items in your list do not have a unique id.
// 2. The list is a static list and will not change.
// 3. The list will never be reordered or filtered.
