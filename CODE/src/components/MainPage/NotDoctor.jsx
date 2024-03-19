import "./MainPage.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover {
    color: black;
    text-decoration: underline;
  }

  &:focus {
    color: #13bef0;
    padding-bottom: 0.5rem;
    border-bottom: 3px solid #13bef0;
    text-decoration: none;
  }
`;

const StyledLinkRegister = styled(Link)`
  color: #13bef0;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #13bef0;
  text-decoration: none;
`;


export const NotDoctor = () => {
 
const[form,setForm]=useState({});

const handleForm=(e)=>{
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  })
}
//p r 
//full name:p
//full name :pr
const linkstyle={
  color:'blue',
  fontSize:'10px',
  
  }
const notDoctor = async (e) => {

  const response = await fetch('http://localhost:5000/notsignup', {
    method: 'POST',
    body: JSON.stringify(form),
    headers: {
      'Content-Type': 'application/json'
    }

  });
  const data = await response.text();
  console.log(data);
  alert("Request send successful")
}

  return (
    <div className="main-container">
      <div className="second-container">
        <div className="third-container-top">
          <span>
            <StyledLink to="/login">Login</StyledLink>{" "}
          </span>
          <span>
            <StyledLinkRegister to="/signup">Register</StyledLinkRegister>
          </span>
        </div>
        <hr className="upLine" />
        <div id="third-container-body">
          <div id="imgOnLeft">
            <img src="https://accounts.practo.com/static/images/illustration.png" />
          </div>  
          <div id="formOnRight">
            <div className="Heading">
              <h4>Join 125,000+ doctors  </h4>
                         
              <Link to="/signup"  style={linkstyle} >Not a doctor?</Link>
             
          
          
              
            </div>
            <hr className="Line" />
            <div id="inp">
              Full Name{" "}
              <span style={{ fontSize: "10px", color: "red" }}>*</span>
            </div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              onChange={handleForm}
            />
            <div id="inp">
              Email <span style={{ fontSize: "10px", color: "red" }}>*</span>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={handleForm}
            />
            <div id="inp">
              Mobile Number{" "}
              <span style={{ fontSize: "10px", color: "red" }}>*</span>
            </div>
            <input
              type="number"
              name="phone"
              placeholder="Enter 10 digit mobile number"
              onChange={handleForm}
            />
            <div id="inp">Create Password</div>
            <input
              type="password"
              name='password'
              placeholder="Create password"
              onChange={handleForm}
            />
            <br />
            <div className="check">
              <input type="checkbox" />
              <label>
                Receive relevant offers and promotional communication from
                Practo
              </label>
            </div>
            <p className="smallp">
              By signing up, I agree to <a className="smalla">terms</a>
            </p>
            <div className="button" onClick={notDoctor}>
              Register
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
