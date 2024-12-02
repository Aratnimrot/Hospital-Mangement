import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import Sidebar from "./components/Sidebar";
import UserLogin from "./User/UserLogin";
import AdminLogin from "./Admin/AdminLogin";
import UserRegister from "./User/UserRegister";
import UserDashboard from "./User/UserDashboard";
import AdminDashboard from "./Admin/AdminDashboard";
import Dashboard from "./components/Dashboard";
import ViewDoctorsDetails from "./User/ViewDoctorsDetails";
import ViewSurgicalInformation from "./User/ViewSurgicalInformation";
import ManageDoctorsDetails from "./Admin/ManageDoctorsDetails";

import ManagePatientsDetails from "./Admin/ManagePatientsDetails";
import PostOperationSchedule from "./Admin/PostOperationSchedule";
import CustomNavbar from "./CustomNavbar";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <CustomNavbar />
      <Sidebar />
      <div className="d-flex">
        <div className="content" style={{ marginLeft: "250px", width: "100%" }}>
          <Container fluid style={{ marginTop: "80px" }}>
            <Routes>
              <Route path="/" element={<Home />} />{" "}
              <Route path="/admin/admin-login" element={<AdminLogin />} />{" "}
              <Route path="/user/user-login" element={<UserLogin />} />{" "}
              <Route path="/user/register" element={<UserRegister />} />{" "}
              {/* Protected route for Dashboard */}{" "}
              <Route
                path="/user/doctors-details"
                element={<ViewDoctorsDetails />}
              />{" "}
              <Route path="/dashboard" element={<Dashboard />} />{" "}
              <Route path="/user-dashboard" element={<UserDashboard />} />{" "}
              <Route path="/admin-dashboard" element={<AdminDashboard />} />{" "}
              <Route
                path="/user/surgical-information"
                element={<ViewSurgicalInformation />}
              />{" "}
              <Route
                path="/admin/post-operation-schedule"
                element={<PostOperationSchedule />}
              />{" "}
              <Route
                path="/admin/manage-doctors"
                element={<ManageDoctorsDetails />}
              />{" "}
              <Route
                path="/admin/manage-patients"
                element={<ManagePatientsDetails />}
              />{" "}
            </Routes>{" "}
          </Container>{" "}
        </div>{" "}
      </div>{" "}
    </Router>
  );
};

export default App;
