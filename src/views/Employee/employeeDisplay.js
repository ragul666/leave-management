import React, { Fragment } from 'react';
import { Button, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import { Link, useNavigate } from 'react-router-dom';
import Header from './../../layouts/header'

function EmployeeDisplay() {
    let history = useNavigate();

    const handleEdit = (id, Name, Email, DOB, Phone,) => {
        localStorage.setItem('Name', Name);
        localStorage.setItem('Email', Email);
        localStorage.setItem('DOB', DOB);
        localStorage.setItem('Phone', Phone);
        localStorage.setItem('Id', id);
    }

    const handleDelete = (id) => {
        var index = Employees.map(function (e) {
            return e.id
        }).indexOf(id);

        Employees.splice(index, 1);

        history('/employeeDisplay')
    }
    return (
        <div style={{ marginLeft: '30rem' }}>

            <Header />
            <Fragment>
                <div style={{ width: '70%' }}>
                    <b style={{ fontSize: '23px' }}>  Employees</b>

                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Email
                                </th>
                                <th>
                                    DOB
                                </th>
                                <th>
                                    Phone Number
                                </th>
                                <th>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Employees && Employees.length > 0
                                    ?
                                    Employees.map((item) => {
                                        return (
                                            <tr>
                                                <td>
                                                    {item.Name}
                                                </td>
                                                <td>
                                                    {item.Email}
                                                </td>
                                                <td>
                                                    {item.DOB}
                                                </td>
                                                <td>
                                                    {item.Phone}
                                                </td>
                                                <td>
                                                    <Link to={'/employeeEdit'}>
                                                        <Button onClick={() => handleEdit(item.id, item.Name, item.Email, item.DOB, item.Phone)}>EDIT</Button>
                                                    </Link>
                                                    &nbsp;
                                                    <Button onClick={() => handleDelete(item.id)}>DELETE</Button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    :
                                    "No data available"
                            }
                        </tbody>
                    </Table>
                    <br>
                    </br>
                    <Link className='d-grid gap-2' to="/employeeDetails">
                        <Button size="lg">Create</Button>
                    </Link>
                </div>
            </Fragment>
        </div>
    )
}

export default EmployeeDisplay;