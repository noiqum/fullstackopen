/* eslint-disable no-undef */
import PropTypes from "prop-types";

const Persons = ({ persons, filter, deleteHandler }) => {
  return (
    <div>
      {persons
        .filter((elm) => elm.name.toLocaleLowerCase().includes(filter))
        .map((person) => {
          return (
            <p key={person.name}>
              <span>{person.name}</span> <span>{person.number}</span>{" "}
              <button onClick={() => deleteHandler(person.id, person)}>
                Delete
              </button>
            </p>
          );
        })}
    </div>
  );
};

Persons.propTypes = {
  persons: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default Persons;
