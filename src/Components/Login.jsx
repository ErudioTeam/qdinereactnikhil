import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import chef from '../Images/chef.jpeg';
import { Link, useNavigate } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [roleId, setRoleId] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();


    const handleResetForm = () => {
        setEmail('');
        setPassword('');
        setShowSuccessModal(false);
        setErrorMessage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setErrorMessage('Please fill in both email and password fields.');
            return;
        }
        // Clear any previous error messages
        setErrorMessage('');

        try {
            const response = await axios.post('http://103.186.185.127:8082/userlogin', {
                email: email,
                password: password,
            });

            const roleId = response.data.data.userInfo.id;
            
            setRoleId(roleId);
            sessionStorage.setItem('Role_Id',roleId);

            if (roleId === 2) {
                setShowSuccessModal('Successful Login! Welcome Customer');
                navigate('/home');
            } else if (roleId === 1) {
                setShowSuccessModal('Successful Login! Welcome Admin');
                navigate('/users');
            } else {
                setShowSuccessModal('Successful Login! Welcome Owner');
                navigate('/home');
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                // 401 Unauthorized: Incorrect password
                setErrorMessage('Incorrect password');
            } else {
                // Handle other errors
                console.error('Login failed:', error);
                setErrorMessage('Login failed. Please try again.');
            }
        }
    };

    return (
        <Container >
            <Row className="justify-content-center align-items-center min-vh-100" >
                <Col md={6} style={{ border: '2px solid #000', padding: '10px' }}>
                    <div className="login-box" >
                        <Row>
                            <Col xs={12} className="text-center">
                                <h2>Login</h2>
                            </Col>
                            <Col sm={4} md={3} className="text-center mx-auto">
                                <Image src={chef} roundedCircle />
                            </Col>
                        </Row>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            {errorMessage && (
                                <div className="alert alert-danger">{errorMessage}</div>
                            )}
                            <Button className="mt-2" variant="primary" type="submit" style={{ marginTop: '10px' }}>
                                Login
                            </Button>
                            <p>
                                Don't have an account?
                                <Link style={{padding:'10px'}} to="/register">Register Here</Link>
                            </p>
                        </Form>
                        <Modal show={showSuccessModal} onHide={handleResetForm}>
                            <Modal.Header closeButton>
                                <Modal.Title>Success!</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {roleId === 2 ? 'Welcome Customer' : roleId === 1 ? 'Welcome Admin' : 'Welcome Owner'}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={handleResetForm}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
