// src/components/ViewDoctors.js

import React from "react";
import { Table, Container } from "react-bootstrap";

const ViewDoctorsDetails = () => {
  const doctors = [
    { name: "Dr. John Doe", specialty: "Cardiology", contact: "123-456-789" },
    { name: "Dr. Jane Smith", specialty: "Neurology", contact: "987-654-321" },
    {
      name: "Dr. Alan Brown",
      specialty: "Orthopedics",
      contact: "555-123-456",
    },
  ];

  return (
    <Container className="mt-4">
      <h3>Doctor Details</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialty</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={index}>
              <td>{doctor.name}</td>
              <td>{doctor.specialty}</td>
              <td>{doctor.contact}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ViewDoctorsDetails;
