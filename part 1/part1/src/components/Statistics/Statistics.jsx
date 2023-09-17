import PropTypes from "prop-types";

const Statistics = (props) => {
  const { good, neutral, bad } = props;

  const getTotal = () => {
    const total = good * 1 + bad * -1;
    return total;
  };
  const getAverage = () => {
    const totalVote = good + bad + neutral;
    const cumitative = getTotal();
    return cumitative / totalVote;
  };
  const getPossitiveRatio = () => {
    return (good / (good + bad + neutral)) * 100;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>Statistics</h2>
      {good > 0 || neutral > 0 || bad > 0 ? (
        <>
          {" "}
          <span>{`good ${good}`}</span>
          <span>{`neutral ${neutral}`}</span>
          <span>{`bad ${bad}`}</span>
          <span>{`all ${getTotal()}`}</span>
          <span>{`average ${getAverage()}`}</span>
          <span>{`positive ${getPossitiveRatio()} %`}</span>{" "}
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Statistics;
