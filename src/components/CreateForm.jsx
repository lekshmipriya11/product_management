import React from 'react'
import { Form } from 'react-bootstrap'

const CreateForm = () => {
    
  return (
    <div>
        <Form>
            <h2>Create New Products</h2>
            <div className="mb-3">
            <label>Title</label>
            <br />
            <input
              type="text"
              className="form_control"
              placeholder="Enter Product Title"
              style={{ width: "600px", height: "38px", borderRadius: "5px" }}
            />
          </div>
          <div className="mb-3">
            <label>Description</label>
            <br />
            <input
              type="text"
              className="form_control"
              placeholder="Enter Product Discription"
              style={{ width: "600px", height: "38px", borderRadius: "5px" }}
            />
          </div>
          <div className="mb-3">
            <label>Brand</label>
            <br />
            <input
              type="text"
              className="form_control"
              placeholder="Enter Product Brand"
              style={{ width: "600px", height: "38px", borderRadius: "5px" }}
            />
          </div>
          <div className="mb-3">
            <label>Category</label>
            <br />
            <input
              type="text"
              className="form_control"
              placeholder="Enter Product Category"
              style={{ width: "600px", height: "38px", borderRadius: "5px" }}
            />
          </div>
          <div className="mb-3">
            <label>Rating</label>
            <br />
            <input
              type="text"
              className="form_control"
              placeholder="Enter Product Rating"
              style={{ width: "600px", height: "38px", borderRadius: "5px" }}
            />
          </div>
          <div className="mb-3">
            <label>Price</label>
            <br />
            <input
              type="text"
              className="form_control"
              placeholder="Enter Product Price"
              style={{ width: "600px", height: "38px", borderRadius: "5px" }}
            />
          </div>
          <div className="mb-3">
            <label>Stock</label>
            <br />
            <input
              type="text"
              className="form_control"
              placeholder="Enter Product Stock"
              style={{ width: "600px", height: "38px", borderRadius: "5px" }}
            />
          </div>
          {/* <div className="mb-3">
            <label>Image</label>
            <br />
            <input
              type="text"
              className="form_control"
              placeholder="Enter Product Title"
              style={{ width: "600px", height: "38px", borderRadius: "5px" }}
            />
          </div> */}
        </Form>
    </div>
  )
}

export default CreateForm