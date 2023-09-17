import PropTypes from "prop-types";
import StatisticLine from "../StatisticLine/StatisticLine";

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
          <StatisticLine text="good" value={`${good}`}></StatisticLine>
          <StatisticLine text="neutral" value={`${neutral}`}></StatisticLine>
          <StatisticLine text="bad" value={`${bad}`}></StatisticLine>
          <StatisticLine text="all" value={` ${getTotal()}`}></StatisticLine>
          <StatisticLine
            text="average"
            value={` ${getAverage()}`}
          ></StatisticLine>
          <StatisticLine
            text="positive"
            value={` ${getPossitiveRatio()} %`}
          ></StatisticLine>
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
