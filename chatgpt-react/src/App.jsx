import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import ProductCard from './ProductCard.jsx';
import CounterDisplay from './CounterDisplay.jsx';
import CounterButton from './CounterButton.jsx';
function App() {

  //props and usestate
  // const products = [
  //   { id: 1, name: "Laptop", price: 50000 },
  //   { id: 2, name: "Phone", price: 25000 },
  //   { id: 3, name: "Mouse", price: 1000 },
  // ];
  // const [message, setMessage] = useState("");
  // function handleAdd() {
  //   setMessage("Item added successfully");
  // }
  // return (
  //   <div>
  //     {products.map((product) => (
  //       <ProductCard
  //         key={product.id}
  //         product={product.name}
  //         price={product.price}
  //         onAdd={handleAdd}
  //       ></ProductCard>
  //     ))}
  //     {message && <p>{message}</p>}
  //   </div>
  // );


  //forms
  // const [name, setName] = useState("");
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   console.log("Submitted name:", name);
  // }
  // return (
  //   <div>
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         type="text"
  //         value={name}
  //         onChange={(event) => setName(event.target.value)}
  //       />
  //       <button type="submit">Submit</button>
  //     </form>
  //     <p>hello, {name}</p>
  //   </div>
  // );


  //multiple inputs

//   const [form, setForm] = useState({
//     name: "",
//     email: ""
//   })
//   function handleSubmit(event) {
//     event.preventDefault();
//     const validate = Errorhandle();
//     if(Object.keys(validate).length === 0){
//       console.log("Submitted form:", form);
//     }
//   }
//   const [errors, setErrors] = useState({});
//   function Errorhandle(){
//     const newerror = {};
//     if (!form.name.trim()) {
//       newerror.name = "Name is required";
//   }
//     if (!form.email.trim()) {
//       newerror.email = "Email is required";
//     }
//     setErrors(newerror);
//     return newerror;
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
//           <input type="text" value={form.name} onChange={(event) => setForm({
//             ...form,
//             name: event.target.value
//           })}></input>
//         </div>
//         <div>
//           <label>Email:</label>
//           {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
//           <input type="email" value={form.email} onChange={(event) => setForm({
//           ...form,
//           email: event.target.value
//         })}></input></div>
        
//         <button type="submit">Submit</button>
//       </form>
//     </div>
  //   )
  

  //form validation

  // const [form, setForm] = useState({
  //   name: ""
  // });
  // const [errors, setError] = useState({});
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const validate = validation();
  //   if (Object.keys(validate).length === 0) {
  //     console.log("Submitted Successfully!");
  //   }
  // }
  // function handleChange(event) {
  //   setForm({
  //     ...form,
  //     name: event.target.value
  //   });
  // }
  // function validation() {
  //   const newerror = {};
  //   if (!form.name.trim()) {
  //     newerror.name = "Name is required";
  //   }
  //   setError(newerror);
  //   return newerror;
  // }
  // return(
  //   <div>
  //     <form onSubmit={handleSubmit}>
  //       <div>
  //         <label>Name:</label>
  //         <input type="text" value={form.name} onChange={handleChange}></input>
  //       </div>
  //       {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
  //       <button type="Submit">Submit</button>
  //     </form>
  //   </div>
  // );

  //component composition

  // return (
  //   <div>
  //     <ProductCard>
  //       <h1>Laptop</h1>
  //       <p>Price: 50000</p>
  //       <button>Add to Cart</button>
  //     </ProductCard>
  //     <ProductCard>
  //       <h1>Phone</h1>
  //       <p>Price: 25000</p>
  //       <button>Add to Cart</button>
  //     </ProductCard>
  //     <ProductCard>
  //       <h1>Mouse</h1>
  //       <p>Price: 1000</p>
  //       <button>Add to Cart</button>
  //     </ProductCard>
  //   </div>
  // );

  //lifting states up

  // const [state, setstate] = useState(0);
  // return (
  //   <div>
  //     <CounterDisplay state={state} />
  //     <CounterButton state={state} setstate={ setstate} />
  //   </div>
  // );

  //useeffect
  // const [count, setCount]=useState(0);
  // useEffect(() => {
  //   document.title= `Count: ${count}`;
  // },[count])
  // return(
  //   <div>
  //     <p>{count}</p>
  //     <button onClick={()=> setCount(count+1)}>Increment</button>
  //   </div>
  //)

  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log("running..");
  //   }, 1000);
  //   return () => {
  //     clearInterval(timer);
  //   }
  // }, []);

  //api handling
  const [product, setProduct] = useState([]);
  const [load, setLoad]= useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!data.ok) {
          throw new Error("failed to fetch the data");
        }
        const data1 = await data.json();
        setProduct(data1);
      
      }
      catch (err) {
        console.log("error", err);
        setError(err.message);
      }
      finally {
        setLoad(false);
      }
    }
  },[])
  fetchData();
}
export default App;