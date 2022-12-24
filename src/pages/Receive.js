import React, { Component } from 'react'
import Store from './Store';
import {Button} from 'react-bootstrap'

export default class Receive extends Component {
  render() {

    return (
      <div>
        <Store/>
        <br/>
        <Button>Next</Button>
      </div>
    )
  }
}
