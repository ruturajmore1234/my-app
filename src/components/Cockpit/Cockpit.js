import React from 'react';
import classes from './Cockpit.module.css'

const cockpit = (props) => {

  const assignedClasses = [];
  let btnClass = [classes.Button];

  if(props.showPersons){
    btnClass.push(classes.Red);
  }
  if(props.persons.length <= 2){
    assignedClasses.push(classes.red);
  }
  if(props.persons.length <= 1){
    assignedClasses.push(classes.bold);
  }

  
  return (
    <div>
      <h1>Hi, I am a react app !</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass.join(' ')}
        key="bbb"
        onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
};

export default cockpit;