import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class Billing extends Component {
  render() {
    return (
      <>
      <Form>
          <h2>Enter Details</h2>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Address" />
          </Form.Group>

          <h3>Payment Information</h3>
        
        <Link to="/thank-you">
          <Button variant="primary" type="submit">
              Submit
            </Button>

        </Link>
        </Form>
      </>
    )
  }
}
