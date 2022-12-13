import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/modplanus.png";
import projImg2 from "../assets/img/devenable.png";
import projImg3 from "../assets/img/dukeaemon.png";
import projImg4 from "../assets/img/prism.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "ModPlaNUS",
      description: "ModPlaNUS is a web app that helps automate module planning for different semesters and calculates the CAP for each semester.",
      imgUrl: projImg1,
      githubLink: "https://github.com/ModPlaNUS/ModPlaNUS",
      infoLink:"https://www.youtube.com/watch?v=-U2PXGpWD5U",
    },
    {
      title: "DevEnable",
      description: "DevEnable is as a desktop application that helps developers manage multiple projects, track clients and repositories.",
      imgUrl: projImg2,
      githubLink: "https://github.com/AY2223S1-CS2103-F13-1/tp",
      infoLink: "https://ay2223s1-cs2103-f13-1.github.io/tp/",
    },
    {
      title: "Duke Aemon",
      description: "Duke Aemon is a desktop application which is a task management app that packs task management with a storyline and unique Duke personality.",
      imgUrl: projImg3,
      githubLink:"https://github.com/Aishwarya-Hariharan-Iyer/ip",
      infoLink: "https://aishwarya-hariharan-iyer.github.io/ip/",
    },
    {
      title: "PRISM Report Automation",
      description: "The PRISM software automates the generation of customizable reports, in the form of PowerPoint presentations, from the data compiled in spreadsheets.",
      imgUrl: projImg4,
      githubLink: "https://github.com/Aishwarya-Hariharan-Iyer/Automated-Report-Generation",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={16}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first" fluid={true}>
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Resume</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Contact Me</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row xs='4' sm='4' md='4' lg='4' xl='4' xxl='4'>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
