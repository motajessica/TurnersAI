import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Form, Button } from "react-bootstrap";

function Search() {
  return (
    <div className="d-flex my-4 justify-content-center">
      <Form className="d-flex ">
        <Form.Control
          type="search"
          placeholder="Find a Car"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-light btn-sm">Search</Button>
      </Form>
    </div>
  );
}
export default Search;
