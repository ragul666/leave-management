import React, { useState, useEffect, useRef } from "react";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Card } from 'primereact/card';
import { useNavigate, } from "react-router-dom";
import { useFormik } from "formik";
import { classNames } from 'primereact/utils';
import axios from "axios";
import Box from "@mui/material/Box";


function Login() {
  const baseURL = "http://localhost:3005/api/v1/user/login";
  const [postData, setPostData] = React.useState();
  const [error, setError] = React.useState(null);
  let navigate = useNavigate();
  const formRef = React.useRef();
  const handleSignUp = () => {
    navigate("/signUp");
  };
  const handleSubmit = (event) => {
    console.log("current target",event.currentTarget)
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let email = data.get("email");
    let password = data.get("password");
    const data1 = { email, password };
    console.log(password);
    axios
      .post(baseURL, data1)
      .then((response) => {
        let postData = response.data;
        console.log(response);
        let { name, email, authToken, role, shopId, godownId, userId } =
          response.data.data.user;

        console.log(role);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("authToken", authToken);
        localStorage.setItem("role", role);
        localStorage.setItem("shopId", shopId);
        localStorage.setItem("godownId", godownId);
        localStorage.setItem("userId", userId);

        navigate("/dashboard");

        // if (response.data.code !== 200) {
        //   setError(response.data.errorMessage);
        //   navigate("/");
        // }
      })
      .catch((error) => {
        setError(error);
        navigate("/");
      });

    // console.log(postData);
  };
  const handleRedirect = () => {
    navigate("/signUp");
  };
  return (
    <div>
      <div className="flex align-items-center justify-content-center pt-8 ">
        <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6 mt-10">
          <div className="text-center text-900 text-3xl font-medium mb-5">Login as an Existing user!</div>
          <div>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 0.5 }}>
              <div className="field col-12 md:col-12">
                <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                <InputText style={{width:'100%'}} id="email" name="email" type="email" />
              </div>
              <div className="field col-12 md:col-12">
                <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
                <InputText id="password"style={{width:'100%'}} name="password" type="password" />

              </div>

              <div className="text-center mb-5">
                <span className="text-600 font-medium line-height-3">Don't have an account?</span>
                <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer" onClick={handleSignUp}>Create today!</a>
              </div>
              <Button type="submit" label="Log In" icon="pi pi-user" className="w-full" />
            </Box>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Login