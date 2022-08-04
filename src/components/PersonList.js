import React from 'react';
import Person from './Person';
function PersonList() {
  const persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 12,
      skill: 'HTML/CSS',
    },
    {
      id: 2,
      name: 'Clark',
      age: 43,
      skill: 'JavaScript',
    },
    {
      id: 3,
      name: 'Diana',
      age: 28,
      skill: 'React',
    },
    {
      id: 4,
      name: 'Aayush',
      age: 21,
      skill: 'Node',
    },
  ];

  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));

  return (
    <div className="list-body">
      <h1>List Rendering</h1>
      <ul>
      {personList}
      </ul>
    </div>
  );
}

export default PersonList;

// List and Keys
//1. A 'key' is a special string attribute you need to include when creating lists of elements
//2. Keys give the elements a stable identity
//3. Keys help React identify which items have changed, are added, or are removed.
