import { useEffect, useState } from "react";
import "./App.css";
//import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [searchField, monsters]);

  const onSearchChange = (event) => {
    setSearchField(event.target.value.toLocaleLowerCase());
  };
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onSearchChange={onSearchChange}
        placeholder="search monster"
        className="monsters-search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};
export default App;

//--> below code is done by using class component in react

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => this.setState({ monsters: users }));
//   }

//   onSearchChange = (event) => {
//     this.setState({
//       searchField: event.target.value.toLocaleLowerCase(),
//     });
//   }

//   render() {
//     const {monsters , searchField} = this.state;
//     const {onSearchChange} = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox onSearchChange = {onSearchChange} placeholder = 'search monster' className = 'monsters-search-box'/>
//         <CardList monsters = {filteredMonsters}/>
//       </div>
//     );
//   }
// }
//export default App;
