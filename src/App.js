import React from 'react';
import './style.css';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import PersonList from './components/PersonList';
import Form from './components/Form';
import ParentComp from './components/ParentComp';

export default function App() {
  return (
    <div>
      <UserGreeting name="Yoog" />
      <NameList />
      <PersonList />
      <Form />
      <ParentComp />
    </div>
  );
}
