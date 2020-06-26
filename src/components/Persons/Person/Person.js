import React, { Component } from 'react';
import classes from './Person.module.css';

class Person extends Component {
  render(){
    console.log("[Person.js] render");
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old person!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.change} value={this.props.name}/>
      </div>
    );
  }
}

export default Person;