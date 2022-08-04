import React from 'react';

function NameList() {
  const names = ['Bruce', 'Clark', 'Diana'];

  const heading = {
    fontSize: '48px',
    color: 'green',
    fontWeight: 'bold',
  };
  // return (
  //   <div>
  //     <h1>List Rendering</h1>
  //     <ul>
  //       {names.map((name, index) => (
  //         <li key={index}>{name}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );

  //Alternative approach to list;
  const nameList = names.map((name, index) => (
    <li key={index} style={{ color: 'brown', backgroundColor: 'lightblue' }}>
      {name}
    </li>
  ));

  return (
    <div>
      <p style={heading}>Simple List</p>
      <ul>{nameList}</ul>
    </div>
  );
}

export default NameList;
