import React, { useState, useEffect, useRef } from "react";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Card } from 'primereact/card';
import { useNavigate, } from "react-router-dom";

function Login() {
    const [checked, setChecked] = useState();
    let navigate = useNavigate();


    const handleSignUp = () => {
        navigate('/signUp')
    }
    return (
        <div>
            <div className="flex align-items-center justify-content-center ">
                <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6 mt-10">
                    <div className="text-center text-900 text-3xl font-medium mb-5">Login as an Existing user!</div>
                    <div>
                        <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                        <InputText id="email" type="text" className="w-full mb-3" />

                        <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
                        <InputText id="password" type="password" className="w-full mb-3" />

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
                        <Button label="Log In" icon="pi pi-user" className="w-full" />
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Login