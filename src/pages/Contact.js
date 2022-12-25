import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className="container">

        <h2 align="center" style={{margin: '20px'}}>About</h2>
        <p>This project was developed by Marja Centina for the MLH's Hacky Winterland 2022.</p>

        <h3>Socials</h3>
        <ul>
          <li><a href="https://www.linkedin.com/in/marja-katrina/" target="_blank" rel="noreferrer" >LinkedIn</a></li>
          <li><a href="https://github.com/murrha" target="_blank" rel="noreferrer" >Github</a></li>
        </ul>
      </div>
    )
  }
}
