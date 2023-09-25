import { useState } from "react";

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
      <div>
        filter shown with{" "}
        <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={newNameHandler} />
        </div>
        <div>
          number: <input value={newNumber} onChange={newNumberHandler} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons
        .filter((elm) => elm.name.toLocaleLowerCase().includes(filter))
        .map((person) => {
          return (
            <p key={person.name}>
              <span>{person.name}</span> <span>{person.number}</span>
            </p>
          );
        })}
    </div>
  );
};

export default App;
