// src/components/UserRegister.js

import React, { useState } from "react";
import { Button, Form, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      // For now, we just log the data and navigate to the login page
      console.log("User Registered:", { username, password });
      navigate("/login");
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Card className="shadow-lg p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-3">User Registration</h3>
        <Form onSubmit={handleRegister}>
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

          <Form.Group controlId="confirmPassword" className="mt-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mt-3">
            Register
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default UserRegister;
