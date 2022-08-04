import React from 'react';

function NameList() {
  const names = ['Bruce', 'Clark', 'Diana'];

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
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);

  return (
    <div>
      <h1>Simple List</h1>
      <ul>{nameList}</ul>
    </div>
  );
}

export default NameList;
