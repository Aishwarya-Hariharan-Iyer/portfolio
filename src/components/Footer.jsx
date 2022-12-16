import GitHub from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from '../assets/img/mail.svg';
import navIcon2 from '../assets/img/linkedin.svg';
import navIcon3 from '../assets/img/github.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
             <a href="#"><img src={logo} alt="Icon" /></a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <br></br>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/aishwarya-h-iyer" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
