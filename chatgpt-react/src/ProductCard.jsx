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

function ProductCard({children}) {
  return (
    <div>
      <box>
        {children}
      </box>
    </div>
  );
}
export default ProductCard;