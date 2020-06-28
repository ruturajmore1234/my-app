import React, { Component, Fragment } from 'react';
import classes from './Person.module.css';
import Aux from '../../../hoc/Aux.js'
import withClass from '../../../hoc/withClass.js'
import PropTypes from 'prop-types';

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

//propTypes <- p smallcase compulsory
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func
};

export default withClass(Person, classes.Person);