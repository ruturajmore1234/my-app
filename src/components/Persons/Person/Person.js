import React, { Component, Fragment } from 'react';
import classes from './Person.module.css';
import Aux from '../../../hoc/Aux.js'

class Person extends Component {
  render(){
    console.log("[Person.js] render");
    return (
      <Fragment>  {/* className={classes.Person} it didn't got applied*/}
        <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old person!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.change} value={this.props.name}/>
      </Fragment>
    );
  }
}

export default Person;