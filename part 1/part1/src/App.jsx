import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Total from "./components/Total/Total";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
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
    ],
  };

  return (
    <div>
      <Header course={course.name}></Header>
      <Content parts={course.parts} />
      <Total list={course.parts}></Total>
    </div>
  );
};

export default App;
