import React from 'react';

function Person({ person }) {
  const { name, age, skill } = person;
  return (
    <h3>
      My name is {name} and {age} years old. I am learning {skill}.
    </h3>
  );
}

export default Person;

//when to use index as a key?
// ***************************

// 1. The items in your list do not have a unique id.
// 2. The list is a static list and will not change.
// 3. The list will never be reordered or filtered.
