import React, { useState, useEffect, useRef } from "react";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Card } from 'primereact/card';
import { useNavigate, } from "react-router-dom";
import { useFormik } from "formik";
import { classNames } from 'primereact/utils';

function Login() {
    const [checked, setChecked] = useState();
    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validate: (data) => {
            let errors = {};
            if (data.email === "") {
                errors.email = " User Email is required.";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
                errors.email = 'Invalid email address';
            }
            if (data.password === "") {
                errors.password = " User Password is required.";
            }
            return errors;
        },

        onSubmit: (data) => {
            console.log("the data is ", data)
        },
    });

    const isFormFieldValid = (name) =>
        !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return (
            isFormFieldValid(name) && (
                <small className="p-error">{formik.errors[name]}</small>
            )
        );
    };

    const handleSignUp = () => {
        navigate('/signUp')
    }
    return (
        <div>
            <div className="flex align-items-center justify-content-center pt-8 ">
                <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6 mt-10">
                    <div className="text-center text-900 text-3xl font-medium mb-5">Login as an Existing user!</div>
                    <div>
                        <form onSubmit={formik.handleSubmit} className="p-fluid">
                            <div className="field col-12 md:col-12">
                                <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                                <InputText id="email" name="email" value={formik.values.email} onChange={formik.handleChange} type="text" className={classNames({ "p-invalid": isFormFieldValid("email"), })} />
                                {getFormErrorMessage("email")}
                            </div>
                            <div className="field col-12 md:col-12">
                                <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
                                <InputText id="password" name="password" value={formik.values.password} onChange={formik.handleChange} type="password" className={classNames({ "p-invalid": isFormFieldValid("password"), })} />
                                {getFormErrorMessage("password")}
                            </div>
                            <div className="flex align-items-center justify-content-between mb-6">
                                <div className="flex align-items-center">
                                    <Checkbox id="rememberme" onChange={e => setChecked(e.checked)} checked={checked} className="mr-2" />
                                    <label htmlFor="rememberme">Remember me</label>
                                </div>
                                <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
                            </div>
                            <div className="text-center mb-5">
                                <span className="text-600 font-medium line-height-3">Don't have an account?</span>
                                <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer" onClick={handleSignUp}>Create today!</a>
                            </div>
                            <Button type="submit" label="Log In" icon="pi pi-user" className="w-full" />
                        </form>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Login