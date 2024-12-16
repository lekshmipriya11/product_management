import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Modal from "react-modal";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button } from "react-bootstrap";
import { FaWindowClose } from "react-icons/fa";

const Home = () => {
  const productApi = "https://dummyjson.com/products";
  const [product, setProduct] = useState([]);
  const [modalshow, setmodalshow] = useState(false);
  const handleClose = () => setmodalshow(false);
  const [pid, setpid] = useState([]);
  useEffect(() => {
    axios.get(productApi).then((res) => setProduct(res.data.products));
  }, []);
  console.log(product);
  const get_pid = (id) => {
    setpid(id);
    setmodalshow(true);
  };
  console.log(pid);
  

  return (
    <div style={{ margin: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Table</h2>
      <div style={{ paddingBottom: "25px" }}>
        <a href="/Login" style={{ alignSelf: "end" }}>
          Logout{" "}
        </a>
      </div>
      <Modal
        show={modalshow}
        onHide={handleClose}
        animation={false}
        className={"productmodal"}
      >
        <Modal.Header
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "red",
          }}
        >
          <Modal.Title>
            <b>{pid?.title}</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table>
            <tr>
              <th>Description:</th>
              <td>{pid?.description}</td>
            </tr>
            <tr>
              <th>Brand</th>
              <td>{pid?.brand}</td>
            </tr>
            <tr>
              <th>Catogery</th>
              <td>{pid?.category}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{pid?.price}</td>
            </tr>
            <tr>
              <th>Stock</th>
              <td>{pid?.stock}</td>
            </tr>
          </Table>
          {pid && pid.images && (
            <div className="text-center">
              <img
                src={pid?.images[0]}
                style={{
                  width: "300px",
                  height: "150px",
                  borderRadius: "10pzx",
                }}
              />
            </div>
          )}
        </Modal.Body>
        <Button variant="link" onClick={handleClose}>
          <FaWindowClose style={{ fontSize: "20px", color: "gray" }} />
        </Button>
      </Modal>
      <div style={{ paddingTop: "25px" }}>
        <Table border={2}>
          <thead>
            <tr style={{ backgroundColor: "lightblue", width: "5px" }}>
              <th>Title</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Rating</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Image</th>
              <th>Updates</th>
            </tr>
          </thead>
          {product.map((pro) => (
            <tr key={pro.id} style={{ backgroundColor: "lightgray" }}>
              <td>{pro.title}</td>
              <td>{pro.brand}</td>
              <td>{pro.category}</td>
              <td>{pro.rating}</td>
              <td>{pro.price}</td>
              <td>{pro.stock}</td>
              <td>
                <img
                  src={pro.images[0]}
                  style={{ width: "100px", height: "50px" }}
                />
              </td>
              <td width="180px">
                <Button
                  onClick={() => get_pid(pro.pro)}
                  variant="link"
                  style={{ margin: "10px" }}
                >
                  <EyeOutlined />
                </Button>
                <Button variant="link" style={{ margin: "10px" }}>
                  <EditOutlined />
                </Button>
                <Button variant="link" style={{ margin: "10px" }}>
                  {" "}
                  <DeleteOutlined />
                </Button>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
};
export default Home;
