import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom'
import Header from "../../layouts/header";

function EmployeeEdit() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [DOB, setDOB] = useState('');
    const [phone, setPhone] = useState('');
    const [id, setId] = useState('');

    let history = useNavigate();

    var index = Employees.map(function (e) {
        return e.id
    }).indexOf(id);


    const handleSubmit = (e) => {
        e.preventDefault();

        let a = Employees[index];
        a.Name = name;
        a.Email = email;
        a.DOB = DOB;
        a.Phone = phone;

        history("/employeeDisplay");
    }

    useEffect(() => {
        setName(localStorage.getItem('Name'))
        setEmail(localStorage.getItem('Email'))
        setDOB(localStorage.getItem('DOB'))
        setPhone(localStorage.getItem('Phone'))
        setId(localStorage.getItem('Id'))

    }, [])


    return (
        <div>
            <Header />
            <div style={{ width: '70%', marginLeft: '20rem' }}>
                <b style={{ fontSize: '23px' , marginLeft: '12rem' }}> Edit Employee</b>

                <Form className="d-grid gap-2" style={{ margin: "8rem" }}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Control type="text" placeholder="Enter name" value={name} required onChange={(e) => setName(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <br></br>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Control type="text" placeholder="Enter leavetype" value={email} required onChange={(e) => setEmail(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <br></br>
                    <Form.Group className="mb-3" controlId="formDOB">
                        <Form.Control type="date" placeholder="From" value={DOB} required onChange={(e) => setDOB(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <br></br>
                    <Form.Group className="mb-3" controlId="formPhone">
                        <Form.Control type="text" placeholder="To" value={phone} required onChange={(e) => setPhone(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
                </Form>

            </div>
        </div>
    )
}

export default EmployeeEdit