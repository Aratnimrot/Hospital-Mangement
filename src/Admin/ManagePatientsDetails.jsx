// src/components/ManagePatients.js

import React, { useState } from "react";
import { Button, Form, Table, Card } from "react-bootstrap";

const ManagePatientsDetails = () => {
  const [patientName, setPatientName] = useState("");
  const [condition, setCondition] = useState("");
  const [patients, setPatients] = useState([]);

  const handleAddPatient = (e) => {
    e.preventDefault();
    const newPatient = { patientName, condition };
    setPatients([...patients, newPatient]);
    setPatientName("");
    setCondition("");
  };

  return (
    <Card className="shadow-sm p-4">
      <h4 className="text-center mb-3">Manage Patients</h4>
      <Form onSubmit={handleAddPatient}>
        <Form.Group controlId="patientName">
          <Form.Label>Patient Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter patient name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="condition" className="mt-3">
          <Form.Label>Condition</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter patient condition"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mt-3">
          Add Patient
        </Button>
      </Form>

      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Condition</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.patientName}</td>
              <td>{patient.condition}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export default ManagePatientsDetails;
