import { IconButton } from "@mui/material";
import { Col } from "react-bootstrap";
import InfoIcon from '@mui/icons-material/Info';

export const WorkCard = ({ role, company, description, imgUrl, infoLink}) => {

  return (
    <Col size={16} sm={6} md={4}>
         <div className="proj-imgbx">
        <img src={imgUrl}/>
        <div className="proj-txtx"></div>
        <div className="proj-txtx">
          <h4>{role}</h4>
          <h5><i>{company}</i></h5>
          <br></br>
          <span>{description}</span>
          </div>
          <IconButton onClick = {() => window.open(infoLink)}>
            <InfoIcon />
          </IconButton>
      </div>
    </Col>
  )
}