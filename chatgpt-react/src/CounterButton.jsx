const CounterButton = ({state, setstate}) => {
  return (
    <div>
      <button onClick={() => setstate(state + 1)}>+</button>
      <button onClick={() => setstate(state - 1)}>-</button>
    </div>
  );
}
export default CounterButton;