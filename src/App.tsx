import "./App.css";
import { useState } from "react";

// Components
// import { Application } from "./components/application/Application";
// import { Skills } from "./components/skills/Skills";
// import Counter from "./components/counter/Counter";
// import CounterTwo from "./components/counter-two/CounterTwo";
import Users from "./components/users/users";

function App() {
  // const skills = ["drawing", "coding", "writing"];
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      {/* <Application /> */}
      {/* <Skills skills={skills} /> */}
      {/* <Counter /> */}
      {/* <CounterTwo
        count={count}
        handleIncrement={() => setCount(count + 1)}
        handleDecrement={() => setCount(count - 1)}
      /> */}
      <Users />
    </div>
  );
}

export default App;
