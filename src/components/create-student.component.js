import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateStudent extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    

    // Setting up state
    this.state = {
      name: '',
      email: '',
      rollno: '',
      error: ''
    }
  }

  onChangeStudentName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeStudentEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeStudentRollno(e) {
    this.setState({ rollno: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const studentObject = {
      name: this.state.name,
      email: this.state.email,
      rollno: this.state.rollno
    };
    axios.post('http://localhost:4000/students/create', studentObject)
      .then(res =>{ 
        console.log(res.data)
      })
      .catch(
        error => {
           this.setState({
             error : error.message
           })
           console.log(error.message + " from frontend")

          });

    this.setState({ name: '', email: '', rollno: '' ,error: '',msg:''})
  }

  render() {
    let errorcomp
    if(this.state.error !== ''){
       errorcomp = <h6>{this.state.error}</h6>
      }
     
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} required  />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail}  required/>
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="number" value={this.state.rollno} onChange={this.onChangeStudentRollno} required/>
        </Form.Group>
  
        {errorcomp}
        <Button variant="primary" size="lg" block="block" type="submit">
          Create Student
        </Button>
      </Form>
    </div>);
  }
}