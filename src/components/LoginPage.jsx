import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleSubmit= async(e)=>{
  e.preventDefault();
  try {
    await signInWithEmailAndPassword(auth,email,password);
    console.log("User logged in Successfully");
    
  } catch (error) {
    
  }
};

  return (
    <div className="Login" style={{backgroundColor:"lightgray"}}>
      <div>
        <Form style={{paddingTop:"100px"}} onSubmit={handleSubmit}>
          <h3 style={{paddingLeft:"100px"}}>Login Here</h3>
          <div className="mb-3">
            <label style={{paddingBottom:"10px"}}>Username/Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your user name / email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{width:"400px"}}
            />
          </div>
          <div className="mb-3">
            <label style={{paddingBottom:"10px"}}>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{width:"400px"}}
            />
          </div>
          <div className="buttonDiv" style={{paddingLeft:"150px"}}>
            <Button type="submit" className="sub_button"> Submit</Button>
            <text> New Registration <a href="/LoginPage.jsx">Register Here</a></text>
          </div>
        </Form>
      </div>
      {/* //   <div className="Login_main"style={{width:"500px",alignItems:"center"}}>
    //     <Form className="Login_form">
    //        <h2 style={{textAlign:"center"}}>Login Here</h2>
    //       <Form.Group className="mb-3" controlId="formBasicEmail" style={{margin:"20px"}}> 
    //         <Form.Label>Email Address</Form.Label>
    //         <Form.Control type="email" placeholder="Enter your email Id" className="input-border"style={{width:"500px"}}/>
    //         <Form.Text className="text-muted"> We'll never share your email with anyone else.</Form.Text>  
    //       </Form.Group>
    //       <Form.Group className="mb-3" controlId="formBasicPassword" style={{margin:"20px"}}>
    //         <Form.Label>Password</Form.Label>
    //         <Form.Control type="password" placeholder="Password" className="input-border"style={{width:"500px"}}/>
    //       </Form.Group>
    //       <Form.Group className="mb-3" controlId="formBasicCheckBox" style={{margin:"20px"}}>
    //         <Form.Check type="checkbox" label="Check me out"/>
    //       </Form.Group>
    //       <div className="Button" style={{paddingLeft:"150px" ,paddingBottom:"20px"}}>
    //       <Button variant="Primary" type="Submit" style={{backgroundColor:"lightskyblue"}} >Submit</Button> <b/>
    //       <Button variant='Primary' type="Reg" style={{backgroundColor:"lightskyblue"}}>New Registration</Button>
    //       </div>
         
    //     </Form>
    //   </div> */}
    </div>
  );
};

export default LoginPage;
