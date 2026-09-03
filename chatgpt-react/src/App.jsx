import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import ProductCard from "./ProductCard.jsx";
import { createContext, useContext } from "react";
import CounterDisplay from "./CounterDisplay.jsx";
import CounterButton from "./CounterButton.jsx";
import { useRef } from "react";
import { useReducer } from "react";
import UseContext from "./UseContext.jsx";
import useCounter from "./useCounter.jsx";
import useFetch from "./useFetch.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Navbar from "./Components/Navbar.jsx";
import Product from "./Components/Product.jsx";
import Dashboard from "./component/Dashboard.jsx";
import Profile from "./component/Profile.jsx";

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
// const [data, setData] = useState([]);
// const [load, setLoad] = useState(true);
// const [error, setError] = useState("");
// useEffect(() => {
//   async function fetchdata() {
//     try {
//       setLoad(true);
//       const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//       if (!res.ok) {
//         throw new Error("Error fetching data");
//       }
//       const result = await res.json();
//       setData(result);
//       setLoad(false);
//       }
//     catch (err) {
//       setError("Error fetching data");
//     }
//   }
//   fetchdata();
//   },[]);
// return (
//   <div>
//     {data.length===0 && <p>No data available</p>}
//     {load && <p>Loading...</p>}
//     {error && <p style={{ color: "red" }}>{error}</p>}
//     {data.map(value => <p key={value.id}>{ value.title}</p>)}
//   </div>
// )

//controller
// useEffect(() => {
//   async function fetchdata() {
//     const controller = new AbortController();
//     try {
//       const data= await fetch("https://jsonplaceholder.typicode.com/posts", { signal: controller.signal });
//       const result = await data.json();
//       console.log(result);
//     }
//     catch(err){
//       console.log("Error");
//     }
//   }
//   fetchdata();
//   return ()=>{
//     controller.abort();
//   }
// },[])

//useref
//example1
// const inputRef = useRef(null);
// return(
//   <div>
//     <label>name</label>
//     <input type="text" ref={inputRef} />
//     <button onClick={()=>{inputRef.current.focus()}}>focus</button>
//   </div>
// )
//example2
// const countref = useRef(0);
// return (
//   <div>
//     <p> Count:{countref.current}</p>
//     <button onClick={()=>{countref.current++}}>Increment</button>
//   </div>
// );
//example3
// const [value, setValue] = useState("");
// const prevValueRef = useRef("");
// useEffect(() => {
//   prevValueRef.current = value;
// }, [value]);
// return(
//   <div>
//     <input type="text" onChange={(event) => { setValue(event.target.value); }} />
//     <p>previous value:{prevValueRef.current}</p>
//     <p>current value:{value}</p>
//   </div>
// )

//DEBOUNCING
// const [state, setState] = useState("");
// const [debouncedValue, setDebouncedValue] = useState(state);
// useEffect(()=>{
//   const timer = setTimeout(() => {
//     setDebouncedValue(state);
//   }, 500);
//   return () => {
//     clearTimeout(timer);
//   };
// }, [state])
// return(
//   <div>
//     <input type="text" value={state} onChange={(event) => { setState(event.target.value); }} />
//     <p>Debounced value: {debouncedValue}</p>
//   </div>
// )

//usememo
// const [state, setState] = useState("");
// function calculateSum() {
// let sum = 0;

// for (let i = 0; i <= 99999; i++) {
//   sum += i;
// }

// console.log("Calculation running");

// return sum;
// }
// const res = useMemo(() => { calculateSum(); },[])
// return (
//   <div>
//     <p>Result: {res}</p>
//     {/* <button onClick={() => { setState(state + 1); }}>increment</button> */}
//   </div>
// )

//context api
// const Themecontext = createContext();
// function App() {
//   const Name = "Arun";
//   const age = "21";
//   return (
//     <div>
//       <Themecontext.Provider value={{ Name, age }}>
//         <ProductCard/>
//       </Themecontext.Provider>
//     </div>
//   );

//usereduce
// const [count, dispatch] = useReducer(reducer, 0);
// function reducer(state,action) {
//   console.log(action);
//   if (action.type === "increment") {
//     return state + 1;
//   }
//   if (action.type === "decrement") {
//     return state - 1;
//   }
//   return state;
// }
// return(
//   <div>
//     <p>{count}</p>
//     <button onClick={()=>dispatch({type: "increment"})}>+</button>
//     <button onClick={()=>dispatch({type: "decrement"})}>-</button>
//   </div>
// )

// exercise 2
//  const initialstate = {
//    count: 0,
//    step: 2,
//  };
//   const [state, dispatch] = useReducer(reducer, initialstate);
// function reducer(state, action) {
//   console.log(action);
//   switch(action.type){
//     case "increment":
//       return {
//         ...state,
//         count: state.count + state.step,
//       };
//     case "decrement":
//       return {
//         ...state,
//         count: state.count - state.step,
//       };
//     case "reset":
//       return {
//         ...state,
//         count: 0,
//       };
//   }
//   return state;
// }
// return (
//   <div>
//     <p>{state.count}</p>
//     <button onClick={() => dispatch({ type: "increment" })}>+</button>
//     <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//     <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
//   </div>
// );

//exercise 3
// function App() {
//     const initialValue = {
//     count: 0,
//     step: 1
//   }
//   const [state, dispatch] = useReducer(reducer, initialValue);
//   function reducer(state, action) {
//     switch (action.type) {
//       case "increment":
//         return {
//           ...state,
//           count: state.count + action.payload
//         };
//       case "decrement":
//         return {
//           ...state,
//           count: state.count - action.payload
//         };
//       case "reset":
//         return {
//           ...state,
//           count: 0
//         };
//       default:
//         throw new Error();
//     }
//   }
//     return(
//       <div>
//         <p>{state.count}</p>
//         <button onClick={() => dispatch({ type: "increment", payload: 3 })}>+</button>
//         <button onClick={() => dispatch({ type: "decrement", payload: 2 })}>-</button>
//         <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
//       </div>
//     )
//   }
// export default App;

//context+useReducer
// function App() {
//   const Name = "Eesha";
//   const age = 21;
//   const [state, dispatch] = useReducer(reducer, { count: 0, step: 1 });
//   function reducer(state, action) {
//     switch (action.type) {
//       case "increment":
//         return {
//           ...state,
//           count: state.count + state.step
//         };
//       case "decrement":
//         return {
//           ...state,
//           count: state.count - state.step
//         };
//       case "reset":
//         return {
//           ...state,
//           count: 0
//         };
//       default:
//         throw new Error();
//     }
//   }

//   return (
//     <UseContext.Provider value={{ Name, age, state, dispatch }}>
//       <ProductCard />
//     </UseContext.Provider>
//   );
// }

// export default App;

//custom hooks
// function App() {
//   const { count, increment, decrement, reset } = useCounter();
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }
// export default App;

//useFetch
// function App() {
//   const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts"
//   );
//   return (
//     <div>
//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error.message}</p>}
//       {data && (
//         <ul>
//           {data.map((post) => (
//             <li key={post.id}>{post.title}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
// export default App;

//rendering and re-rendering
//routing
// function App(){
//   return (
//     <BrowserRouter>
//       <Navbar/>
//         <Routes>
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/Product/:id" element={<Product />} />
//          <Route path="/dashboard" element={<Dashboard />}>
//           <Route path="profile" element={<Profile />} />
//           </Route>
//           <Route path="*" element={<h1>404 Not Found</h1>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
// export default App;

//CRUD Operation


// function App() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   async function createpost() {
//    try {
//       const response = await fetch(
//         "https://fakestoreapi.com/products",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             title: "React Product",
//             price: 100,
//             description: "Created from React",
//             category: "electronics",
//           }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to create product");
//       }

//       const newProduct = await response.json();

//       console.log(newProduct);
//     } catch (error) {
//       console.error(error);
//     }
//       }
  
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch("https://fakestoreapi.com/products");

//         if (!response.ok) {
//           throw new Error("Error fetching products");
//         }

//         const result = await response.json();

//         setProducts(result);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <button onClick={createpost}>Create Product</button>
//       <div>
//         {loading && <p>Loading...</p>}

//         {error && <p style={{ color: "red" }}>{error}</p>}

//         {products.map((product) => (
//           <div key={product.id}>
//             <h2>{product.title}</h2>
//             <p>{product.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;



//put vs patch

// function App() {
//   async function createpost(){
//     const data = await fetch("https://fakestoreapi.com/products", {
//       method: "Post",
//       headers: {
//         "content-type": "application/json"
//       },
//       body: JSON.stringify({
//         title: "React Product",
//         price: 100,
//         description: "Created from React",
//         category: "electronics"
//       })
//     });
//     const response= await data.json();
//     console.log(response);
//   }
//   async function updatepost() {
//     const data = await fetch("https://fakestoreapi.com/products/1", {
//       method: "Patch",
//       headers: {
//         "content-type": "application/json"
//       },
//       body: JSON.stringify({
//         title: "Updated React Product",
//         price: 150,
//         description: "Updated from React",
//         category: "electronics"
//       })
//     });
//     const response = await data.json();
//     console.log(response);
//   }
//   async function deletepost() {
//     const data = await fetch("https://fakestoreapi.com/products/1", {
//       method: "Delete"
//     });
//     const response = await data.json();
//     console.log(response);
//   }
//   return(
//     <div>
//       <button onClick={createpost}>Create Product</button>
//       <button onClick={updatepost}>Update Product</button>
//       <button onClick={deletepost}>Delete Product</button>
//     </div>
//   )
// }
// export default App;





//services page(structure)
import {getproducts, createpost, deletepost} from "./services/productservice.jsx";

function App(){

  const getprod = async() => {
    const data= await getproducts();
    console.log(data);
  }
  const create= async() => {
    const data= await createpost();
    console.log(data);
  }
  const del = async() => {
    const data= await deletepost(1);
    console.log(data);
  }
  return(
    <div>
      <button onClick={getprod}>Getproducts</button>
      <button onClick={create}>Createpost</button>
      <button onClick={del }>Deletepost</button>
    </div>

  )
}
export default App;