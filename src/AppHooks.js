import React, {useState} from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person.js'

const App = () => {
  const [personState, setPersonState] = useState(
    {
      persons: [
        { name: "Max", age: 28 },
        { name: "Manu", age: 26 },
        { name: "Stephanie", age: 19 }
      ]
    }
  );

  const [otherState, setOtherState] = useState("Some other value");

  console.log(otherState, personState);
  
  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: "Maximilian", age: 28 },
        { name: "Manu", age: 26 },
        { name: "Stephanie", age: 19 }
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi, I am a react app !</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies: Racing</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
    </div>
  );

}

export default App;
