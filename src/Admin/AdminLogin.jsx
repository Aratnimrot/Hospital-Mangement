import React, { useState } from "react";
import { Button, Form, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // useNavigate instead of useHistory

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Create navigate function

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "Admin" && password === "Admin123") {
      navigate("/admin-dashboard"); // Use navigate() instead of history.push()
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Card className="shadow-lg p-5" style={{ width: "400px" }}>
        <h3 className="text-center mb-3">Admin Login</h3>
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="password" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mt-3">
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default AdminLogin;
// src/components/Login.js
