import Content from "./components/Content/Content";
import Header from "./components/Header/Header";

const App = () => {
  const course = "Half Stack application development";

  const exercises1 = 10;

  const exercises2 = 7;

  const exercises3 = 14;

  return (
    <div>
      <Header course={course}></Header>
      <Content />
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
};

export default App;
