import React, { useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import  { useNavigate } from 'react-router-dom'
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';


const Home = ()=>{
    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="primary">
                        <Container fluid>
                            <Navbar.Brand href="/">Electricity Billing System <a href="/"></a></Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/login">Login</Nav.Link>
                                
                            </Nav>
                            </Navbar.Collapse>
                            
                        </Container>
                    </Navbar>
        </>
    )
}

export default Home;