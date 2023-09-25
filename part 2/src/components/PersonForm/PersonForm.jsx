import PropTypes from "prop-types";

const PersonForm = (props) => {
  const { onSubmit, name, number, onChangeName, onChangeNumber } = props;
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input value={name} onChange={onChangeName} />
      </div>
      <br></br>
      <div>
        number: <input value={number} onChange={onChangeNumber} />
      </div>
      <br></br>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
PersonForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangeNumber: PropTypes.func.isRequired,
};

export default PersonForm;
