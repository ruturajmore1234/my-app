import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.module.css'
import AuthContext from '../../context/auth-context.js';

const Cockpit = (props) => {

  const toggleBtnRef = useRef(null);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect")
    toggleBtnRef.current.click();
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
        ref={toggleBtnRef}
        key="bbb"
        onClick={props.clicked}>Toggle Persons</button>
        {/* <AuthContext.Consumer>
          { (context) => <button key="ssss" onClick={context.login}>Log In</button>  }
        </AuthContext.Consumer> */}
        { <button key="ssss" onClick={authContext.login}>Log In</button>  }
    </div>
  );
};

export default React.memo(Cockpit);