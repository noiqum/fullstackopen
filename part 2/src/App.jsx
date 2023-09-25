import { useState } from "react";
import Filter from "./components/Filter/Filter";
import PersonForm from "./components/PersonForm/PersonForm";
import Persons from "./components/Persons/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
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

    setPersons(persons.concat(newPerson));
    setNewName("");
  };
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
