import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/seach-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

  }


  componentDidMount() {
    // Code here executes when the component renders to the DOM
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  render() {

    // Filter out monsters that we don't want rendered.
    const { monsters, searchField } = this.state;
    console.log(searchField);
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (

    <div className="App">
      <h1>Monsters Rolodex</h1>
    {/* <script> deez(); function deez() {console.log("hello world")} </script>  */}

      <SearchBox placeholder='Search Monsters' handleChange={this.handleChange} />      
      <CardList monsters={filteredMonsters} />
    </div>
    )
  }
}

export default App;
