import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const AdminDashboard = () => {
  return (
    <Container className="my-4">
      <Row>
        <h2 className="text-center mb-4">Users Dashboard</h2>
        <Col md={4}>
          <Card className="shadow-sm p-3">
            <h5> UserRegister</h5>
            <Link to="/register">
              <Button variant="primary" className="w-100">
                UserRegister
              </Button>
            </Link>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm p-3">
            <h5>ViewDoctorsDetails</h5>
            <Link to="/doctors-details">
              <Button variant="primary" className="w-100">
                ViewDoctorsDetails
              </Button>
            </Link>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm p-3">
            <h5>ViewSurgicalInformation</h5>
            <Link to="/surgical-information">
              <Button variant="primary" className="w-100">
                ViewSurgicalInformation
              </Button>
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
