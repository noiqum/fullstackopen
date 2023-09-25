import PropTypes from "prop-types";

const Persons = ({ persons, filter }) => {
  return (
    <div>
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

Persons.propTypes = {
  persons: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Persons;
