import React, { useEffect } from 'react';
import classes from './Cockpit.module.css'

const Cockpit = (props) => {

  useEffect(() => {
    console.log("[Cockpit.js] useEffect")
    const timer = setTimeout(() => alert('Saved to the cloud!'), 1000);
    return () => {
      clearTimeout(timer);
      console.log("[Cockpit.js] clean up work in useEffect");
    }
  }, []); //componentDidMount

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect")
    return () => {
      console.log("[Cockpit.js] 2nd clean up work in useEffect");
    }
  });

  const assignedClasses = [];
  let btnClass = [classes.Button];

  if(props.showPersons){
    btnClass.push(classes.Red);
  }
  if(props.personsLength <= 2){
    assignedClasses.push(classes.red);
  }
  if(props.personsLength <= 1){
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

export default React.memo(Cockpit);