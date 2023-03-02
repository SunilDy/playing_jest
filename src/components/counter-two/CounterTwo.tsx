import { CounterTwoProps } from "./CounterTwo.types";

export default function CounterTwo(props: CounterTwoProps) {
  return (
    <div>
      <h1>Counter Two</h1>
      <p>Count: {props.count}</p>
      {props.handleIncrement && (
        <button onClick={props.handleIncrement}>INC</button>
      )}
      {props.handleDecrement && (
        <button onClick={props.handleDecrement}>DEC</button>
      )}
    </div>
  );
}
