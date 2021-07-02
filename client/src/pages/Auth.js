import React from 'react';
import { Container, Card, Form, Button, Row } from 'react-bootstrap';
import {NavLink, useLocation} from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    
    return (
        <Container 
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card className="p-5" style={{width: 600}}>
                <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-2"
                        placeholder="Enter your email..."
                    />
                     <Form.Control
                        className="mt-2"
                        placeholder="Enter your password..."
                    />
                    <Row className="d-flex justify-content-between mt-2 pl-3 pr-3">
                        { isLogin ?
                            <div>
                                Don't have an account? <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
                            </div>
                            :
                            <div>
                                Do you have an account? <NavLink to={LOGIN_ROUTE}>Authorization</NavLink>
                            </div>
                        }   
                        <Button 
                            variant={"outline-success"}
                        >
                            {isLogin ? 'Sign in' : 'Sign up'}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
}

export default Auth;