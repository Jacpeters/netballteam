import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Container } from 'react-bootstrap'
import styled from "styled-components";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function NavBar() {
    return(
    
        <Navbar collapseOnSelect expand="lg" style={{background:"#09425A"}} variant="dark">
        <Container>
            
        <Navbar.Brand href="/">Train-Netball</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
			<Nav.Link href="/courts">Courts</Nav.Link>
            <NavDropdown title="Forum" id="collasible-nav-dropdown">
			  <NavDropdown.Item href="#action/3.1">Homepage</NavDropdown.Item>
			  <NavDropdown.Item href="#action/3.1">Notifications</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Saved Threads</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Team Subforums</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Private Messages</NavDropdown.Item>
            </NavDropdown> 
          </Nav>
          <Nav className='navbar-nav ml-auto'>
          
            <Nav.Link href="/login" style={{color:'#fff'}}>
            <FontAwesomeIcon icon={faUser} style={{padding: '0px 2px'}} />
             Login
            </Nav.Link> 
            <Nav.Link href="/signup" style={{color:'#fff'}}>
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    
    )
}