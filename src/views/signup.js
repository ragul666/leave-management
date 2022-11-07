import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


import {
  useLocation
} from "react-router-dom";

const theme = createTheme();

export default function Signup({ signupData }) {
  let location = useLocation();
  let navigate = useNavigate();

  const handleSignup = (e) => {
    navigate("/");
  };
  const [error, setError] = React.useState(null);
  const [success, setSucess] = React.useState(null);
  const handleSubmit = (event) => {
    console.log(event.currentTarget)
    event.preventDefault();
    const baseURL = "http://localhost:3005/api/v1/user/signUp";
    const data = new FormData(event.currentTarget);
    let name = data.get("name");
    let email = data.get("email");
    let phoneNumber = data.get("phone");
    let password = data.get("password");
    let hobby = data.get("hobby");
    let role = data.get("role");
    let token;
  

    const employeeCreateUserData =  {
      name,
      phoneNumber,
      email,
      hobby,
      password,
    };
    console.log("signup data",employeeCreateUserData)
    if (signupData) {
      signupData.shopId ? employeeCreateUserData["shopId"] = signupData.shopId : employeeCreateUserData["godownId"] = signupData.godownId
    }
    axios
      .post(signupData ? `${baseURL}?key=emp&token=${token}` : baseURL, employeeCreateUserData)
      .then((response) => {
        if (response.data.code === 400) {
          setError(response.data.errorMessage);
          setTimeout(() => {
            setError(null);
          }, 5000);
        } else {
          setSucess("Signup complete, Redirecting to login page!");
          setTimeout(() => {
            setError(null);
            handleSignup();
          }, 3000);
        }
      })
      .catch((error) => setError(error));

  };

  return (
    <div>
      <div className="flex align-items-center justify-content-center pt-8 ">
        <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6 mt-10">
          <div className="text-center text-900 text-3xl font-medium mb-5">SignUp as a  user!</div>
          <div>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 0.5 }}>
              <div className="field col-12 md:col-12">
                <label htmlFor="name" className="block text-900 font-medium mb-2">Name</label>
                <InputText style={{ width: '100%' }} id="name" name="name" type="text" />
              </div>
              <div className="field col-12 md:col-12">
                <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                <InputText style={{ width: '100%' }} id="email" name="email" type="email" />
              </div>
              <div className="field col-12 md:col-12">
                <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
                <InputText id="password" style={{ width: '100%' }} name="password" type="password" />
              </div>
              <div className="field col-12 md:col-12">
                <label htmlFor="name" className="block text-900 font-medium mb-2">Hobby</label>
                <InputText style={{ width: '100%' }} id="hobby" name="hobby" type="text" />
              </div>
              <div className="field col-12 md:col-12">
                <label htmlFor="phone" className="block text-900 font-medium mb-2">Phone</label>
                <InputText style={{ width: '100%' }} id="phone" name="phone" type="text" />
              </div>
              <div className="text-center mb-5">
                <span className="text-600 font-medium line-height-3">Already have an account?</span>
                <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer" onClick={handleSignup}>Login here!</a>
              </div>
              <Button type="submit" label="Log In" icon="pi pi-user" className="w-full" />
            </Box>
          </div>
        </div>
      </div>



    </div>
  );
}
