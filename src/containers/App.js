import React, {Component} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons.js'
import styled from 'styled-components'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary.js'
import Cockpit from '../components/Cockpit/Cockpit.js'

const StyledButton = styled.button`
  margin: 10px;
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`
class  App extends Component {
  state = {
    persons: [
      { id: "bwn", name: "Maxim", age: 28 },
      { id: "asg", name: "Manu", age: 26 },
      { id: "okm", name: "Stephanie", age: 19 }
    ],
    showPersons: false
  };

  switchNameHandler = (newName) => {
    // DON'T DO THIS this.state.persons[0].name = "Maximilian";
    this.setState({
      persons: [
        { id: "bwn", name: newName, age: 28 },
        { id: "asg", name: "Manu", age: 26 },
        { id: "okm", name: "Stephanie", age: 19 }
      ]
    })
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
  }

  toggelPersonsHandler = () => {
    const previousFlag = this.state.showPersons;
    this.setState({showPersons: !previousFlag})
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render(){
    const style = {
      margin: '10px',
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if(this.state.showPersons){
      persons = <Persons 
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.changeNameHandler}/>
    }

    return (
      <div className={classes.App}>
        <Cockpit 
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.toggelPersonsHandler}/>
        <StyledButton 
          alt={this.state.showPersons}
          key="aaa"
          onClick={this.switchNameHandler.bind(this, "Maximilian")}>Switch Name</StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;


















{/* <Person 
  name={this.state.persons[0].name} 
  age={this.state.persons[0].age} 
  change={this.changeNameHandler}/>
<Person 
  name={this.state.persons[1].name} 
  age={this.state.persons[1].age} 
  click={this.switchNameHandler.bind(this, "Maxi!")}>My Hobbies: Racing</Person>
<Person 
  name={this.state.persons[2].name} 
  age={this.state.persons[2].age} 
  click={() => this.switchNameHandler("Maxi!2")}/>  */}