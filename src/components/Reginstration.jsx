import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { auth, db } from "./Firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const Reginstration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
        });
        // console.log("User added to Firestore.");
      }
      console.log("User registered successfully!!");
      toast.success("User Registrered Successfully!!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.success(error.message, {
        position: "bottom-center",
      });
    }
   
  };
  return (
    <div className="RegistrationMain" Style={{ backgroundColor: "lightcyan" }}>
      <div style={{ paddingLeft: "500px", paddingTop: "10px" }}>
        <Form onSubmit={handleRegister}>
          <h3 style={{ paddingTop: "10px" }}>Registration</h3>
          <div className="mb-3">
            <label>First name</label>
            <br />
            <input
              type="text"
              className="form_control"
              placeholder="Enter your first name"
              onChange={(e) => setFname(e.target.value)}
              style={{ width: "600px", height: "38px", borderRadius: "5px" }}
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <br />
            <input
              type="text"
              className="form_control"
              placeholder="Enter your last name"
              onChange={(e) => setLname(e.target.value)}
              style={{ width: "600px", height: "38px", borderRadius: "5px" }}
            />
          </div>

          <div className="mb-3">
            <label style={{ paddingBottom: "10px" }}>Username/Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your user name / email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "600px" }}
            />
          </div>
          <div className="mb-3">
            <label style={{ paddingBottom: "10px" }}>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "600px" }}
            />
          </div>

          <div className="buttonDiv" style={{ paddingLeft: "150px" }}>
            <Button type="submit" className="sub_button">
              {" "}
              Submit
            </Button>
          </div>
          <div>
            <text>
              If you are already registered please{" "}
              <a href="/Login">Login</a>
            </text>
          </div>
        </Form>
      </div>

      {/* <div className="Registration"style={{paddingBottom:"50px",paddingLeft:"100px"}} >
            <h2 style={{textAlign:"center"}}>Registration </h2>
            <Form style={{backgroundColor:"lightcyan",paddingRight:"50px",paddingLeft:"50px",paddingTop:"50px",paddingBottom:"50px"}}>
                <Form.Group style={{}}>
                    <Form.Label>Name  </Form.Label>
                    <Form.Control type="name" placeholder="Enter your name" className="input-border"style={{width:"400px"}}/>
                </Form.Group>
                <Form.Group>
                <Form.Label>Email  <Form.Control type="email" placeholder="Enter your email" className="input-border"style={{width:"400px"}}/></Form.Label>
                </Form.Group>
                <Form.Group>
                <Form.Label>Mobile Number  <Form.Control type="text"placeholder="Enter your mobile number" className="input-border"style={{width:"400px"}}/></Form.Label>
                </Form.Group>
                <Form.Group>
                <Form.Label>Password<Form.Control type="password" placeholder="Enter your password" className="input-border"style={{width:"400px"}}/></Form.Label>
                </Form.Group>
                <Form.Group>
                <Form.Label>Cornform Password<Form.Control type="password" placeholder="Enter your cornform password" className="input-border"style={{width:"400px"}}/></Form.Label>
                </Form.Group>
                <div style={{alignItems:"center",paddingTop:"20px"}}>
                    <Button>Submit</Button>
                </div>
            </Form>
        </div> */}
    </div>
  );
};

export default Reginstration;
