import React, { Component } from "react";
import { Form, Button, FormGroup, Input, Label } from "reactstrap";
require('dotenv').config()


const sendgrid = process.env.REACT_APP_SENDGRID_API_KEY;
const sgMail = require('@sendgrid/mail');


export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phnumber: "",
      comment: ""
      };
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    
    handleChange(e) {
      this.setState(
        {[e.target.name]: e.target.value}
      );
    }
    
    handleSubmit(event) {
      // displaying the alert
      event.preventDefault();
      let log = [];
      Object.entries(this.state).forEach(([key, value]) => {
        log.push(`${key} = ${value} \n`);
      })
      alert('You have sent :\n' + log);

      

      // prevent refresh after pressing the submit button once
      
    }
    
    render() {
 


      return (
        <Form onSubmit={this.handleSubmit} action="mailto:samuelrazali@gmail.com" method="post" enctype="text/plain">
        <FormGroup>
        <Label> Name </Label>
        <Input type="text" name="name" onChange={e => this.handleChange(e)} />
        </FormGroup>
        <FormGroup>
        <Label> Email </Label>
        <Input type="text" name="email" onChange={e => this.handleChange(e)} />
        </FormGroup>
        <FormGroup>
        <Label> Phone Number </Label>
        <Input type="text" name="phnumber" onChange={e => this.handleChange(e)} />
        </FormGroup>
        <FormGroup>
        <Label> Comment </Label>
        <Input type="textarea" name="comment" onChange={e => this.handleChange(e)} />
        </FormGroup>
        <Button type="submit" method="post">Submit (Sending with Sendgrid)</Button>
        </Form>
      );
    }
  }


  
