import { useEffect } from "react";
import { useState } from "react";
import Filter from "./components/Filter/Filter";
import PersonForm from "./components/PersonForm/PersonForm";
import Persons from "./components/Persons/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const filterHandler = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const newNameHandler = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  };
  const newNumberHandler = (event) => {
    event.preventDefault();
    setNewNumber(event.target.value);
  };

  const addNewName = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    };
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }
    axios.post("http://localhost:3001/persons", newPerson).then((response) => {
      console.log(response);
      setPersons(persons.concat(newPerson));
      setNewName("");
    });
  };
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={filterHandler}></Filter>
      <h2>Add a new</h2>
      <PersonForm
        name={newName}
        number={newNumber}
        onChangeName={newNameHandler}
        onChangeNumber={newNumberHandler}
        onSubmit={addNewName}
      ></PersonForm>
      <h2>Numbers</h2>
      <Persons filter={filter} persons={persons}></Persons>
    </div>
  );
};

export default App;
