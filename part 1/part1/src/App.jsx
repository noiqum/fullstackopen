import Content from "./components/Content/Content";
import Header from "./components/Header/Header";

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];
  function getTotalExercise(partList) {
    let total = 0;
    partList.forEach((element) => {
      total = total + element.exercises;
    });
    return total;
  }
  return (
    <div>
      <Header course={course}></Header>
      <Content />
      <p>Number of exercises {getTotalExercise(parts)}</p>
    </div>
  );
};

export default App;
