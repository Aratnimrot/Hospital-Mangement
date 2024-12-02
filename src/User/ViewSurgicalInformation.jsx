// src/components/SurgicalInformation.js

import React from "react";
import { Table, Container } from "react-bootstrap";

const ViewSurgicalInformation = () => {
  const surgeries = [
    { name: "Appendectomy", date: "2024-12-01", doctor: "Dr. John Doe" },
    { name: "Knee Surgery", date: "2024-12-05", doctor: "Dr. Alan Brown" },
    { name: "Heart Surgery", date: "2024-12-10", doctor: "Dr. Jane Smith" },
  ];

  return (
    <Container className="mt-4">
      <h3>Surgical Information</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Surgery Name</th>
            <th>Date</th>
            <th>Doctor</th>
          </tr>
        </thead>
        <tbody>
          {surgeries.map((surgery, index) => (
            <tr key={index}>
              <td>{surgery.name}</td>
              <td>{surgery.date}</td>
              <td>{surgery.doctor}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ViewSurgicalInformation;
