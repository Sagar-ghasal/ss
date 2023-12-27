import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Learn from "../../components/Learn";

const Header = ()=>{
    return(
        <header>
        <Navbar expand="lg" className="bg-success">
            <div className="container-fluid">
                <Navbar.Brand href="/">React Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ms-auto" >
                        <Nav.Link as={Link} to="/" >Home</Nav.Link>
                        <Nav.Link as={Link} to="/create" >Create</Nav.Link>
                        <Learn/>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>


        </header>
    )
}


export default Header