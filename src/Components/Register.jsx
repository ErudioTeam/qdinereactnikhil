import React, { useState } from 'react';
import { Form, FormGroup, Button, FormControl, Container, Image } from 'react-bootstrap';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Axios from "axios";
import { Link } from "react-router-dom";
import icon_signup from "../Images/icon_signup.jpeg";

export default function UserRegister() {
    const [id, setId] = useState("");
    const [roleId, setRoleId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [registeredAt, setRegisteredAt] = useState("");
    const [lastLogin, setLastLogin] = useState("");
    const [intro, setIntro] = useState("");
    const [profile, setProfile] = useState("");

    const registerUser = (e) => {
        e.preventDefault();
        console.log("function called");
        Axios.post("http://103.186.185.127:8082/users", {
            roleId: 300,
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            mobile: mobile,
            email: email,
            Password: Password,
            registeredAt: Date.now(),
            lastLogin: Date.now(),
            intro: intro,
            profile: profile,
        }).then((response) => {
            alert("User Added Successfully");
        });
    };

    return (
        <Container className="d-flex align-items-center vh-100">
            <Form className="w-100" md={6} style={{ border: '2px solid #000', padding: '10px' }}>
                <Row>
                    <Col xs={12} className="text-center">
                        <h2>Sign Up</h2>
                    </Col>
                    <Col xs={1} md={2} className="text-center mx-auto">
                        <Image src={icon_signup} rounded />
                    </Col>
                </Row>
                <FormGroup className="mb-3">
                    <FormControl
                        type="text"
                        className="form-control mb-4"
                        name="fullname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                    />
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormControl
                        type="text"
                        className="form-control mb-4"
                        name="middlename"
                        value={middleName}
                        onChange={(e) => setMiddleName(e.target.value)}
                        placeholder="Middle Name"
                    />
                </FormGroup>
                <FormGroup className='mb-3'>
                    <FormControl
                        type="text"
                        className="form-control mb-4"
                        name="lastname"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                    />
                </FormGroup>
                <FormGroup className='mb-3'>
                    <FormControl
                        type="text"
                        className="form-control mb-4"
                        name="mobile"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="Mobile"
                    />
                </FormGroup>
                <FormGroup className='mb-3'>
                    <FormControl
                        type="text"
                        className="form-control mb-4"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                </FormGroup>
                <FormGroup className='mb-3'>
                    <FormControl
                        type="password"
                        className="form-control mb-4"
                        name="Password"
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </FormGroup>
                <FormGroup className='mb-3'>
                    <FormControl
                        type="text"
                        className="form-control mb-4"
                        name="intro"
                        value={intro}
                        onChange={(e) => setIntro(e.target.value)}
                        placeholder="Intro"
                    />
                </FormGroup>
                <FormGroup className='mb-3'>
                    <FormControl
                        type="text"
                        className="form-control mb-4"
                        name="profile"
                        value={profile}
                        onChange={(e) => setProfile(e.target.value)}
                        placeholder="Profile"
                    />
                </FormGroup>

                <button
                    onClick={(e) => registerUser(e)}
                    className="btn btn-primary btn-block">
                    Submit
                </button>
                <Row className="mt-3">
                    <Col>
                        <p className="text-center">
                            Already have an account?{" "}
                            <Link to="/">
                                Log In
                            </Link>
                        </p>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}




// function MyForm() {
//     return (
//         <Container className="d-flex align-items-center vh-100">
//             <Form className="w-100" md={6} style={{ border: '2px solid #000', padding: '10px' }}>
//                 <Row>
//                     <Col xs={12} className="text-center">
//                         <h2>Sign Up</h2>
//                     </Col>
//                     <Col xs={1} md={2} className="text-center mx-auto">
//                         <Image src={icon_signup} rounded />
//                     </Col>
//                 </Row>

//                 <FormGroup className="mb-3">
//                     <FormControl
//                         type="email"
//                         name="floating_email"
//                         id="floating_email"
//                         placeholder="Email address"
//                         required
//                     />
//                 </FormGroup>
//                 <FormGroup className="mb-3">
//                     <FormControl
//                         type="password"
//                         name="floating_password"
//                         id="floating_password"
//                         placeholder="Password"
//                         required
//                     />
//                 </FormGroup>
//                 <FormGroup className="mb-3">
//                     <FormControl
//                         type="password"
//                         name="repeat_password"
//                         id="floating_repeat_password"
//                         placeholder="Confirm password"
//                         required
//                     />
//                 </FormGroup>
//                 <div className="row mb-3">
//                     <div className="col-md-6">
//                         <FormGroup>
//                             <FormControl
//                                 type="text"
//                                 name="floating_first_name"
//                                 id="floating_first_name"
//                                 placeholder="First name"
//                                 required
//                             />
//                         </FormGroup>
//                     </div>
//                     <div className="col-md-6">
//                         <FormGroup>
//                             <FormControl
//                                 type="text"
//                                 name="floating_last_name"
//                                 id="floating_last_name"
//                                 placeholder="Last name"
//                                 required
//                             />
//                         </FormGroup>
//                     </div>
//                 </div>
//                 <div className="row mb-3">
//                     <div className="col-md-6">
//                         <FormGroup>
//                             <FormControl
//                                 type="tel"
//                                 pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
//                                 name="floating_phone"
//                                 id="floating_phone"
//                                 placeholder="Phone number (123-456-7890)"
//                                 required
//                             />
//                         </FormGroup>
//                     </div>
//                 </div>
//                 <Button
//                     type="submit"
//                     variant="primary"
//                     className="w-100"
//                 >
//                     Submit
//                 </Button>
//                 <Row className="mt-3">
//                     <Col>
//                         <p className="text-center">
//                             Already have an account?{" "}
//                             <Link to="/">
//                                 Log In
//                             </Link>
//                         </p>
//                     </Col>
//                 </Row>
//             </Form>
//         </Container>
//     );
// }

// export default MyForm;
