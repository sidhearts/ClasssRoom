import React, { useState, Component } from 'react';
import { Navbar, Nav, Button, Modal, Form, Image, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { image } from './images';
import '../index.css';
import fire from '../config/fire';


class Login extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            show: false,
            email: "",
            password: ""
        }
        this.handleClose = this.handleClose.bind(this);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then().catch((err) =>{
            console.log(err);
        })
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleClose(){
        this.setState({
            show: !this.state.show
        })
    }

    render(){
        return (
            <div id="bg">
                <div>
                    <Navbar bg="light">
                        <Navbar.Brand href="#">ClassRoom</Navbar.Brand>
                        <Nav className="ml-auto">
                            <Nav.Link href="help"><FontAwesomeIcon icon={faQuestionCircle} /> Help</Nav.Link>
                            <Button onClick={this.handleClose}><FontAwesomeIcon icon={faSignInAlt} /> SignIn</Button>
                        </Nav>
                    </Navbar>
                </div>
                <div>
                    <Modal
                        show={this.state.show}
                        onHide={this.handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>ClassRoom</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h4 className="text-center">Sign In</h4><hr />
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name="email" onChange={this.handleChange} value={this.state.email} type="email" placeholder="Enter email" />
                                </Form.Group>
    
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="password" onChange={this.handleChange} value={this.state.password} type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group>
                                    <div className="d-flex justify-content-center m-1">OR</div>
                                    <div className="d-flex justify-content-center"><Button variant="light"><img src="https://img.icons8.com/color/32/000000/google-logo.png" />| CONTINUE WITH GOOGLE</Button></div>
                                    <div className="d-flex justify-content-center m-1">Don't have an account?</div>
                                    <div className="d-flex justify-content-center"><a href="#">Create an Account</a></div>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>
                            <Button variant="success" onClick={this.login} >Sign In <FontAwesomeIcon icon={faSignInAlt} /></Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div className="container">
                    <h1 className="text-center heading m-5" style={{fontSize: 65}}>Welcome To ClassRoom</h1>
                    <div className="row">
                        <div className="col align-self-center">
                            <Image fluid src={image.laptop} />
                        </div>
                        <div className="col mt-lg-5">
                            <h1 className="heading text-center mt-lg-5">Everything teachers and students need to work better, together</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;