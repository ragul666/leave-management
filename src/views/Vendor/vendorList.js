import React, { Fragment } from 'react';
import { Button, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Leaves from './../Employee/Leaves';
import { Link, useNavigate } from 'react-router-dom';
import Header from './../../layouts/header'

function VendorList() {
  let history = useNavigate();
  const role = localStorage.getItem("role");

  const handleEdit = (item) => {
    // let status = "Approved"
    // localStorage.setItem('Name', name);
    // localStorage.setItem('Leavetype', leavetype);
    // localStorage.setItem('From', from);
    // localStorage.setItem('To', to);
    // localStorage.setItem('Id', id);
    // localStorage.setItem('Status', status);
    item.Status = "Approved"
    console.log("one item", item)


  }

  const handleDelete = (item) => {
    // let status = "Rejected"
    // item.status = "Rejected";
    // localStorage.setItem('Status', status);
    // var index = Leaves.map(function (e) {
    //   if (e.id == item.id) {
    //     item.status = "Rejected"
    //   }
    // })
    item.Status = "Rejected"
    console.log("Reject item", item)

    history('/vendorList')
  }
  return (
    <div style={{ marginLeft: '30rem' }}>
      <Header />
      <Fragment>
        <div style={{ width: '70%' }}>
          <b style={{ fontSize: '23px' }}>  Pending Leave</b>

          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>
                  Name
                </th>
                <th>
                  Leavetype
                </th>
                <th>
                  From
                </th>
                <th>
                  To
                </th>
                <th>
                  Status
                </th>
                {(role === "superuser" &&
                  <th>
                    Actions
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {
                Leaves && Leaves.length > 0
                  ?
                  Leaves.map((item) => {
                    return (
                      <tr>
                        <td>
                          {item.Name}
                        </td>
                        <td>
                          {item.Leavetype}
                        </td>
                        <td>
                          {item.From}
                        </td>
                        <td>
                          {item.To}
                        </td>
                        <td>
                          {item.Status}
                        </td>
                        {(role === "superuser") && (
                          < td >
                            <Link to={'/vendorList'}>
                              <Button style={{ backgroundColor: 'green', padding: '4px' }} onClick={() => handleEdit(item)}>APPROVE</Button>
                            </Link>

                            <Button style={{ backgroundColor: 'red', padding: '4px', marginLeft: '4px' }} onClick={() => handleDelete(item)}>REJECT</Button>
                          </td>
                        )
                        }
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

        </div>
      </Fragment>
    </div>
  )
}

export default VendorList;