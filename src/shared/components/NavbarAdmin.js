import React, {useContext} from 'react'
import {useNavigate, Link} from "react-router-dom";
import {Button, Navbar} from "react-bootstrap";
import img from "../../assets/img/marketplace.png"
import * as PropTypes from "prop-types";
import {AuthContext} from "../../components/auth/authContext";


export const NavbarAdmin = () => {
  const {dispatch} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout=()=>{
    dispatch({type: "LOGOUT"})
    navigate("/auth",{
      replace: true
    });
  }
  return (
      <Navbar variant="dark" style={{backgroundColor:"#001d3d", padding:"9px"}}>
        <Navbar.Brand>
          <Image className="ms-2" src={img} style={{height:"auto", width:"30px"}}/>{" "}
          MarketPlace
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link to={"/category"} className="nv-link">
            Categories
          </Link>
          <Link to={"/subcategory"} className="nv-link">
            Subcategories
          </Link>
        </Nav>
        <Button variant="outline-light" onClick={handleLogin}>
          <FeatherIcon icon={"log-in"}/>
          Log-in
        </Button>
      </Navbar>
  )
}
