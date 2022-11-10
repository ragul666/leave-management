import Header from "../../layouts/header";
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom'

function EmployeeDetails() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [DOB, setDOB] = useState('');
    const [phone, setPhone] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0, 8);

        let a = name,
            b = email,
            c = DOB,
            d = phone;

        Employees.push({ id: uniqueId, Name: a, Email: b, DOB: c, Phone: d });
        history("/employeeDisplay");
    }


    return (
        <div style={{ marginLeft: '30rem' }}>
            <Header />
            <div style={{ width: '70%' }}>
            <b style={{fontSize:'23px'}}> Create Employee</b>
                <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
                   
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Control type="text" placeholder="Enter name" required onChange={(e) => setName(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <br></br>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Control type="text" placeholder="Enter Email" required onChange={(e) => setEmail(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <br></br>
                    <Form.Group className="mb-3" controlId="formDOB">
                        <Form.Control type="date" placeholder="DOB" required onChange={(e) => setDOB(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <br></br>
                    <Form.Group className="mb-3" controlId="formPhone">
                        <Form.Control type="text" placeholder="Phone" required onChange={(e) => setPhone(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
                </Form>
            </div>
        </div>
    )
}

export default EmployeeDetails