import "./MainPage.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

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

export const MainPage = () => {
  const [form, setForm] = useState({});

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  
  const registerUser = async (e) => {
    const response = await fetch('http://localhost:5000/signup', {
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
  const linkstyle={
    color:'#cca64b',
    fontSize:'10px',
   
    }
  return (
    <div className="main-container">
      <div className="second-container">
        <div className="third-container-top">
          <span>
            <StyledLink to="/login">Login</StyledLink>{""}
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
              <h4>Join Practo</h4>
              <p>
                Are you a doctor{" "}
                <StyledLink to="/notsignup" style ={linkstyle}>Register here</StyledLink>
              </p>
            </div>
            <hr className="Line" />
            <div id="inp">
              Full Name{" "}
              <span style={{ fontSize: "10px", color: "red" }}>*</span>
            </div>
            <input
              type="text"
              name="fullname"
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
              name="password"
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
            <div className="button" onClick={registerUser}>
              Register
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
