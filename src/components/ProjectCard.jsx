import { IconButton } from "@mui/material";
import { Col } from "react-bootstrap";
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';

export const ProjectCard = ({ title, description, imgUrl, githubLink, infoLink }) => {

  return (
    <Col size={16} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <span>
          <IconButton onClick = {() => window.open(githubLink)}>
            <GitHubIcon />
          </IconButton>
          <IconButton onClick = {() => window.open(infoLink)}>
            <InfoIcon />
          </IconButton>
          </span>
        </div>
      </div>
    </Col>
  )
}
