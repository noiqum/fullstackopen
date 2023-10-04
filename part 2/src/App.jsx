import { useEffect } from "react";
import { useState } from "react";
import Filter from "./components/Filter/Filter";
import PersonForm from "./components/PersonForm/PersonForm";
import { getAll, create, deletePerson, update } from "./services/phoneBook";
import Persons from "./components/Persons/Persons";

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
      if (
        window.confirm(
          `${newName} is already added to the phonebook, replace the old number with a new one?`
        )
      ) {
        const person = persons.find((person) => person.name === newName);
        const changedPerson = { ...person, number: newNumber };
        update(person.id, changedPerson).then((response) => {
          setPersons(
            persons.map((person) =>
              person.id !== response.id ? person : response
            )
          );
          setNewName("");
          setNewNumber("");
        });
      }
      return;
    }
    create(newPerson).then((response) => {
      setPersons(persons.concat(response));
      setNewName("");
      setNewNumber("");
    });
  };

  const deleteHandler = (id, person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      deletePerson(id);
      getAll().then((response) => {
        return setPersons(response);
      });
    }
  };
  useEffect(() => {
    getAll().then((response) => {
      setPersons(response);
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
      <Persons
        deleteHandler={deleteHandler}
        filter={filter}
        persons={persons}
      ></Persons>
    </div>
  );
};

export default App;
