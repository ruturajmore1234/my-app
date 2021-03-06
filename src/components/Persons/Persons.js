import React, { PureComponent } from 'react';
import Person from './Person/Person'

class Persons extends PureComponent{

  static getDerivedStateFromProps(props, state){
    console.log("[Persons.js] getDerivedStateFromProps");
    return state;
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log("[Persons.js] shouldComponentUpdate");
  //   if(
  //     this.props.persons !== nextProps.persons ||
  //     this.props.changed !== nextProps.changed ||
  //     this.props.clicked !== nextProps.clicked
  //   ){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("[Persons.js] componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  render(){
    console.log("[Persons.js] render");
    return this.props.persons.map((person, index) => {
      return <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        key={person.id}
        age={person.age}
        change={(event) => this.props.changed(event, person.id)}/>
      }
    );
  };
}

export default Persons;