import React from 'react';
import Person from './Person/Person'

const persons = (props) => {
  console.log("[Persons.js] render");
  return props.persons.map((person, index) => {
    return <Person
        click={() => props.clicked(index)}
        name={person.name}
        key={person.id}
        age={person.age}
        change={(event) => props.changed(event, person.id)}/>
    }
  );
};


export default persons;