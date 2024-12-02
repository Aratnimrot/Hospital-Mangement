// src/components/ManageDoctors.js

import React, { useState } from "react";
import { Button, Form, Table, Card } from "react-bootstrap";

const ManageDoctorsDetails = () => {
  const [doctorName, setDoctorName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [doctors, setDoctors] = useState([]);

  const handleAddDoctor = (e) => {
    e.preventDefault();
    const newDoctor = { doctorName, specialty };
    setDoctors([...doctors, newDoctor]);
    setDoctorName("");
    setSpecialty("");
  };

  return (
    <Card className="shadow-sm p-4">
      <h4 className="text-center mb-3">Manage Doctors</h4>

      <Form onSubmit={handleAddDoctor}>
        <Form.Group controlId="doctorName">
          <Form.Label>Doctor Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter doctor name"
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="specialty" className="mt-3">
          <Form.Label>Specialty</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter doctor specialty"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mt-3">
          Add Doctor
        </Button>
      </Form>

      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Doctor Name</th>
            <th>Specialty</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={index}>
              <td>{doctor.doctorName}</td>
              <td>{doctor.specialty}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export default ManageDoctorsDetails;
