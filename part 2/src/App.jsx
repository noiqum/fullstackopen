import { useEffect } from "react";
import { useState } from "react";
import Filter from "./components/Filter/Filter";
import PersonForm from "./components/PersonForm/PersonForm";
import { getAll, create, deletePerson, update } from "./services/phoneBook";
import Persons from "./components/Persons/Persons";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [serverMessage, setServerMessage] = useState(null);

  useEffect(() => {
    if (serverMessage) {
      setTimeout(() => {
        setServerMessage(null);
      }, 3000);
    } else {
      return;
    }
  }, [serverMessage]);

  useEffect(() => {
    getAll().then((response) => {
      setPersons(response);
    });
  }, []);

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
        update(person.id, changedPerson)
          .then((response) => {
            setPersons(
              persons.map((person) =>
                person.id !== response.id ? person : response
              )
            );
            setServerMessage({
              message: `Updated ${response.name}`,
              type: "success",
            });
            setNewName("");
            setNewNumber("");
          })
          .catch((error) => {
            console.log("error", error);
            setServerMessage({
              message: `Information of ${person.name} has already been removed from server`,
              type: "error",
            });
          });
      }
      return;
    }
    create(newPerson).then((response) => {
      setPersons(persons.concat(response));
      setServerMessage({ message: `Added ${response.name}`, type: "success" });
      setNewName("");
      setNewNumber("");
    });
  };

  const deleteHandler = (id, person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      deletePerson(id)
        .then(() => {
          setServerMessage({
            message: `Deleted ${person.name}`,
            type: "success",
          });
        })
        .catch((error) => {
          console.log("error", error);
          setServerMessage({
            message: `Information of ${person.name} has already been removed from server`,
            type: "error",
          });
        });
      getAll().then((response) => {
        return setPersons(response);
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={serverMessage}></Notification>
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
