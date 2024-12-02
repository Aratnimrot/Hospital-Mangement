// src/components/Dashboard.js

import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const AdminDashboard = () => {
  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Admin Dashboard</h2>
      <Row>
        <Col md={4}>
          <Card className="shadow-sm p-3">
            <h5>Manage Doctors</h5>
            <Link to="/manage-doctors">
              <Button variant="primary" className="w-100">
                Go to Manage Doctors
              </Button>
            </Link>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm p-3">
            <h5>Manage Patients</h5>
            <Link to="/manage-patients">
              <Button variant="primary" className="w-100">
                Go to Manage Patients
              </Button>
            </Link>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm p-3">
            <h5>Post Operation Schedule</h5>
            <Link to="/post-operation-schedule">
              <Button variant="primary" className="w-100">
                Go to Post Schedule
              </Button>
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
