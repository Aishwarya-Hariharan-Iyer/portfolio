import { Container, Row, Col } from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"

export const Banner = () => {
    return (
      <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs = {12} md={6} xl={7}>
                    <span className = "tagline">Welcome To My Portfolio</span>
                    <h1>('Hi I'm webcoded')<span className="wrap">web developer</span></h1>
                    <p>This is where I fill details about myself</p>
                    <button onClick={() => console.log('connect')}>Let's Connect<ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src = {headerImg} alt="Header Img" />
                </Col>
            </Row>
        </Container>
      </section>  
    )
}