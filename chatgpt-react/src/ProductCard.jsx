import { useContext } from "react";
import UseContext from './UseContext.jsx';
// import Themecontext from "./App.jsx";

// function ProductCard({ product, price, onAdd }) {
// return (
//   <div>
//     <h1>{product}</h1>
//     <p>Price: {price}</p>
//     <button onClick={onAdd}>Add to Cart</button>
//   </div>
// );
// }
// export default ProductCard;

// function ProductCard({children}) {
//   return (
//     <div>
//       <box>
//         {children}
//       </box>
//     </div>
//   );

function ProductCard() {
  const { Name, age, state, dispatch } = useContext(UseContext);
  return (
    <div>
      <p>Name: {Name}</p>
      <p>Age: {age}</p>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
export default ProductCard;
