// src/components/PostOperationSchedule.js

import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";

const PostOperationSchedule = () => {
  const [operationDetails, setOperationDetails] = useState("");

  const handlePostSchedule = (e) => {
    e.preventDefault();
    alert("Operation Scheduled: " + operationDetails);
  };

  return (
    <Card className="shadow-sm p-4">
      <h4 className="text-center mb-3">Post Operation Schedule</h4>
      <Form onSubmit={handlePostSchedule}>
        <Form.Group controlId="operationDetails">
          <Form.Label>Operation Details</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter operation details"
            value={operationDetails}
            onChange={(e) => setOperationDetails(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mt-3">
          Post Operation
        </Button>
      </Form>
    </Card>
  );
};

export default PostOperationSchedule;
