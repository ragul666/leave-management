import React, { useState, useEffect, useRef } from "react";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { useNavigate, } from "react-router-dom";

function SignUp() {
    const [checked, setChecked] = useState();
    let navigate = useNavigate();


    const handleLogin = () => {
        navigate('/')
    }


    return (
        <div>
            <div className="flex align-items-center justify-content-center pt-8 ">
                <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                    <div className="text-center mb-5">
                        <div className="text-900 text-3xl font-medium mb-3">Sign up as a new User!</div>
                        <span className="text-600 font-medium line-height-3">Already have an account?</span>
                        <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer" onClick={handleLogin}>Login Here!</a>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                        <InputText id="email" type="text" className="w-full mb-3" />

                        <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
                        <InputText id="password" type="password" className="w-full mb-3" />


                        <Button label="Sign Up" icon="pi pi-user" className="w-full" />
                    </div>
                </div>
            </div>



        </div>
    )
}

export default SignUp