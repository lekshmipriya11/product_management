import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

const Home = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProduct(res.data.products));
  }, []);
  console.log(product);

  return (
    <div style={{ margin: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Table</h2>
      <div style={{paddingBottom:"25px"}}>
        <a href="/Login" style={{alignSelf:"end"}}>Logout </a>
      </div>
      <div style={{paddingTop:"25px"}}>
      <Table border={2}>
        <thead>
        <tr style={{backgroundColor:"lightblue",width:"5px"}}>
              <th>Title</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Rating</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
        </thead>
            
            {product.map(pro => (
              <tr key={pro.id}style={{backgroundColor:"lightgray"}}>
                <td>{pro.title}</td>
                <td>{pro.brand}</td>
                <td>{pro.category}</td>
                <td>{pro.rating}</td>
                <td>{pro.price}</td>
                <td>{pro.stock}</td>
              </tr>
            ))}
          </Table>
      </div>
    </div>
  );
};

export default Home;
