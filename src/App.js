import React from 'react';
import './style.css';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import PersonList from './components/PersonList';

export default function App() {
  return (
    <div>
      <UserGreeting />
      <NameList />
      <PersonList />
    </div>
  );
}
