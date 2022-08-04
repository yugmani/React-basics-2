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
