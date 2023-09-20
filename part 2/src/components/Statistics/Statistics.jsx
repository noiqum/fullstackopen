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
        <table>
          <tbody>
            <tr>
              <td>good</td>
              <td>{good}</td>
            </tr>
            <tr>
              <td>neutral</td>
              <td>{neutral}</td>
            </tr>
            <tr>
              <td>bad</td>
              <td>{bad}</td>
            </tr>
            <tr>
              <td>all</td>
              <td>{getTotal()}</td>
            </tr>
            <tr>
              <td>average</td>
              <td>{getAverage()}</td>
            </tr>
            <tr>
              <td>positive</td>
              <td>{`${getPossitiveRatio().toFixed(1)} %`}</td>
            </tr>
          </tbody>
        </table>
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
