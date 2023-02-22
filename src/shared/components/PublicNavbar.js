import React from 'react'
import {useNavigate, Link} from "react-router-dom";
import {Button, Nav, Navbar} from "react-bootstrap";
import img from "../../assets/img/marketplace.png"
import * as PropTypes from "prop-types";
import FeatherIcon from "feather-icons-react";

FeatherIcon.propTypes = {icon: PropTypes.string};
export const PublicNavbar = () => {
  const navigation = useNavigate();
  const handleLogin = ()=>{
    navigation("/auth");
  }
  return (
    <Navbar variant="dark" style={{backgroundColor:"#001d3d", padding:"9px"}}>
      <Navbar.Brand>
        <Image className="ms-2" src={img} style={{height:"auto", width:"30px"}}/>{" "}
        MarketPlace
      </Navbar.Brand>
      <Nav className="me-auto">
        <Link to={"/home"} className="nv-link">
          Contacto
        </Link>
      </Nav>
      <Button variant="outline-light" onClick={handleLogin}>
        <FeatherIcon icon={"log-in"}/>
        Log-in
      </Button>
    </Navbar>
  )
}
