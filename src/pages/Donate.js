import React, { Component } from 'react'
import OrderCard from '../components/OrderCard'

export default class Donate extends Component {
  render() {
    
    return (
      <>
      <h2 align="center" style={{margin: '20px'}}>Select an order</h2>
      <OrderCard/>
      </>
    )
  }
}
