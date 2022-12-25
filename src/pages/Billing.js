import React, { Component } from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class Billing extends Component {
  render() {
    return (
      <>
      <Form style={{margin: '20px'}}>
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

          <Row className="mb-3">
          <Form.Group as={Col} md="6">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" />
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" />
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="text" placeholder="Zip Code" />
          </Form.Group>
        </Row>

          <h3>Payment Information</h3>
          <Form.Group className="mb-3">
            <Form.Label>Card Number</Form.Label>
            <Form.Control type="tel" placeholder="Card Number" pattern ='[\d|]{16,22}' maxLength='19'/>
          </Form.Group>
          <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>CVC</Form.Label>
            <Form.Control type="text" placeholder="CVC" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Expiry Date</Form.Label>
            <Form.Control type="text" placeholder="MM/YY" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="text" placeholder="Zip Code" />
          </Form.Group>
        </Row>
        
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
