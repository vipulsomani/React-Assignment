import React, { Component } from 'react';
import './App.css';
import './Person/Person.css';
import  Person from './Person/Person';

class App extends Component{
  state = {
    persons : [
      {name: 'Charlie', job:'Janitor'},
      {name: 'Mac', job:'Bouncer'},   
      {name: 'Dee', job:'Aspiring Actress'},
      {name: 'Dennis', job:'Bartendor'},
       ]
  }
  render () {
 
    let person = (
       this.state.persons.map(per => {
        return <Person
        name={per.name}
        job={per.job}></Person>
      })
    )
    const name ='Name';
    const job ='Job';
    return (
      <div className="App">
      <table>
        <tr>
          <th>{name}</th>
          <th>{job}</th>
        </tr>
          {person}
        </table>
      </div>
    );
  }
}

export default App;
