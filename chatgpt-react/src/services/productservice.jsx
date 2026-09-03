import axios from "axios";
import api from "./api"; 
export const getproducts = async () => {
  const details = await api.get("/products");
  const datas = details.data;
     return datas;
    }
  
  
export const createpost = async () => {
  const newdata = await api.post("/products", 
   {
      title: "Eesha"
    }
  );
  return newdata.data;
}


export const deletepost = async(id) => {
    const deleteData = await api.delete(`/products/${id}` );
  return deleteData.data;
}

