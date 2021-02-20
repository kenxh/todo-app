import React, { useState } from "react";
import { Alert, Button, ListGroup, ListGroupItem } from "react-bootstrap";

const Task = (name) => {
  /* const [show, setShow] = useState(false);

  const handleClose = () => setShow(false); */
  
  return (
    <div>
      {/**
       * TODO: add an html or bootstrap element that uses the name variable to display an individual task
       */}
      <ListGroup>
        <ListGroup.Item /*action onClick={handleClose} */>{name}
        <div className="d-flex justify-content-end">
          <Button variant="outline-success">Complete</Button></div>
          </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Task;