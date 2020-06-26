import React from 'react';
import classes from './Person.module.css';
import styled from 'styled-components'

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  @media (min-width: 500px){
    width: 450px;
  }
  `;

const person = (props) => {
  console.log("[Person.js] render");

  // const style = {
  //   '@media (min-width: 500px)': {
  //     width: '450px'
  //   }
  // };

  // const rnd = Math.random();
  // if(rnd > 0.7){
  //   throw new Error('Something went wron!');
  // }

  return (
    // <div className="Person" style={style}>
    // <StyledDiv>
    <div className={classes.Person}>
      <p onClick={props.click}>I am {props.name} and I am {props.age} years old person!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name}/>
    </div>
    // </StyledDiv>
  )
}

export default person;