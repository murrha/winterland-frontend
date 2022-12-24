import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'
import { productsArray } from '../productsStore'
import ProductCard from '../components/ProductCard'

export default class Store extends Component {
  render() {
    return (
      <>
      <h2 align="center" style={{margin: '20px'}}>Items Available</h2>

      <Row xs={ 1} md= {3} className ="g-4">
            {productsArray.map((product, idx) => (
            <Col align="center" key={idx}>
                <ProductCard product = {product}/>
        </Col>
        ))}
        
      </Row>
      </>
    )
  }
}
