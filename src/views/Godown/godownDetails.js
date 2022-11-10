import Header from "../../layouts/header";
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Leaves from '../Employee/Leaves';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom'

function GodownDetails() {
  let userName = localStorage.getItem("name")
  const [name, setName] = useState('');
  const [leavetype, setLeavetype] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [status, setStatus] = useState('Pending');

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = name,
      b = leavetype,
      c = from,
      d = to;
    e = status
    Leaves.push({ id: uniqueId, Name: a, Leavetype: b, From: c, To: d, Status: e });
    history("/vendorList");
  }


  return (
    <div style={{ marginLeft: '30rem' }}>

      <Header />
      <div style={{ width: '70%' }}>
        <b style={{ fontSize: '23px' }}>  Apply Leave</b>

        <Form className="d-grid gap-2" style={{ margin: "3rem" }}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Control type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}
              required>
            </Form.Control>
          </Form.Group>
          <br></br>
          <Form.Group className="mb-3" controlId="formLeavetype">
            <Form.Control type="text" placeholder="Enter leavetype" required onChange={(e) => setLeavetype(e.target.value)}>
            </Form.Control>
          </Form.Group>
          <br></br>
          <Form.Group className="mb-3" controlId="formFrom">
            <Form.Control type="date" placeholder="From" required onChange={(e) => setFrom(e.target.value)}>
            </Form.Control>
          </Form.Group>
          <br></br>
          <Form.Group className="mb-3" controlId="formTo">
            <Form.Control type="date" placeholder="To" required onChange={(e) => setTo(e.target.value)}>
            </Form.Control>
          </Form.Group>
          <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  )
}

export default GodownDetails