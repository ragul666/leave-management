import "./App.css";
import React from "react";
import Login from "./views/login";
import Signup from "./views/signup";
import EmployeeDisplay from "./views/Employee/employeeDisplay";
import EmployeeDetails from "./views/Employee/employeeDetails";
import EmployeeEdit from "./views/Employee/employeeEdit";
import CreateEmployee from "./views/Employee/createEmployee";
import CreateGodown from "./views/Godown/createGodown";
import GodownDetails from "./views/Godown/godownDetails";
import VendorList from "./views/Vendor/vendorList";
import Dashboard from "./views/dashboard";
import CreateUser from "./views/User/createUser";
import userDetails from "./views/User/userDetails";

import { Routes, Route } from "react-router-dom";
import EditEmployee from "./views/Employee/editEmployee";
import EditGodown from "./views/Godown/editGodown";
import PrivateRoute from "./PrivateRoute";
import CreateAdmin from "./views/User/createAdmin";
import ViewMedicines from "./views/Godown/viewMedicines";
import AddGodownMedicine from "./views/Godown/addGodownMedicine";


import PrimeReact from 'primereact/api';
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
export default function App() {
  return (
    <Routes>
      (Login&SignUp)
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      (Dashboard)
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      /{">"}
      (Employee)
      <Route
        path="/createEmployee"
        element={
          <PrivateRoute>
            <CreateEmployee />
          </PrivateRoute>
        }
      />
      /{">"}
      <Route
        path="/employeeDetails"
        element={
          <PrivateRoute>
            <EmployeeDetails />
          </PrivateRoute>
        }
      />
      /{">"}
      <Route
        path="/employeeDisplay"
        element={
          <PrivateRoute>
            <EmployeeDisplay />
          </PrivateRoute>
        }
      />
      /{">"}
      <Route
        path="/employeeEdit"
        element={
          <PrivateRoute>
            <EmployeeEdit />
          </PrivateRoute>
        }
      />
      /{">"}
      (Godown)
      <Route
        path="/createGodown"
        element={
          <PrivateRoute>
            <CreateGodown />
          </PrivateRoute>
        }
      />
      /{">"}
      <Route
        path="/godownDetails"
        element={
          <PrivateRoute>
            <GodownDetails />
          </PrivateRoute>
        }
      />
      /{">"}
      <Route
        path="/editGodown"
        element={
          <PrivateRoute>
            <EditGodown />
          </PrivateRoute>
        }
      />
      /{">"}
      <Route
        path="/viewMedicines"
        element={
          <PrivateRoute>
            <ViewMedicines />
          </PrivateRoute>
        }
      />
      /{">"}
      <Route
        path="/addMedicine"
        element={
          <PrivateRoute>
            <AddGodownMedicine />
          </PrivateRoute>
        }
      />
      /{">"}
      (User)
      <Route
        path="/createUser"
        element={
          <PrivateRoute>
            <CreateUser />
          </PrivateRoute>
        }
      />
      (Admin)
      <Route
        path="/createAdmin"
        element={
          <PrivateRoute>
            <CreateAdmin />
          </PrivateRoute>
        }
      />
      /{">"}
      <Route
        path="/userDetails"
        element={
          <PrivateRoute>
            <userDetails />
          </PrivateRoute>
        }
      />
      /{">"}





      (Customer)

      /{">"}
      (vendor)
      <Route
        path="/vendorList"
        element={
          <PrivateRoute>
            <VendorList />
          </PrivateRoute>
        }
      />
      /{">"}

    </Routes>
  );
}
