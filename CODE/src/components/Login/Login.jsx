import "./Login.css";
import {Link} from "react-router-dom";
import styled from 'styled-components';
import { useState } from "react";
import axios from "axios";

const StyledLink = styled(Link)`
color: Black;
text-decoration: none;

&:hover{
    color:black;
    text-decoration:underline;
}

&:focus{
    color:#13BEF0;
    padding-bottom:0.5rem;
    border-bottom: 3px solid #13BEF0;
    text-decoration:none;
}
`;

const StyledLinkLogin = styled(Link)`
color: Black;
text-decoration: none;

&{
    color:#13BEF0;
    padding-bottom:0.5rem;
    border-bottom: 3px solid #13BEF0;
    text-decoration:none;
}
`; 

export const LoginPage = () => {
    const [loginForm, setLoginForm] = useState({});
  
    const handleLoginForm = (e) => {
      const { name, value } = e.target;
      setLoginForm({
        ...loginForm,
        [name]: value,
      });
    };
  
        const loginUser = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            body: JSON.stringify(loginForm),
            headers: {
            'Content-Type': 'application/json'
            }
        });
  
      const data = await response.text();
      console.log(data);
      alert("Login Succesfull")
      
    }
  
  

    return <div className="main-contain">
     <div className="second-contain">

         <div className="third-contain-top">
         <span><StyledLinkLogin to="/login">Login</StyledLinkLogin> </span>
         <span><StyledLink to="/signup">Register</StyledLink></span>
         </div>
         <hr className="upLine"/>
         <div id="third-contain-body">
             <div id="imgOnLeft"><img src="https://accounts.practo.com/static/images/illustration.png" width="400px"/></div>
             <div id="formOnRightLogin">
                 
             <div className="Heading">
              <h4>Mobile Number / Email ID</h4>
            </div>
            <hr className="Line" />
            <div id="inp">
              Email 
              {/* <span style={{ fontSize: "10px", color: "red" }}>*</span> */}
            </div>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={handleLoginForm}
            />
            <div id="inp">
              Password{" "}
              {/* <span style={{ fontSize: "10px", color: "red" }}>*</span> */}
            </div>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={handleLoginForm}
            />
         
            <br/>
            <br/>
            <div className="checkLogin">
                <input type="checkbox" /><label>Remember me for 30 days</label>
            </div>
            
            <div className="checkLogin">
                <input type="checkbox" /><label>Login with OTP instead of password</label>
            </div>
            <br/>            
            <div className="button" onClick={loginUser}>
             Login
            </div>

             </div>
         </div>

     </div>
    </div>
}